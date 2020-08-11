export const Query: TPropertyDecorator<string> =
(query) =>
    (target, methodName) => {
        const prototype = Reflect.getPrototypeOf(target) as IService<Unknown, unknown>;

        const config = prototype._config;

        const executeQuery = async function(){
            const { useRaw } = await config._connection;
            const statement = await useRaw(query);
            return new Promise((resolve, reject)=>{
                statement.all((err, rows) => {
                    if(err) return reject(err);
                    return resolve(rows);
                });
            });
        };

        prototype[methodName] = executeQuery;
    };
