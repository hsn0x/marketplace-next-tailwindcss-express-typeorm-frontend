import React from "react";

const MemberBoxFooter = ({ age, gender }) => {
    return (
        <div className="flex flex-row">
            <h2 className="text-sm font-bold">{age} years,</h2>
            <h2 className="text-sm font-bold">{gender}</h2>
        </div>
    );
};

export default MemberBoxFooter;
