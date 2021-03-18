import { ValidationError } from "yup";

interface Errors {
    [key: string]: string;
}

export default function getValidationsErrors(error: ValidationError): Errors {
    const validationErrors: Errors = {};

    if (error.inner.length > 0) {
        error.inner.forEach(fieldError => {
            validationErrors[fieldError.path as string] = fieldError.message;
        });
    } else {
        validationErrors[error.path as string] = error.message;
    }

    return validationErrors;
}