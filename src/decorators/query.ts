export const Query: TPropertyDecorator<string> =
(query) =>
    (target: TClass, propertyName) => {
        const prototype = Reflect.getPrototypeOf(target) as IService<Unknown, unknown>;
        const config = prototype._config;
        const { useRaw } = config._connection;

        prototype[propertyName] = async () => useRaw(query);
    };
