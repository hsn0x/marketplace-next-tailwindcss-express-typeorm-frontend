import { Card, Rating } from "flowbite-react";
import React from "react";

const StorePageContent = ({ title, name, username, description }) => {
    return (
        <Card>
            <div className="p-5">
                <h2 className="text-4xl font-bold mb-5">{title}</h2>
                <div className="rating mb-5">
                    <Rating>
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star filled={false} />
                        <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                            4.95 out of 5
                        </p>
                    </Rating>
                </div>

                <div className="mb-6">
                    <p className="text-lg font-bold text-gray-500">
                        {description}
                    </p>
                </div>
            </div>
        </Card>
    );
};

export default StorePageContent;
