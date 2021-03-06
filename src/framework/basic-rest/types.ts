import { QueryKey } from "react-query";

export type CollectionsQueryOptionsType = {
	text?: string;
	collection?: string;
	status?: string;
	limit?: number;
};

export type CategoriesQueryOptionsType = {
	text?: string;
	category?: string;
	status?: string;
	limit?: number;
};
export type ProductsQueryOptionsType = {
	type: string;
	text?: string;
	category?: string;
	status?: string;
	limit?: number;
};
export type QueryOptionsType = {
	text?: string;
	category?: string;
	status?: string;
	limit?: number;
};

export type ShopsQueryOptionsType = {
	text?: string;
	shop?: Shop;
	status?: string;
	limit?: number;
};

export type QueryParamsType = {
	queryKey: QueryKey;
	pageParam?: string;
};
export type Attachment = {
	id: string | number;
	thumbnail: string;
	original: string;
};
export type Category = {
	id: number | string;
	name: string;
	slug: string;
	details?: string;
	image?: Attachment;
	icon?: string;
	products?: Product[];
	productCount?: number;
	subCategoryIds?: string[] | SubCategory[];
	status?: string;
	createdAt?: string;
	updateAt?: string;
};

export type Collection = {
	id: number | string;
	name: string;
	slug: string;
	details?: string;
	image?: Attachment;
	icon?: string;
	products?: Product[];
	productCount?: number;
};
export type Brand = {
	id: number | string;
	name: string;
	slug: string;
	image?: Attachment;
	background_image?: any;
	[key: string]: unknown;
};
export type Tag = {
	id: string | number;
	name: string;
	slug: string;
};
export type Product = {
	id: number | string;
	name: string;
	slug: string;
	price: number;
	quantity: number;
	sale_price?: number;
	image: Attachment;
	sku?: string;
	gallery?: Attachment[];
	category?: Category;
	tag?: Tag[];
	meta?: any[];
	description?: string;
	variations?: object;
	[key: string]: unknown;
	categoryIds?:  Category[] ;
	subCategoryIds?: string[] | SubCategory[];
	subSubCategoryIds?: string[] | SubSubCategory[];
	offerPrice?: number;
	ownerId?: number | string;
	ratings?: number;
	totalViews?: number;
	status: Boolean;
	variants: Variant[];
	wholesale1: number;
	wholesale2: number;
	retailPrice1: number;
	retailPrice2: number;
	createdAt: Date;
	updateAt: Date;
};
export type OrderItem = {
	id: number | string;
	name: string;
	price: number;
	quantity: number;
};
export type Order = {
	id: string | number;
	name: string;
	slug: string;
	products: OrderItem[];
	total: number;
	tracking_number: string;
	customer: {
		id: number;
		email: string;
	};
	shipping_fee: number;
	payment_gateway: string;
};

export type Shop = {
	id: string | number;
	owner_id: string | number;
	owner_name: string;
	address: string;
	phone: string;
	website: string;
	ratings: string;
	name: string;
	slug: string;
	description: string;
	cover_image: Attachment;
	logo: Attachment;
	socialShare: any;
	created_at: string;
	updated_at: string;
}
export type Variant = {
	name?: string;
	sku?: string;
	pictures: string[];
	sizes?: Size[];
};
export type Size = {
	size?: string;
	stock?: number;
};

export type SubCategory = {
	id: number | string;
	name: string;
	subSubCategoryIds?: string[] | SubSubCategory[];
	products?: Product[];
	createdAt?: string;
	updateAt?: string;
};

export type SubSubCategory = {
	id: number | string;
	name: string;
	products?: Product[];
	createdAt?: Date;
};
