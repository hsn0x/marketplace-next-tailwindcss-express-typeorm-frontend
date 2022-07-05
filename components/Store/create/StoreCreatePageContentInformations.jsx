import { Card, Label, Textarea, TextInput } from "flowbite-react";
import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { marketCreateActions } from "../../../redux/actions";

const StoreCreatePageContentInformations = () => {
    const dispatch = useDispatch();

    const {
        marketCreateUpdateName,
        marketCreateUpdateUsername,
        marketCreateUpdateTitle,
        marketCreateUpdateDescription,
        marketCreateUpdateAbout,
    } = bindActionCreators(marketCreateActions, dispatch);

    return (
        <div>
            <div>
                <Card>
                    <h2 className="text-lg font-bold underline">
                        Store Informations
                    </h2>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="name" value="Name" />
                        </div>
                        <TextInput
                            id="name"
                            type="text"
                            placeholder="Store Name"
                            required={true}
                            onChange={(e) =>
                                marketCreateUpdateName(e.target.value)
                            }
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="username" value="Username" />
                        </div>
                        <TextInput
                            id="username"
                            type="text"
                            placeholder="Store Username"
                            required={true}
                            onChange={(e) =>
                                marketCreateUpdateUsername(e.target.value)
                            }
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="title" value="Title" />
                        </div>
                        <TextInput
                            id="title"
                            type="text"
                            placeholder="Store Title"
                            required={true}
                            onChange={(e) =>
                                marketCreateUpdateTitle(e.target.value)
                            }
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="description" value="Description" />
                        </div>
                        <TextInput
                            id="description"
                            type="text"
                            placeholder="Store Description"
                            required={true}
                            onChange={(e) =>
                                marketCreateUpdateDescription(e.target.value)
                            }
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="about" value="About" />
                        </div>
                        <Textarea
                            id="about"
                            type="text"
                            placeholder="Store About"
                            required={true}
                            onChange={(e) =>
                                marketCreateUpdateAbout(e.target.value)
                            }
                        />
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default StoreCreatePageContentInformations;
