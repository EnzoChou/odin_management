import Checkbox from "expo-checkbox";
import React, { useEffect } from "react";

export const RenderCheckBoxes = (props: { item: Checkbox, checkboxes: Checkbox[], setCheckboxes: React.Dispatch<React.SetStateAction<Checkbox[]>> }) => {
    const onValueChangeHandler = () => {
        let temp = props['checkboxes'].map((s_c => {
            if (props['item']['_id'] == s_c['_id']) {
                s_c['value'] = !s_c['value'];
            }
            return s_c;
        }));
        // useEffect(() => {
        //     setCheckboxes();
        // }, []);
        props['setCheckboxes']([...temp]);
    };
    return (
        <Checkbox
            className="mr-1 w-7 h-7"
            
            value={props['item']['value']}
            disabled={props['item']['disabled']}
            onValueChange={onValueChangeHandler}
        />
    );
};