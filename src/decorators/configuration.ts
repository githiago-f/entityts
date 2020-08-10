import { IoCContainer } from '../ioc-container/index';
import clients from './../adapters/index';

export const Configuration: TClassDecorator<Config> =
    (config: Config ) =>
        (constructor) => {
            const prototype = constructor.prototype as IConfiguration;

            prototype._connection = clients[config.client](config);

            IoCContainer.instance.register(config.envirornment, constructor);
        };
