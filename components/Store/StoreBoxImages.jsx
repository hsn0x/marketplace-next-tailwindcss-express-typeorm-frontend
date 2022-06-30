import { Carousel } from "flowbite-react";
import React from "react";

const StoreBoxImages = ({ images }) => {
    return (
        <div className="h-64 ">
            <Carousel>
                {images.map((image) => (
                    <img
                        src={image.url}
                        alt=""
                        key={image.public_id}
                        // objectFit="cover"
                    />
                ))}
            </Carousel>
        </div>
    );
};

export default StoreBoxImages;
