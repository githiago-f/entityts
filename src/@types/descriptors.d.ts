type NoParamsMethodDecorator = (
    target: any,
    methodName: string,
    description: PropertyDescriptor
) => void;

type TMethodDecorator<T = unknown> = (...args: T[]) =>
    NoParamsMethodDecorator;

type NoParamsClassDecorator = (
    constructor: any
) => any;

type TClassDecorator<T> = (...args: T[]) => NoParamsClassDecorator;

type NoParamPropertyDecorator = (target: any, propertyName: string) => any

type TPropertyDecorator<T = unknown> = (...args: T[]) => NoParamPropertyDecorator
