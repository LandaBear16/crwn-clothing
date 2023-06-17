import { InputHTMLAttributes } from 'react';
import { FormInputLabel, Input, Group } from './form-input.styles';

type FormInputProps = {
    label: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const FormInput = ({ label, ...otherProps }: FormInputProps) => {
    return (
        <Group>
            <Input {...otherProps} />
            {label && (
                <FormInputLabel
                    shrink={Boolean(otherProps && typeof otherProps.value === 'string' && otherProps.value.length)}
                >
                    {label}
                </FormInputLabel>
            )}
        </Group>
    );
};

export default FormInput;
