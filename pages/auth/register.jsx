import React from "react";
import { Card, Label, TextInput, Checkbox, Button } from "flowbite-react";
import RegisterScreen from "../../components/Auth/RegisterScreen";

const Register = () => {
    return (
        <div>
            <div className="max-w-lg mx-auto">
                <Card>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Register Screen
                    </h5>
                    <RegisterScreen />
                </Card>
            </div>
        </div>
    );
};

export default Register;
