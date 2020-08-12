import { IoCContainer } from '../ioc-container/index';

export const Entity: TClassDecorator<string> =
(tableName: string) =>
    (target: TClass) => {
        const prototype = target.prototype as TEntity;

        prototype._columns = {};
        prototype._tableName = tableName;

        IoCContainer.instance.register(target.name, target);
    };
