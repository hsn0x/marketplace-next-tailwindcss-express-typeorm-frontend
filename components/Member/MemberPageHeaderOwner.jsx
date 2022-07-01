import Link from "next/link";
import React from "react";

const MemberPageHeaderOwner = ({ username }) => {
    return (
        <div>
            <div className="flex justify-end -mt-6">
                <span>
                    By{" "}
                    <Link href={`/members/username/${username}`}>
                        <span className="font-bold cursor-pointer">
                            {username}
                        </span>
                    </Link>
                </span>
            </div>
        </div>
    );
};

export default MemberPageHeaderOwner;
