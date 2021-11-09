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
	const [attributes, setAttributes] = useState<{ [key: string]: string }>({});
	const [viewCartBtn, setViewCartBtn] = useState<boolean>(false);
	const [addToCartLoader, setAddToCartLoader] = useState<boolean>(false);
	const [image, setImage] = useState("");
	const [sizes, setSizes] = useState([]);
	const [pictures, setPictures] = useState([]);
	const { price, basePrice, discount } = usePrice({
		amount: data.offerPrice ? data.offerPrice : data.price,
		baseAmount: data.price,
		currencyCode: "USD",
	});
	// const variations = getVariations(data.variations);
	const { variants, name, description } = data;

	useEffect(() => {
		setImage(variants[0].pictures[0]);
		setPictures(variants[0].pictures);
		setSizes(variants[0].sizes);
	}, [variants]);

	/*
  const isSelected = !isEmpty(variations)
    ? !isEmpty(attributes) &&
      Object.keys(variations).every((variation) =>
        attributes.hasOwnProperty(variation)
      )
    : true;
*/

	function addToCart() {
		//	if (!isSelected) return;
		// to show btn feedback while product carting
		setAddToCartLoader(true);
		setTimeout(() => {
			setAddToCartLoader(false);
			setViewCartBtn(true);
		}, 600);
		const item = generateCartItem(data!, attributes);
		addItemToCart(item, quantity);
		console.log(item, "item");
	}

	function navigateToProductPage() {
		closeModal();
		//router.push(`${ROUTES.PRODUCT}/${slug}`
		//the below had slug as above
		router.push(`${ROUTES.PRODUCT}/maniac-red-boys`, undefined, {
			locale: router.locale,
		});
	}

	function handleAttribute(attribute: any) {
		setAttributes((prev) => ({
			...prev,
			...attribute,
		}));
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
			}
		});
	}
	function handlePictureSelected(index: any) {
		setImage(pictures[index]);
	}

	return (
		<div className="rounded-lg bg-white">
			<div className=" h-4 "></div>
			<div
				className="flex flex-col lg:flex-row w-full  w-11/12 mx-auto justify-items-center
       place-items-center	lg:place-items-start
      	justify-center overflow-hidden "
			>
				<div id="left" className=" flex flex-1 ">
					<div>
						<ProductColorImages
							pictures={pictures}
							onClick={handlePictureSelected}
						/>
					</div>
					<div className="mx-4">
						<ProductImage image={image} />
					</div>
				</div>

				<div id="center" className="flex-1 flex flex-col mt-5 lg:mt-0">
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

					<ProductColors variants={variants} onClick={handleColorSelected} />
					<ProductSizes sizes={sizes} />
				</div>
			</div>
			<div id="right" className="mx-auto w-1/4">
				<ProductCart
					navigateToProductPage={navigateToProductPage}
					navigateToCartPage={navigateToCartPage}
					addToCartLoader={addToCartLoader}
					addToCart={addToCart}
					quantity={quantity}
					setQuantity={setQuantity}
					t={t}
					viewCartBtn={viewCartBtn}
				/>
			</div>
			<div className=" h-4 "></div>
		</div>
	);
}
