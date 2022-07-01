import { Card, Rating } from "flowbite-react";
import React from "react";

const MemberPageContent = ({ title, name, username, description }) => {
    return (
        <Card>
            <div className="p-5">
                <div className="mb-6">
                    <p className="text-lg font-bold text-gray-500">
                        {description}
                    </p>
                </div>
            </div>
        </Card>
    );
};

export default MemberPageContent;
