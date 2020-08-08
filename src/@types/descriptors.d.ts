type NoParamsMethodDecorator = (
    target: any,
    methodName: string,
    description: PropertyDescriptor
) => void;

type TMethodDecorator = (args: any) =>
    NoParamsMethodDecorator;

type NoParamsClassDecorator = (
    constructor: (new (...args: unknown[]) => unknown)
) => any;

type TClassDecorator<T> = (args: T) => NoParamsClassDecorator;

type NoParamPropertyDecorator = (target: any, propertyName: string) => any

type TPropertyDecorator = (...args: any[]) => NoParamPropertyDecorator
