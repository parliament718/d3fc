const types = {
    BYTE: 5120,
    UNSIGNED_BYTE: 5121,
    SHORT: 5122,
    UNSIGNED_SHORT: 5123,
    FLOAT: 5126
};

export default types;

export function length(type) {
    switch (type) {
        case types.BYTE:
        case types.UNSIGNED_BYTE:
            return 1;
        case types.SHORT:
        case types.UNSIGNED_SHORT:
            return 2;
        case types.FLOAT:
            return 4;
        default:
            throw new Error(`Unknown type ${type}`);
    }
}
