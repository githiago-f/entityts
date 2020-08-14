type TMethodDecorator = (
    target: any,
    methodName: string,
    description: PropertyDescriptor
) => void;


type TClassDecorator = (
    constructor: any
) => any;

type TPropertyDecorator = (target: any, propertyName: string) => any
