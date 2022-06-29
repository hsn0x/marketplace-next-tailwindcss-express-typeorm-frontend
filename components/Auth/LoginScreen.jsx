import React, { useState } from "react";
import { Card, Label, TextInput, Checkbox, Button } from "flowbite-react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { authActions } from "../../redux/actions";
import { fetchProfile, signIn } from "../../redux/reducers/auth";
import { useRouter } from "next/router";
import { axiosServer } from "../../db/axios";
import Cookies from "js-cookie";

const LoginScreen = () => {
    const router = useRouter();
    const auth = useSelector(({ auth }) => auth);
    const email = auth.email;
    const password = auth.password;

    const dispatch = useDispatch();

    const { updateAuth, updateEmail, updatePassword } = bindActionCreators(
        authActions,
        dispatch
    );

    const handleSignIn = async (event) => {
        event.preventDefault();
        const signInData = await dispatch(signIn());
        if (signInData.isAuthenticated) {
            console.log(auth.isAuthenticated);
            const authUser = await dispatch(fetchProfile());
            authUser;
            router.push("/");
        } else {
        }
    };

    return (
        <Card>
            <div>
                <h5 className="font-underline text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Login Screen
                </h5>
                <div>
                    <form
                        onSubmit={(event) => handleSignIn(event)}
                        className="flex flex-col gap-4 w-full"
                    >
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
                                value="j@me.com"
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
                                value="qwe"
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <Checkbox id="remember" required={true} />
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
