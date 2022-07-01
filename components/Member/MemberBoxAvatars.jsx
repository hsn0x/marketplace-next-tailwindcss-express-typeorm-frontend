import { Avatar, Carousel } from "flowbite-react";
import React from "react";

const MemberBoxAvatars = ({ avatars }) => {
    return (
        <div className="">
            <Avatar
                img={avatars[0].url}
                rounded={true}
                bordered={true}
                size="lg"
            ></Avatar>
        </div>
    );
};

export default MemberBoxAvatars;
