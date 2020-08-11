export const escapeValues = (val: string | number): string | number => {
    if(typeof val === 'string') {
        const num = parseFloat(val);
        const value = isNaN(num) ? val : num;
        return value;
    } else {
        return val;
    }
};
