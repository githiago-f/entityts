import { IoCContainer } from '../ioc-container/index';

export const Entity: DecoratorEntity =
(tableName, schema) =>
    (target) => {
        const prototype = target.prototype as TEntity;

        prototype._columns = schema;
        prototype._tableName = tableName;

        IoCContainer.instance.register(target.name, target);
    };
