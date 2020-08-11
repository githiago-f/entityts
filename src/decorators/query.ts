import { executeQuery } from '../functions/executeQuery';

export const Query: TPropertyDecorator<string> =
(query) =>
    (target, methodName) => {
        const prototype = Reflect.getPrototypeOf(target) as IService<Unknown, unknown>;

        const config = prototype._config;

        prototype[methodName] = () => executeQuery(config, query);
    };
