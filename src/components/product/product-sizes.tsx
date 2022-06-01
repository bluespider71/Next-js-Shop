import cn from "classnames";
import React, { useState } from "react";
import { Size } from "@framework/types";
import { size } from "lodash";
export default function ProductSizes(props: any) {
	return (
		<div className="mb-4">
			<h3 className="text-base md:text-lg text-heading font-semibold mb-2.5 capitalize">
				size
			</h3>
			<ul className="colors flex flex-wrap -me-3">
				{props.sizes?.map((size: Size, index: any) => (
					<li
						className={cn(
							"cursor-pointer rounded border border-gray-100 w-9 md:w-11 h-9 md:h-11 p-1 mb-2 md:mb-3 me-2 md:me-3 flex justify-center items-center text-heading text-xs md:text-sm uppercase font-semibold transition duration-200 ease-in-out hover:border-black",
							{
								"border-black": props.selectedSize === size.size,
							}
						)}
						key={index}
						onClick={() => {
							props.onClick(size.size);
						}}
					>
						{size.size}
					</li>
				))}
			</ul>
		</div>
	);
}
