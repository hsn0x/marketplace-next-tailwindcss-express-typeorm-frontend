import { Button, Card } from "flowbite-react";
import Image from "next/image";
import React from "react";
import { imagesConfig } from "../../config/images";

const MediaBox = ({ title, media }) => {
    return (
        <div className="">
            <Card>
                <div className="">
                    <h2 className="text-2xl font-bold">{media.public_id}</h2>
                    <h2 className="text-sm">{title}</h2>
                </div>
                <Image
                    className="h-full w-full border-1 p-1 rounded-2xl border-gray-300 "
                    layout="responsive"
                    objectFit="cover"
                    src={media.url || imagesConfig.defaultCovers}
                    alt=""
                    width={208}
                    height={208}
                />
                <div>
                    <Button>Delete</Button>
                </div>
            </Card>
        </div>
    );
};

export default MediaBox;
