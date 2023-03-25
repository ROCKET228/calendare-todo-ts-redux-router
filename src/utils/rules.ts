import {message} from "antd";

export const rules = {
    required: (message: string = "required field") => ({ required: true,
        message })
}