import React, { useState } from "react";
import Counter from "@components/common/counter";
import Button from "@components/ui/button";
export default function ProductCart(props) {
	return (
		<div className="pt-2 md:pt-4">
			<div className="flex items-center justify-between mb-4 space-s-3 sm:space-s-4">
				<Counter
					quantity={props.quantity}
					onIncrement={() => props.setQuantity((prev) => prev + 1)}
					onDecrement={() =>
						props.setQuantity((prev) => (prev !== 1 ? prev - 1 : 1))
					}
					disableDecrement={props.quantity === 1}
				/>

				<Button
					onClick={props.addToCart}
					variant="flat"
					className={`w-full h-11 md:h-12 px-1.5 ${
						!props.isSelected && "bg-gray-400 hover:bg-gray-400"
					}`}
					disabled={!props.isSelected}
					loading={props.addToCartLoader}
				>
					{props.t("text-add-to-cart")}
				</Button>
			</div>
			{props.viewCartBtn && (
				<button
					onClick={props.navigateToCartPage}
					className="w-full mb-4 h-11 md:h-12 rounded bg-gray-100 text-heading focus:outline-none border border-gray-300 transition-colors hover:bg-gray-50 focus:bg-gray-50"
				>
					{props.t("text-view-cart")}
				</button>
			)}

			<Button
				onClick={props.navigateToProductPage}
				variant="flat"
				className="w-full h-11 md:h-12"
			>
				{props.t("text-view-details")}
			</Button>
		</div>
	);
}
