import {Dayjs} from "dayjs";
import moment, {Moment} from "moment";
import "dayjs/plugin/isSameOrAfter";

export const rules = {
    required: (message: string = "required field") => ({ required: true,
        message
    }),
    isDateAfter: (message: string) => () => ({
        validator(_: any, value: Moment){
            if(value.isSameOrAfter(moment())){
                return Promise.resolve()
            }
            return Promise.reject(message)
        }
    })
}