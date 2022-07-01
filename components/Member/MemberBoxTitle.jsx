import Link from "next/link";
import React from "react";

const MemberBoxTitle = ({ firstName, lastName, username }) => {
    return (
        <div>
            <h2 className="">
                {firstName} {lastName}
            </h2>
            <div className="text-2xl font-bold underline cursor-pointer">
                <Link href={`/members/username/${username}`}>
                    <h2 className="">{username}</h2>
                </Link>
            </div>
        </div>
    );
};

export default MemberBoxTitle;
