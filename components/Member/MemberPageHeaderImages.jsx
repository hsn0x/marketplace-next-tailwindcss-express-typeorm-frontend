import { Card } from "flowbite-react";
import Image from "next/image";
import React, { useState } from "react";
import { imagesConfig } from "../../config/images";

const MemberPageHeaderImages = ({ images }) => {
    const [marketImageSelected, selectMarketImage] = useState(0);

    return (
        <div className="">
            <div className="mb-3 hover:scale-105 transition duration-300 border-4 rounded-3xl overflow-hidden">
                <Image
                    layout="responsive"
                    objectFit="cover"
                    src={
                        images[marketImageSelected]?.url ||
                        imagesConfig.defaultCovers[marketImageSelected].url
                    }
                    alt={
                        images[marketImageSelected]?.public_id ||
                        imagesConfig.defaultCovers[marketImageSelected]
                            .public_id
                    }
                    width={600}
                    height={200}
                />
            </div>
            <div className="grid grid-cols-5 gap-2">
                {images.map((image, imageIndex) => (
                    <div
                        className="w-16 h-16 hover:scale-105 transition duration-300 cursor-pointer border-4 rounded-3xl overflow-hidden"
                        key={image.id}
                        onMouseOver={() => selectMarketImage(imageIndex)}
                    >
                        <Image
                            layout="responsive"
                            objectFit="cover"
                            src={image.url || imagesConfig.defaultCovers}
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

export default MemberPageHeaderImages;
