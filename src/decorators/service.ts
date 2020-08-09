import { IoCContainer } from '../ioc-container/index';

export const Service: TClassDecorator<string> =
(env) =>
    (target) => {
        const prototype = target.prototype as IService<any, number>;
        try {
            prototype._connection = IoCContainer.instance.resolve(env);
        } catch(e) {
            console.log(e);
        }
        IoCContainer.instance.register(target.name, target);
    };
