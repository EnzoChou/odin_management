import { useEffect, useState } from "react";

export const useBuildCheckboxes = (n: number, old_value: Checkbox[], setCheckBoxes: React.Dispatch<React.SetStateAction<Checkbox[]>>): void => {
    // 
    // const [checkboxes, setCheckBoxes] = useState<Checkbox[]>([]);
    const createdCheckboxes: Checkbox[] = old_value;
    if (old_value.length < n) {
        let new_index = 0;
        if (old_value.length > 0) {
            new_index = old_value[(old_value.length - 1)]['index'] + 1;
        }
        for (let i = 0; i < n - old_value.length; i++) {
            createdCheckboxes.push({
                _id: new_index.toString(),
                index: new_index,
                value: false,
                disabled: false
            });
            new_index++;
        }
    } else if (old_value.length > n) {
        for (let i = 0; i < n - old_value.length; i++) {
            createdCheckboxes.pop();
        }
    }
    useEffect(() => {
        setCheckBoxes([...createdCheckboxes]);
    }, []);
    return;
};