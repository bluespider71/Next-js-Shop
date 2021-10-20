import React, { useState } from "react";
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
import ProductColor from "@components/product/product-color";
import ProductHeader from "@components/product/product-header";
import ProductImage from "@components/product/product-image";
import ProductPrice from "@components/product/product-price";
import ProductSize from "@components/product/product-size";

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
  const { price, basePrice, discount } = usePrice({
    amount: data.sale_price ? data.sale_price : data.price,
    baseAmount: data.price,
    currencyCode: "USD",
  });
  const variations = getVariations(data.variations);
  console.log("hey", variations);
  const { slug, image, name, description } = data;

  const isSelected = !isEmpty(variations)
    ? !isEmpty(attributes) &&
      Object.keys(variations).every((variation) =>
        attributes.hasOwnProperty(variation)
      )
    : true;

  function addToCart() {
    if (!isSelected) return;
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
    router.push(`${ROUTES.PRODUCT}/${slug}`, undefined, {
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

  return (
    <div className="rounded-lg bg-white">
      <div className="flex flex-col  lg:flex-row w-full m-3 w-11/12 mx-auto overflow-hidden ">
        <div id="left" className="flex-1 ">
          <ProductImage image={image} />
        </div>

        <div id="center" className="flex-1 flex flex-col items-center">
         <ProductHeader
            name={name}
            description={description}
            navigateToProductPage={navigateToProductPage}
          />
          <ProductPrice
            discount={discount}
            price={price}
            basePrice={basePrice}
          />
          <ProductColor
            variations={variations}
            attributes={attributes}
            handleAttribute={handleAttribute}
          />
        </div>
        <div id="right" className="flex-1">
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
      </div>
    </div>
  );
}
