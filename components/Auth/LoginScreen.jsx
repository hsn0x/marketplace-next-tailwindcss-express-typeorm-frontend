import React, { useState } from "react";
import { Card, Label, TextInput, Checkbox, Button } from "flowbite-react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { authActions } from "../../state/actions";

const LoginScreen = () => {
    const state = useSelector(({ auth }) => auth);
    const email = state.email;
    const password = state.password;

    const dispatch = useDispatch();
    const { updateEmail, updatePassword, signIn } = bindActionCreators(
        authActions,
        dispatch
    );

    const signInHandler = () => {
        signIn();
    };

    return (
        <Card>
            <div>
                <h5 className="font-underline text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Login Screen
                </h5>
                <div>
                    <form type="submit" className="flex flex-col gap-4 w-full">
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email" value="Your email" />
                            </div>
                            <TextInput
                                onChange={(event) =>
                                    updateEmail(event.target.value)
                                }
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
                                onChange={(event) =>
                                    updatePassword(event.target.value)
                                }
                                id="password1"
                                type="password"
                                required={true}
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <Checkbox id="remember" required={true} />
                            <Label htmlFor="remember">Remember me</Label>
                        </div>
                        <Button
                            gradientMonochrome="info"
                            type="submit"
                            onClick={() => signInHandler()}
                        >
                            Sign in
                        </Button>
                    </form>
                </div>
            </div>
        </Card>
    );
};

export default LoginScreen;
