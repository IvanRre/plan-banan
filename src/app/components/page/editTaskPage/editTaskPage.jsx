import React, { useEffect, useState } from "react";
import TextField from "../../common/form/textField";
import API from "../../../api";

const EditTaskPage = () => {
    const [data, setData] = useState({
        name: "",
        complexity: "",
        repeat: "no",
    });
    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
    return (
        <>
            <TextField
                label="Название задачи"
                name="name"
                value={data.name}
                onChange={handleChange}
                // error={errors.name}
            />
            <TextField
                label="Описание"
                name="info"
                value={data.name}
                onChange={handleChange}
                // error={errors.name}
            />
            <button
                type="submit"
                // disabled={!isValid}
                className="btn btn-primary w-100 mx-auto"
            >
                Обновить
            </button>
        </>
    )
};

export default EditTaskPage;
