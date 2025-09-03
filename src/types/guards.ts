const isString = (value: unknown): value is string=>{ //return type string
    return typeof value === "string"
}

export {isString};