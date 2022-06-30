import Link from "next/link";
import React from "react";

const StorePageHeaderOwner = ({ username }) => {
    return (
        <div>
            <div className="flex justify-end -mt-6">
                <span>
                    By{" "}
                    <Link href={"#"}>
                        <span className="font-bold cursor-pointer">
                            {username}
                        </span>
                    </Link>
                </span>
            </div>
        </div>
    );
};

export default StorePageHeaderOwner;
