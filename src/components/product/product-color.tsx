import React, { useState } from "react";
import { ProductAttributes } from "@components/product/product-attributes";

export default function ProductColor(props) {
  return (
    <>
   {Object.keys(props.variations).map((variation) => {
            return (
              <ProductAttributes
                key={`popup-attribute-key${variation}`}
                title={variation}
                attributes={props.variations[variation]}
                active={props.attributes[variation]}
                onClick={props.handleAttribute}
              />
            );
          })}
    </>
  );
}