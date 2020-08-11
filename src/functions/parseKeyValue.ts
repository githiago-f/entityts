import { escapeValues } from './escapeValues';

export const parseKeyValue = <T = Unknown>(entity: T): string => {
    const keys = Object.keys(entity);

    return keys.map(i=> {
        const value = escapeValues(entity[i]);
        return `${i} = ${value}`;
    }).join(' AND ');
};
