import React, { useState } from "react";
import cn from "classnames";

export default function ProductColorImages(props: any) {
	return (
		<>
			<ul className="flex flex-col w-24 m-2 ">
				{props.pictures.map((image: any, index: any) => (
					<img
						src={image}
						className={cn(
							"  cursor-pointer my-1 rounded border border-gray-100 hover:border-black ",
							{
								"border-black": props.selectedPicture === index,
							}
						)}
						onClick={() => {
							props.onClick(index);
						}}
						key={index}
					/>
				))}
			</ul>
		</>
	);
}
