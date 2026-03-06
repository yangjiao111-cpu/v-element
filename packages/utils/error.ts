import { isString } from "lodash-es";

class ErUIError extends Error {
    constructor(msg: string) {
        super(msg)
        this.name = "ErUIError"
    }
}

export function throwError(scoped: string, msg: string) {
    throw new ErUIError(`[${scoped}]:${msg}`)
}

export function debugWarn(error: Error): void;
export function debugWarn(scoped: string, msg: string): void

export function debugWarn(scoped: string | Error, msg?: string) {
    if (process.env.NODE_ENV !== "production") {
        const err = isString(scoped) ? new ErUIError(`[${scoped}]:${msg}]`) : scoped
        console.warn(err)
    }
}