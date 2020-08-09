import { IoCContainer } from '../ioc-container/index';

export const Configuration: TClassDecorator<Config> =
    (config: Config ) =>
        (constructor) => {
            const prototype = constructor.prototype as IConfiguration;
            IoCContainer.instance.register(config.envirornment, constructor);
        };
