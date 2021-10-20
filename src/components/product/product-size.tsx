import React, { useState } from "react";

export default function ProductSize(props) {
  return (
    <>
   {Object.keys(props.variations).map((variation) => {
            return (
              <ProductAttributes
                key={`popup-attribute-key${variation}`}
                title={variation}
                attributes={variations[variation]}
                active={attributes[variation]}
                onClick={handleAttribute}
              />
            );
          })}
    </>
  );
}