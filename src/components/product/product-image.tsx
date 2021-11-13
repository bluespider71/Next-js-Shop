import React, { useState } from "react";

export default function ProductImage(props: any) {
	return (
		<div className="flex-shrink-0 flex items-center justify-center w-4/5 lg:w-430px max-h-430px lg:max-h-full overflow-hidden bg-gray-300">
			<img
				src={
					props.image ?? "/assets/placeholder/products/product-thumbnail.svg"
				}
				alt={props.name}
				className="object-cover w-full h-full"
			/>
		</div>
	);
}
