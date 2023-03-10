import React, { useEffect, useState } from "react";
// import { validator } from "../../utils/validator";
import TextField from "../common/form/textField";
import CheckBoxField from "../common/form/checkBoxField";
import * as yup from "yup";

const LoginForm = () => {
    const [data, setData] = useState({ email: "", password: "", stayOn: false });
    const [errors, setErrors] = useState({});
    const handleChange = (target) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };
    const validateScheme = yup.object().shape({
        password: yup.string().required("Пароль обязателен для заполнения").matches(/(?=.*[A-Z])/, "Пароль должен содержать хотябы одну заглавную букву")
            .matches(/(?=.*[0-9])/, "Пароль должен содержать хотябы одну цифру")
            .matches(/(?=.*[!@#$%^&*])/, "Пароль должен содержать специальный символ(!@#$%^&*)")
            .matches(/(?=.{8,})/, "Пароль должен состоять минимум из 8 символов"),
        email: yup.string().required("Электронная почта обязательна для заполнения").email("Email введен некорректно")
    });
    // const validatorConfig = {
    //     email: {
    //         isRequired: {
    //             message: "Электронная почта обязательна для заполнения"
    //         },
    //         isEmail: {
    //             message: "Email введен некорректно"
    //         }
    //     },
    //     password: {
    //         isRequired: {
    //             message: "Пароль обязателен для заполнения"
    //         },
    //         isCapitalSymbol: {
    //             message: "Пароль должен содержать хотябы одну заглавную букву"
    //         },
    //         isCountainDigit: {
    //             message: "Пароль должен содержать хотябы одну цифру"
    //         },
    //         min: {
    //             message: "Пароль должен состоять минимум из 8 символов",
    //             value: 8
    //         }
    //     }
    // };
    useEffect(() => {
        validate();
    }, [data]);
    const validate = () => {
        // const errors = validator(data, validatorConfig);
        validateScheme
            .validate(data)
            .then(() => setErrors({}))
            .catch((err) => setErrors({ [err.path]: err.message }));
        // setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const isValid = Object.keys(errors).length === 0;
    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        console.log(e);
    };
    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Электронная почта"
                name="email"
                value={data.email}
                onChange={handleChange}
                error={errors.email}
            />
            <TextField
                label="Пароль"
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                error={errors.password}
            />
            <CheckBoxField
                value={data.stayOn}
                onChange={handleChange}
                name="StayOn"
            >
                Оставаться в системе
            </CheckBoxField>
            <button className="btn btn-primary w-100 mx-auto" type="submit" disabled={!isValid}>Submit</button>
        </form>
    );
};

export default LoginForm;
