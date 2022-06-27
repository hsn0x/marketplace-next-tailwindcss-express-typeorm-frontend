import React from "react";
import { Card, Label, TextInput, Checkbox, Button } from "flowbite-react";

const LoginScreen = () => {
    return (
        <Card>
            <div>
                <h5 className="font-underline text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Login Screen
                </h5>
                <div>
                    <form className="flex flex-col gap-4 w-full">
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email" value="Your email" />
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
                                <Label
                                    htmlFor="password1"
                                    value="Your password"
                                />
                            </div>
                            <TextInput
                                id="password1"
                                type="password"
                                required={true}
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <Checkbox id="remember" />
                            <Label htmlFor="remember">Remember me</Label>
                        </div>
                        <Button gradientMonochrome="info" type="submit">
                            Sign in
                        </Button>
                    </form>
                </div>
            </div>
        </Card>
    );
};

export default LoginScreen;
