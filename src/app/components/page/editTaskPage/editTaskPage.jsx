import React, { useEffect, useState } from "react";
import TextField from "../../common/form/textField";
import SelectField from "../../common/form/selectField";
import RadioField from "../../common/form/radio.Field";
import API from "../../../api";

const EditTaskPage = () => {
    const complexity = [{name:"easy",coin:"1"},{name:"norm",coin:"4"},{name:"hard",coin:"10"}]
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
            <SelectField
                label="Сложность"
                defaultOption="Ну что,ты выберешь уже..."
                options={complexity}
                name="complexity"
                onChange={handleChange}
                value={data.complexity}
            />
            <RadioField
                options={[
                    { name: "Да", value: "repeat" },
                    { name: "Нет", value: "norepeat" },
                ]}
                value={data.repeat}
                name="repeat"
                onChange={handleChange}
                label="Повторять"
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
