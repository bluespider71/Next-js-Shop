import React, { useState } from "react";

export default function ProductImage(props) {
  return (
    <div className="flex-shrink-0 flex items-center justify-center w-full lg:w-430px max-h-430px lg:max-h-full overflow-hidden bg-gray-300">
      <img
        src={
          props.image?.original ??
          "/assets/placeholder/products/product-thumbnail.svg"
        }
        alt={name}
        className="lg:object-cover lg:w-full lg:h-full"
      />
    </div>
  );
}
