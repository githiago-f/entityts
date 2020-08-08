import { IoCContainer } from '../ioc-container/index';

export const Autowire: TPropertyDecorator =
(dependency: string)=>
    (target, propertyName) => {
        console.log(target.prototype);
        // target.prototype[propertyName] = IoCContainer.instance.resolve(dependency);
    };
