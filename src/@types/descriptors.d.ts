type MethodDescriptor<T> = (args: T) =>
    (
        target: any,
        methodName: string,
        description: PropertyDescriptor
    ) => void;

type NoParamsMethodDescriptor = (
    target: any,
    methodName: string,
    description: PropertyDescriptor
) => void;

type NoParamsClassDescriptor = (
    constructor: (new (...args: unknown[]) => unknown)
) => any;

type ClassDescriptor<T> = (args: T) => (
    constructor: (new (...args: unknown[]) => unknown)
) => any;
