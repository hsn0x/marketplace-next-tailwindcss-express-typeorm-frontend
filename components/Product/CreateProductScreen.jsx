import {
    Button,
    Card,
    Checkbox,
    FileInput,
    Label,
    Select,
    TextInput,
} from "flowbite-react";
import React from "react";

const CreateProductScreen = () => {
    return (
        <div>
            <Card>
                <h5 className="font-underline text-2xl font-bold">
                    Create Product
                </h5>
                <div>
                    <h5 className="font-underline font-bold tracking-tight text-gray-900 dark:text-white">
                        Fill Product Informations
                    </h5>
                </div>
                <div>
                    <form className="flex flex-col gap-4">
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="title" value="Title" />
                            </div>
                            <TextInput
                                id="title"
                                type="text"
                                placeholder="Product Title"
                                required={true}
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="description"
                                    value="Description"
                                />
                            </div>
                            <TextInput
                                id="description"
                                type="text"
                                placeholder="Product Description"
                                required={true}
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="price" value="Product Price" />
                            </div>
                            <TextInput
                                id="price"
                                type="number"
                                placeholder="Product Price"
                                required={true}
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="category"
                                    value="Select Category"
                                />
                            </div>
                            <Select id="category" required={true}>
                                <option>Men Fashion</option>
                                <option>Technology</option>
                                <option>Sport</option>
                                <option>Gaming</option>
                            </Select>
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="store" value="Select Store" />
                            </div>
                            <Select id="store" required={true}>
                                <option>Best Shop</option>
                                <option>Techno 18</option>
                                <option>Games Store</option>
                                <option>Luxe Store</option>
                            </Select>
                        </div>
                        <div id="">
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="images"
                                    value="Upload Product Images"
                                />
                            </div>
                            <FileInput
                                id="images"
                                helperText="Upload Product Images"
                                multiple
                            />
                        </div>

                        <div className="flex flex-col gap-4" id="checkbox">
                            <div className="flex items-center gap-2">
                                <Checkbox id="accept" defaultChecked={true} />
                                <Label htmlFor="accept">
                                    I agree to the{" "}
                                    <a
                                        href="/forms"
                                        className="text-blue-600 hover:underline dark:text-blue-500"
                                    >
                                        terms and conditions
                                    </a>
                                </Label>
                            </div>
                        </div>

                        <Button gradientMonochrome="info">
                            Create Product
                        </Button>
                    </form>
                </div>
            </Card>
        </div>
    );
};

export default CreateProductScreen;
