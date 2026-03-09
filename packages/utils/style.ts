import { isNumber, isString } from "lodash-es";
import { debugWarn } from "./error";

const SCOPE = "utils/style" as const

const isStringNumber = (val: string): boolean => {
    if (!isString(val)) {
        return false
    }
    return !Number.isNaN(Number(val))
}

export function addUnit(val?: string | Number, defaultUnit = "px") {
    if (!val) return '';
    if (isNumber(val) || isStringNumber(val as string)) {
        return `${val}${defaultUnit}`
    }
    if (isString(val)) {
        return val
    }
    debugWarn(SCOPE, `[binding value must be a string or number]`)
}