import 'reflect-metadata';
import { IoCContainer } from '../ioc-container/index';

export const Autowire: TPropertyDecorator =
function (dependency: string) {
    return function (target, propertyName) {
        const prototype =  Reflect.getPrototypeOf(target);
        prototype[propertyName] = IoCContainer.instance.resolve(dependency);
    };
};
