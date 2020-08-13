import { env } from 'process';
import { IoCContainer } from '../ioc-container/index';

const logQuery = (query: string): void => {
    const logger = IoCContainer.instance.resolve(env.LOGGER || 'console') as typeof console.log;
    logger(query);
};

export { logQuery };
