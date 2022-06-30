import { Card } from "flowbite-react";
import Image from "next/image";
import React, { useState } from "react";
import StorePageHeaderAvatar from "./StorePageHeaderAvatar";
import StorePageHeaderImages from "./StorePageHeaderImages";

const StorePageHeader = ({ images, avatars, name, username }) => {
    return (
        <div>
            <Card>
                <StorePageHeaderImages images={images} />
                <StorePageHeaderAvatar
                    avatars={avatars}
                    name={name}
                    username={username}
                />
            </Card>
        </div>
    );
};

export default StorePageHeader;
