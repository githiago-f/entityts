import { IoCContainer } from '../ioc-container/index';

export const Autowire: TMethodDecorator =
(dependency: string)=>
    (target, propertyName, descriptor) => {
        return {
            get () {
                return IoCContainer.instance.resolve(dependency);
            }
        } as typeof descriptor;
    };
