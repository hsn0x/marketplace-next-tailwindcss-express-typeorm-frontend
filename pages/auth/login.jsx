import React from "react";
import { Card, Label, TextInput, Checkbox, Button } from "flowbite-react";
import LoginScreen from "../../components/Auth/LoginScreen";

const login = () => {
    return (
        <div>
            <div className="max-w-lg mx-auto">
                <Card>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Login Screen
                    </h5>
                    <LoginScreen />
                </Card>
            </div>
        </div>
    );
};

export default login;
