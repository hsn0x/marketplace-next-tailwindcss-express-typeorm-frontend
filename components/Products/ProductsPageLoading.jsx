import { Spinner } from "flowbite-react";
import React from "react";

const ProductsPageLoading = ({ loading }) => {
    return (
        <div>
            {loading && (
                <div className="flex justify-center items-center">
                    <Spinner
                        aria-label="Extra small spinner example"
                        size="xl"
                    />
                </div>
            )}
        </div>
    );
};

export default ProductsPageLoading;
