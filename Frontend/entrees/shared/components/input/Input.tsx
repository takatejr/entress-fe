import React, { FormEventHandler, memo } from "react";
import clsx from "clsx";

export type InputProps = {
    readonly handleChange?: FormEventHandler<HTMLInputElement>;
    // readonly title: string;
    readonly text: string;
    readonly type: string;
    readonly name: string;
    readonly htmlFor?: string;
    readonly containerStyle?: string;
};

export const Input = memo<InputProps>(
    ({ handleChange, text, htmlFor, type, name, containerStyle }) => {
        return (
            <div className={clsx("grid my-4", containerStyle)}>
                <label htmlFor={htmlFor}>{htmlFor}</label>{" "}
                <input
                    className="placeholder:pl-3 rounded-2xl placeholder-amber-600 w-full"
                    type={type}
                    // defaultValue={title}
                    onChange={handleChange}
                    placeholder={text}
                    aria-label={text}
                    name={name}
                    required
                />
            </div>
        );
    },
);

Input.displayName = "Input";
