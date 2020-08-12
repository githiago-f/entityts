import 'reflect-metadata';
import { IoCContainer } from '../ioc-container/index';

export const Autowire: TPropertyDecorator =
(dependency: string) =>
    (target, propertyName) => {
        const prototype =  Reflect.getPrototypeOf(target);
        prototype[propertyName] = IoCContainer.instance.resolve(dependency);
    };

