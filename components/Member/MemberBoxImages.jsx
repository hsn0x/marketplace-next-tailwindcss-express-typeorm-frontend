import { Carousel } from "flowbite-react";
import React from "react";

const MemberBoxImages = ({ images }) => {
    return (
        <div className="h-56">
            {images && (
                <Carousel className="h-screen">
                    {images.map((image) => (
                        <img src={image.url} alt="" key={image.public_id} />
                    ))}
                </Carousel>
            )}
        </div>
    );
};

export default MemberBoxImages;
