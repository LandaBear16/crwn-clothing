import { useState } from "react";
import { FormInput } from "../form/form-input.component";

import { createAuthUserWithEmailAndPassword, createUserDocFromAuth } from "../../utils/firebase/firebase.utils";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import "./sign-up-form.styles.scss";

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
};

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match");
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);

            await createUserDocFromAuth(user, { displayName });
            resetFormFields();
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                alert("Cannot create user, email already in use");
            } else {
                console.log("user creation encountered an error", error);
            }
        }
    };

    const handleOnChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Display Name" type="text" name="displayName" onChange={handleOnChange} value={displayName} />
                <FormInput label="Email" type="email" name="email" onChange={handleOnChange} value={email} />
                <FormInput label="Password" type="password" name="password" onChange={handleOnChange} value={password} />
                <FormInput label="Confirm Password" type="password" name="confirmPassword" onChange={handleOnChange} value={confirmPassword} />

                <Button buttonType={BUTTON_TYPE_CLASSES.inverted} type="submit">
                    Sign up
                </Button>
            </form>
        </div>
    );
};

export default SignUpForm;
