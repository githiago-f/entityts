export const Column: TPropertyDecorator<string> =
(columnName?: string) =>
    (target, propertyName) => {
        const prototype = Reflect.getPrototypeOf(target) as TEntity;
        prototype._columns = prototype._columns || {};
        prototype._columns[propertyName] = columnName || propertyName;
    };
