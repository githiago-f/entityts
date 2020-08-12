type NoParamsMethodDecorator = (
    target: any,
    methodName: string,
    description: PropertyDescriptor
) => void;

type TMethodDecorator<T = string[]> = (args: T) =>
    NoParamsMethodDecorator;

type NoParamsClassDecorator = (
    constructor: any
) => any;

type TClassDecorator<T = string[]> = (args: T) => NoParamsClassDecorator;

type NoParamPropertyDecorator = (target: any, propertyName: string) => any

type TPropertyDecorator<T = string[]> = (args: T) => NoParamPropertyDecorator
