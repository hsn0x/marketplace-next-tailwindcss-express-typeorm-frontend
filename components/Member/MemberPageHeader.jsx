import { Card } from "flowbite-react";
import Image from "next/image";
import React, { useState } from "react";
import MemberPageHeaderAvatar from "./MemberPageHeaderAvatar";
import MemberPageHeaderImages from "./MemberPageHeaderImages";
import MemberPageHeaderOwner from "./MemberPageHeaderOwner";

const MemberPageHeader = ({
    firstName,
    lastName,
    images,
    avatars,
    username,
}) => {
    return (
        <div>
            <Card>
                <MemberPageHeaderImages images={images} />
                <MemberPageHeaderAvatar
                    avatars={avatars}
                    firstName={firstName}
                    lastName={lastName}
                    username={username}
                />
            </Card>
        </div>
    );
};

export default MemberPageHeader;
