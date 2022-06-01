import React, { useState } from "react";

export default function ProductHeader(props) {
  return (
    <>
      <div
        className="mb-2 md:mb-2.5 block -mt-1.5"
        onClick={props.navigateToProductPage}
        role="button"
      >
        <h2 className="text-heading text-lg md:text-xl lg:text-2xl font-semibold hover:text-black">
          {props.name}
        </h2>
      </div>
      <p className="text-sm leading-6 md:text-body md:leading-7">
        {props.description}
      </p>
    </>
  );
}