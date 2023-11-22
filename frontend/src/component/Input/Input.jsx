import React, { useEffect, useReducer } from "react";
import Validator from "../../Validators/Validator";
const inputReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE": {
            return {
                ...state,
                value: action.value,
                isValid: Validator(action.value, action.validation),
            };
        }
        default: {
            return state;
        }
    }
};
export default function Input(props) {
    const [mainInput, dispatch] = useReducer(inputReducer, {
        isValid: false,
        value: "",
    });
    const { value, isValid } = mainInput;
    const { id, onInputHandler } = props;
    useEffect(() => {
        onInputHandler(id, value, isValid);
    }, [value]);
    const changeInputHandler = (event) => {
        dispatch({
            type: "CHANGE",
            isValid: true,
            value: event.target.value,
            validation: props.validations,
        });
    };
    const Elements =
        props.element === "input" ? (
            <input
                type={props.type}
                dir={props.dir}
                className={`${props.className} ${mainInput.isValid ? "shadow-md shadow-emerald-600 " : "shadow-md shadow-rose-600 "
                    }`}
                value={mainInput.value}
                onChange={(event) => changeInputHandler(event)}
            />
        ) : (
            <textarea
                input-error
                onChange={(event) => changeInputHandler(event)}
                className={`${props.className} ${mainInput.isValid ? "shadow-md shadow-emerald-600" : "shadow-md shadow-rose-600"
                    }`}
                value={mainInput.value}
            />
        );
    return <div>{Elements}</div>;
}
