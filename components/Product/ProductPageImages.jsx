import Image from "next/image";
import React, { useState } from "react";

const ProductPageImages = ({ images }) => {
    const [productImageSelected, selectProductImage] = useState(0);

    return (
        <div className="">
            <div className="mb-3 hover:scale-105 transition duration-300 border-4 rounded-3xl overflow-hidden">
                <Image
                    layout="responsive"
                    objectFit="cover"
                    src={images[productImageSelected].url}
                    alt={images[productImageSelected].public_id}
                    width={600}
                    height={400}
                />
            </div>
            <div className="grid grid-cols-5 gap-2">
                {images.map((image, imageIndex) => (
                    <div
                        className="w-28 h-28 hover:scale-105 transition duration-300 cursor-pointer border-4 rounded-3xl overflow-hidden"
                        key={image.id}
                        onMouseOver={() => selectProductImage(imageIndex)}
                    >
                        <Image
                            layout="responsive"
                            objectFit="cover"
                            src={image.url}
                            alt={image.public_id}
                            width={100}
                            height={100}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductPageImages;
