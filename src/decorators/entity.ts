import { IoCContainer } from '../ioc-container/index';

export const Entity: DecoratorEntity =
(tableName, schema) =>
    (target) => {
        const prototype = target.prototype as TEntity;

        target['_columns'] = schema;
        prototype._tableName = tableName;

        prototype._runMigrations = () => {
            //todo
        };

        IoCContainer.instance.register(target.name, target);
    };
