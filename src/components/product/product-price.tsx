import React, { useState } from "react";

export default function ProductPrice(props) {
  return (
    <div className="flex items-center mt-3">
      <div className="text-heading font-semibold text-base md:text-xl lg:text-2xl">
        {props.offerPrice}
      </div>
      {
        <del className="font-segoe text-gray-400 text-base lg:text-xl ps-2.5 -mt-0.5 md:mt-0">
          {props.price}
        </del>
      }
    </div>
  );
}
