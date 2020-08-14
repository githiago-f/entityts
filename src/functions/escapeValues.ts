
type TEscapeValues = (val: string) => string | number;

export const escapeValues: TEscapeValues = (val) => {
    const num = parseFloat(val);
    const value = isNaN(num) ? val : num;
    return value;
};
