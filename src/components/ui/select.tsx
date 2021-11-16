import cn from "classnames";
import React, { SelectHTMLAttributes } from "react";
import { useTranslation } from "next-i18next";

export interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
	className?: string;
	selectClassName?: string;
	labelKey?: string;
	name: string;
	errorKey?: string;
	shadow?: boolean;
	variant?: "normal" | "solid" | "outline";
	options: { id: string; name: string }[];
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
const Select = React.forwardRef<HTMLSelectElement, Props>(
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
		return (
			<div className={className}>
				{labelKey && (
					<label
						htmlFor={name}
						className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer"
					>
						{t(labelKey)}
					</label>
				)}
				<select
					id={name}
					name={name}
					ref={ref}
					className={rootClassName}
					{...rest}
				>
					{options.map((data) => (
						<option value={`${t(data.name)}`} key={data.id}>
							{t(data.name)}
						</option>
					))}
				</select>
				{errorKey && <p className="my-2 text-xs text-red-500">{t(errorKey)}</p>}
			</div>
		);
	}
);

export default Select;
