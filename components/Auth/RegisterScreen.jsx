import React from "react";
import { Card, Label, TextInput, Checkbox, Button } from "flowbite-react";

const RegisterScreen = () => {
    return (
        <Card>
            <div>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Register Screen
                </h5>
                <div>
                    <form className="flex flex-col gap-4">
                        <div className="flex justify-between">
                            <div className="w-full mr-2">
                                <div className="mb-2">
                                    <Label
                                        htmlFor="firstName"
                                        value="First name"
                                    />
                                </div>
                                <TextInput
                                    id="firstName"
                                    type="text"
                                    placeholder="First name"
                                    required={true}
                                    className="w-full"
                                />
                            </div>
                            <div className="w-full">
                                <div className="mb-2">
                                    <Label
                                        htmlFor="lastName"
                                        value="Last name"
                                    />
                                </div>
                                <TextInput
                                    id="lastName"
                                    type="text"
                                    placeholder="Last name"
                                    required={true}
                                    className="block"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email" value="Email" />
                            </div>
                            <TextInput
                                id="email"
                                type="email"
                                placeholder="Email"
                                required={true}
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="password" value="Password" />
                            </div>
                            <TextInput
                                id="password"
                                type="password"
                                placeholder="Password"
                                required={true}
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="confirmPassword"
                                    value="Confirm password"
                                />
                            </div>
                            <TextInput
                                id="confirmPassword"
                                type="password"
                                placeholder="Confirm password"
                                required={true}
                            />
                        </div>

                        <div className="flex items-center gap-2">
                            <Checkbox id="remember" />
                            <Label htmlFor="remember">Remember me</Label>
                        </div>
                        <Button gradientMonochrome="info" type="submit">
                            Sign Up
                        </Button>
                    </form>
                </div>
            </div>
        </Card>
    );
};

export default RegisterScreen;
