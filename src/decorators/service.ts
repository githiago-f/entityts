import { IoCContainer } from '../ioc-container/index';

export const Service: NoParamsClassDecorator =
    (target) => {
        IoCContainer.instance.register(target.name, [], target);
    };
