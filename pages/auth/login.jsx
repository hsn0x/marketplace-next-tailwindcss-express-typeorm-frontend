import React from "react";
import { Card, Label, TextInput, Checkbox, Button } from "flowbite-react";
import LoginScreen from "../../components/Auth/LoginScreen";

const login = () => {
    return (
        <div>
            <div className="max-w-lg mx-auto">
                <div className="my-20">
                    <LoginScreen />
                </div>
            </div>
        </div>
    );
};

export default login;
