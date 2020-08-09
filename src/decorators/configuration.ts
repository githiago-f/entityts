import { IoCContainer } from '../ioc-container/index';

export const Configuration: TClassDecorator<Config> =
    (config: Config ) =>
        (constructor) => {
            const prototype = constructor.prototype as IConfiguration;

            prototype._config = config;

            IoCContainer.instance.register(constructor.name, constructor);
        };
