import { Card, FileInput, Label } from "flowbite-react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { productEditActions } from "../../../redux/actions";
import { faker } from "@faker-js/faker";

const StoreEditPageContentMedia = () => {
    const dispatch = useDispatch();
    const [media, setMedia] = useState([]);

    const { productEditUpdateMedia } = bindActionCreators(
        productEditActions,
        dispatch
    );
    const handleMedia = (media) => {
        media.preventDefault();
        const files = media.target.files;
        const url = faker.image.imageUrl(600, 400, "Business", true);
        productEditUpdateMedia([{ public_id: faker.random.word(), url }]);
    };
    return (
        <div>
            {" "}
            <div className="">
                <Card>
                    <div id="">
                        <h2 className="text-lg font-bold underline">Media</h2>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="images"
                                value="Upload Store Images"
                            />
                        </div>
                        <FileInput
                            onChange={(e) => handleMedia(e)}
                            id="images"
                            multiple
                        />
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default StoreEditPageContentMedia;
