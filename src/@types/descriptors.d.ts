type NoParamsMethodDecorator = (
    target: any,
    methodName: string,
    description: PropertyDescriptor
) => void;

type TMethodDecorator = (...args: any[]) =>
    NoParamsMethodDecorator;

type NoParamsClassDecorator = (
    constructor: any
) => any;

type TClassDecorator = (...args: any[]) => NoParamsClassDecorator;

type NoParamPropertyDecorator = (target: any, propertyName: string) => any

type TPropertyDecorator = (...args: any[]) => NoParamPropertyDecorator
