import { Card, Label, Textarea, TextInput } from "flowbite-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { marketEditActions } from "../../../redux/actions";

const StoreEditPageContentInformations = () => {
    const dispatch = useDispatch();
    const { edit } = useSelector(({ marketEdit }) => marketEdit);

    const {
        marketEditUpdateName,
        marketEditUpdateUsername,
        marketEditUpdateTitle,
        marketEditUpdateDescription,
        marketEditUpdateAbout,
    } = bindActionCreators(marketEditActions, dispatch);
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
                            value={edit?.name || ""}
                            onChange={(e) =>
                                marketEditUpdateName(e.target.value)
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
                            value={edit?.username || ""}
                            onChange={(e) =>
                                marketEditUpdateUsername(e.target.value)
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
                            value={edit?.title || ""}
                            onChange={(e) =>
                                marketEditUpdateTitle(e.target.value)
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
                            value={edit?.description || ""}
                            onChange={(e) =>
                                marketEditUpdateDescription(e.target.value)
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
                            value={edit?.about || ""}
                            onChange={(e) =>
                                marketEditUpdateAbout(e.target.value)
                            }
                        />
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default StoreEditPageContentInformations;
