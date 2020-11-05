
/**
 * @description this decorator will create a query executor.
 * this query executor is not binded to your method, you will only connect to your
 * database and get its data by executing this method.
 *
 * @param query {string}
 */
const Query: TQuery =
(query) =>
    (target, methodName) => {
        const prototype = Reflect.getPrototypeOf(target) as IService<Unknown, unknown>;

        const config = prototype._config;

        const queryExecutor = async () =>
            await (await config._connection).executeQuery(query);

        prototype[methodName] = queryExecutor;
    };

export { Query };
