import cn from "classnames";
import React, { TableHTMLAttributes } from "react";
import { useTranslation } from "next-i18next";

export interface Props extends TableHTMLAttributes<HTMLTableElement> {
	className?: string;
	inputClassName?: string;
	labelKey?: string;
	placeholderKey?: string;
	name: string;
	errorKey?: string;
	type?: string;
	shadow?: boolean;
	variant?: "normal" | "solid" | "outline";
	data: {
		shipping_option: string;
		chosen_courier_Id: string;
		principal_street: string;
		secondary_Street: string;
		neighborhood_citadel: string;
		house_color: string;
		phone_number_1: string;
		phone_number_2: string;
		aditional_info: string;
	}[];
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
const Table = React.forwardRef<HTMLTableElement, Props>(
	(
		{
			className = "block",
			labelKey,
			name,
			errorKey,
			placeholderKey,
			variant = "normal",
			shadow = false,
			type = "text",
			data,
			inputClassName,
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
			inputClassName
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
				<table
					id={name}
					name={name}
					type={type}
					ref={ref}
					// @ts-ignore
					placeholder={t(placeholderKey)}
					className={rootClassName}
					autoComplete="off"
					spellCheck="false"
					aria-invalid={errorKey ? "true" : "false"}
					{...rest}
				>
					<tr>
						<th>shipping option</th>
						<th>chosen courier Id</th>
						<th>principal street</th>
						<th>secondary Street</th>
						<th>neighborhood citadel</th>
						<th>house color</th>
						<th>phone number 1</th>
						<th>phone number 2</th>
						<th>aditional info</th>
					</tr>
					{data.map((d) => (
						<tr>
							<td>{d.shipping_option}</td>
							<td>{d.chosen_courier_Id}</td>
							<td>{d.principal_street}</td>
							<td>{d.secondary_Street}</td>
							<td>{d.neighborhood_citadel}</td>
							<td>{d.house_color}</td>
							<td>{d.phone_number_1}</td>
							<td>{d.phone_number_2}</td>
							<td>{d.aditional_info}</td>
						</tr>
					))}
				</table>
				{errorKey && <p className="my-2 text-xs text-red-500">{t(errorKey)}</p>}
			</div>
		);
	}
);

export default Table;
