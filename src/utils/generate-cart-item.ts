interface Item {
	id: string | number;
	price: number;
	offerPrice?: number;
	[key: string]: unknown;
}
export function generateCartItem(
	item: Item,
	{ size, variantSku }: { size: string; variantSku: string }
) {
	const { id, price, offerPrice } = item;
	return {
		productId: id,
		//i left price so that you can compare the price that the user sees with the price in the database
		price: offerPrice ? offerPrice : price,
		size,
		variantSku,
	};
}
