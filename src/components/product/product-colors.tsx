import React, { useState } from "react";

export default function ProductColors(props) {
  return (
   <div className="mb-4">
			<h3 className="text-base md:text-lg text-heading font-semibold mb-2.5 capitalize">
				color
			</h3>
			<ul className="colors flex flex-wrap -me-3">
				{props.variants?.map((variant) => (
					<li
					className="w-16 cursor-pointer ml-3 "
						key={`${variant.sku}`}
						
						onClick={() =>{ props.onClick(`${variant.sku}`)}}
					>
						<img src={`${variant.pictures[0]}`}
								className="h-full w-full rounded block"
															/>
					
					</li>
				))}
			</ul>
		</div>
  );
}