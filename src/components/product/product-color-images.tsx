import React, { useState } from "react";

export default function ProductColorImages(props) {
	return (
		<>
			<ul className="flex flex-col w-14 ">
				{props.pictures.map((image, index) => (
					<img
						width="500"
						height="500"
						src={image}
						className="border-white border-2  border-solid cursor-pointer "
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
