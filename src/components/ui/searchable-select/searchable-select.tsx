import cn from "classnames";
import { Trie } from "@utils/trie";
import React, { InputHTMLAttributes, useState, useRef, useEffect } from "react";
import { useTranslation } from "next-i18next";
import styles from "./searchable-select.module.css";

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
	className?: string;
	selectClassName?: string;
	labelKey?: string;
	name: string;
	errorKey?: string;
	shadow?: boolean;
	variant?: "normal" | "solid" | "outline";
	options: { id: string; name: string }[];
	handleOptions?: any;
	setFormValue: any;
}
const classes = {
	root: "py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body rounded-md placeholder-body min-h-12 transition duration-200 ease-in-out",
	normal:
		"bg-gray-100 border-gray-300 focus:shadow focus:bg-white focus:border-primary",
	solid:
		"bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12",
	outline: "border-gray-300 focus:border-primary",
	shadow: "focus:shadow",
};
const Select = React.forwardRef<HTMLInputElement, Props>(
	(
		{
			className = "block",
			labelKey,
			name,
			errorKey,
			variant = "normal",
			shadow = false,
			selectClassName,
			options,
			id,
			disabled,
			handleOptions,
			setFormValue,
			...rest
		},
		ref
	) => {
		const rootClassName = cn(
			classes.root,
			{
				[classes.normal]: variant === "normal",
				[classes.solid]: variant === "solid",
				[classes.outline]: variant === "outline",
			},
			{
				[classes.shadow]: shadow,
			},
			selectClassName
		);

		const { t } = useTranslation();
		const [open, setopen] = useState(false);
		const [value, setValue] = useState("");
		const [query, setQuery] = useState("");
		const [trie, setTrie] = useState<Trie | null>(null);
		const selectedValueRef = useRef<HTMLInputElement | null>(null);
		useEffect(() => {
			document.addEventListener("click", close);
			return () => {
				document.removeEventListener("click", close);
			};
		}, []);
		useEffect(() => {
			let trie = new Trie();
			options.map((option) => {
				trie.insert(t(option.name).toLowerCase());
			});
			setTrie(trie);
			setValue("");
		}, [options]);

		function close(e: any) {
			setopen(e && e.target === selectedValueRef.current);
			if (e?.target !== selectedValueRef.current) {
				setQuery("");
			}
		}
		function filter() {
			if (!query) {
				return options;
			}
			let trieResult = trie?.autocomplete(query.toLowerCase());
			return options.filter((option) => {
				let isInResult = false;
				trieResult?.forEach((value) => {
					if (value === t(option.name).toLowerCase()) {
						isInResult = true;
					}
				});
				return isInResult;
			});
		}
		return (
			<div
				className={className}
				style={{
					...(disabled
						? { pointerEvents: "none", opcatity: 0 }
						: { pointerEvents: "auto", opcatity: 1 }),
				}}
			>
				{labelKey && (
					<label
						htmlFor={name}
						className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer"
					>
						{t(labelKey)}
					</label>
				)}

				<div className={styles.dropdown}>
					<div
						className={styles.control}
						onClick={() => {
							setopen((prev) => !prev);
							setQuery(value);
							setValue("");
						}}
					>
						<div className={styles["selected-value"]}>
							<input
								key={name}
								type="search"
								id={name}
								name={name}
								ref={(e) => {
									ref(e);
									selectedValueRef.current = e;
								}}
								autoComplete="new-password"
								value={value || query}
								placeholder={t("forms:message-select")}
								onChange={(e) => {
									e.preventDefault();
									setQuery(e.target.value);
								}}
								onClick={() => {
									setopen((prev) => !prev);
									setQuery("");
									setFormValue(`${name}`, "");
									if (handleOptions) {
										handleOptions("");
									}
								}}
								style={{
									...(disabled ? { background: "#dddddd" } : {}),
								}}
							/>
						</div>
						<div
							className={`${styles.arrow}   ${open ? styles.open : ""}`}
						></div>
					</div>
					<div className={`${styles.options} ${open ? styles.open : ""}`}>
						{filter()?.map((option) => (
							<div
								className={`${styles.option}   ${
									t(option.name)=== value ? styles.selected : ""
								}`}
								key={option.id}
								onClick={() => {
									setQuery("");
									setValue(t(option.name));
									setFormValue(`${name}`,t(option.name));
									setopen(false);
									if (handleOptions) {
										handleOptions(t(option.name));
									}
								}}
							>
								{t(option.name)}
							</div>
						))}
					</div>
				</div>
				{errorKey && <p className="my-2 text-xs text-red-500">{t(errorKey)}</p>}
			</div>
		);
	}
);

export default Select;
