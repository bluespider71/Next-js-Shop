import isEmpty from "lodash/isEmpty";
interface Item {
	id: string | number;
	price: number;
	offerPrice?: number;
	[key: string]: unknown;
	name: string;
}
export function generateCartItem(
	item: Item,
	attributes: object,
	image: string
) {
	const { id, price, offerPrice, name } = item;
	return {
		id: !isEmpty(attributes)
			? `${id}.${Object.values(attributes).join(".")}`
			: id,
		//i left price so that you can compare the price that the user sees with the price in the database
		price: offerPrice ? offerPrice : price,
		image,
		name,
		attributes,
	};
}
