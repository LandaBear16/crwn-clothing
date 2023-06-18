import { useState, FormEvent, ChangeEvent } from 'react';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import FormInput from '../form/form-input.component';

import { AuthError, AuthErrorCodes } from 'firebase/auth';
import { signInAuthUserWithEmailAndPassword, signInWithGooglePopup } from '../../utils/firebase/firebase.utils';

import './sign-in-form.styles.jsx';
import { ButtonsContainer, SignUpContainer } from './sign-in-form.styles.jsx';

const defaultFormFields = {
    email: '',
    password: '',
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
        } catch (error) {
            if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
                alert('Cannot create user, email already in use');
            } else {
                console.log('user creation encountered an error', error);
            }
        }
    };

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });
    };

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
    };

    return (
        <SignUpContainer>
            <form onSubmit={handleSubmit}>
                <FormInput label='Email' type='email' name='email' onChange={handleOnChange} value={email} />
                <FormInput
                    label='Password'
                    type='password'
                    name='password'
                    onChange={handleOnChange}
                    value={password}
                />
                <ButtonsContainer>
                    <Button type='submit'>Sign In</Button>
                    <Button buttonType={BUTTON_TYPE_CLASSES.google} type='button' onClick={signInWithGoogle}>
                        Sign In with Google
                    </Button>
                </ButtonsContainer>
            </form>
        </SignUpContainer>
    );
};

export default SignInForm;
