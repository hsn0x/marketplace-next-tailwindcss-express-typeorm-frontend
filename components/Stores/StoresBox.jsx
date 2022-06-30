import React from "react";
import StoreBox from "./StoreBox";

const StoresBox = ({ markets }) => {
    return (
        <div className="grid grid-cols-3 gap-2">
            {markets.map((market) => (
                <div key={market.id} className="">
                    <StoreBox market={market} />
                </div>
            ))}
        </div>
    );
};

export default StoresBox;
