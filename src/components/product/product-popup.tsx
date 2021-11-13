import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import isEmpty from "lodash/isEmpty";
import { ROUTES } from "@utils/routes";
import { useUI } from "@contexts/ui.context";
import Button from "@components/ui/button";
import Counter from "@components/common/counter";
import { useCart } from "@contexts/cart/cart.context";
import { ProductAttributes } from "@components/product/product-attributes";
import { generateCartItem } from "@utils/generate-cart-item";
import usePrice from "@framework/product/use-price";
import { getVariations } from "@framework/utils/get-variations";
import { useTranslation } from "next-i18next";

//ui components
import ProductCart from "@components/product/product-cart";
import ProductColors from "@components/product/product-colors";
import ProductHeader from "@components/product/product-header";
import ProductImage from "@components/product/product-image";
import ProductPrice from "@components/product/product-price";
import ProductSizes from "@components/product/product-sizes";
import ProductColorImages from "@components/product/product-color-images";

export default function ProductPopup() {
	const { t } = useTranslation("common");
	const {
		modalData: { data },
		closeModal,
		openCart,
	} = useUI();
	const router = useRouter();
	const { addItemToCart } = useCart();
	const [quantity, setQuantity] = useState(1);
	const [viewCartBtn, setViewCartBtn] = useState<boolean>(false);
	const [addToCartLoader, setAddToCartLoader] = useState<boolean>(false);
	const [image, setImage] = useState("");
	const [sizes, setSizes] = useState([]);
	const [pictures, setPictures] = useState([]);
	const [selectedSize, setSelectedSize] = useState("");
	const [selectedVariant, setSelectedVariant] = useState("");
	const [selectedPicture, setSelectedPicture] = useState(0);
	const { price, basePrice, discount } = usePrice({
		amount: data.offerPrice ? data.offerPrice : data.price,
		baseAmount: data.price,
		currencyCode: "USD",
	});
	const { variants, name, description } = data;

	useEffect(() => {
		setImage(variants[0].pictures[0]);
		setPictures(variants[0].pictures);
		setSizes(variants[0].sizes);
		setSelectedVariant(variants[0].sku);
	}, [variants]);

	const isSelected = !isEmpty(variants)
		? selectedVariant && selectedSize && true
		: true;

	function addToCart() {
		if (!isSelected) return;
		// to show btn feedback while product carting
		setAddToCartLoader(true);
		setTimeout(() => {
			setAddToCartLoader(false);
			setViewCartBtn(true);
		}, 600);
		const item = generateCartItem(data!, {
			size: selectedSize,
			variantSku: selectedVariant,
		});
		addItemToCart(item, quantity);
		console.log(item, "item");
	}

	function navigateToProductPage() {
		closeModal();
		//router.push(`${ROUTES.PRODUCT}/${slug}`
		//the below had slug as above
		router.push(`${ROUTES.PRODUCT}/${data.id}?variantSku=${selectedVariant}`, undefined, {
			locale: router.locale,
		});
	}

	function navigateToCartPage() {
		closeModal();
		setTimeout(() => {
			openCart();
		}, 300);
	}

	function handleColorSelected(sku: any) {
		variants.map((variant: any) => {
			if (variant.sku === sku) {
				setImage(variant.pictures[0]);
				setPictures(variant.pictures);
				setSizes(variant.sizes);
				setSelectedVariant(sku);
			}
		});
	}
	function handlePictureSelected(index: any) {
		setImage(pictures[index]);
		setSelectedPicture(index);
	}
	function handleSizeSelected(size: string) {
		setSelectedSize(size);
	}

	return (
		<div className="rounded-lg bg-white">
			<div className="flex flex-col lg:flex-row w-full md:w-[650px] lg:w-[960px] mx-auto overflow-hidden">
				<div className="flex">
					<ProductColorImages
						pictures={pictures}
						onClick={handlePictureSelected}
						selectedPicture={selectedPicture}
					/>
					<ProductImage image={image} name={name} />
				</div>

				<div id="right" className="flex flex-col p-5 md:p-8 w-full">
					<div className="pb-5">
						<ProductHeader
							name={name}
							description={description}
							navigateToProductPage={navigateToProductPage}
						/>
						<ProductPrice
							price={price}
							basePrice={basePrice}
							discount={discount}
						/>
					</div>
					<ProductColors
						variants={variants}
						onClick={handleColorSelected}
						selectedVariant={selectedVariant}
					/>
					<ProductSizes
						sizes={sizes}
						onClick={handleSizeSelected}
						selectedSize={selectedSize}
					/>

					<ProductCart
						navigateToProductPage={navigateToProductPage}
						navigateToCartPage={navigateToCartPage}
						addToCartLoader={addToCartLoader}
						addToCart={addToCart}
						quantity={quantity}
						setQuantity={setQuantity}
						t={t}
						viewCartBtn={viewCartBtn}
						isSelected={isSelected}
					/>
				</div>
			</div>
		</div>
	);
}
