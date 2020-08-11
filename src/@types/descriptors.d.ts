type NoParamsMethodDecorator = (
    target: TClass,
    methodName: string,
    description: PropertyDescriptor
) => void;

type TMethodDecorator = (args: unknown) =>
    NoParamsMethodDecorator;

type NoParamsClassDecorator = (
    constructor: TClass
) => unknown;

type TClassDecorator<T> = (args: T) => NoParamsClassDecorator;

type NoParamPropertyDecorator = (target: unknown, propertyName: string) => unknown

type TPropertyDecorator<T = unknown> = (...args: T[]) => NoParamPropertyDecorator
