import { useState } from "react";
const [expand,setState] = useState(false);

export const GetState = () => {
    return expand;
}
export const SetState = () => {
    setState(!expand);
};

