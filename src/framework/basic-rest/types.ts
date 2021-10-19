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

export type QueryParamsType = {
	queryKey: QueryKey;
	pageParam?: string;
};
export type Attachment = {
	id: string | number;
	thumbnail: string;
	original: string;
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
	description: string;
	categoryIds?: string[] | Category[];
	subCategoryIds?: string[] | SubCategory[];
	subSubCategoryIds?: string[] | SubSubCategory[];
	price: number;
	offerPrice?: number;
	ownerId?: number | string;
	ratings?: number;
	totalViews?: number;
	status: Boolean;
	variant?: Variant[];
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

type Variant = {
	name?: String;
	sku?: String;
	pictures?: String[];
	sizes?: Size[];
};
type Size = {
	size?: String;
	stock?: number;
};

type Category = {
	id: number | string;
	name: String;
	slug: String;
	image?: String;
	icon?: String;
	subCategoryIds?: string[] | SubCategory[];
	products?: Product[];
	status?: String;
	folder: String;
	createdAt?: String;
	updateAt?: String;
};

type SubCategory = {
	id: number | string;
	name: String;
	subSubCategoryIds?: string[] | SubSubCategory[];
	products?: Product[];
	createdAt?: String;
	updateAt?: String;
};

type SubSubCategory = {
	id: number | string;
	name: String;
	products?: Product[];
	createdAt?: Date;
};
