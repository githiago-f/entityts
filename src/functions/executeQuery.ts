export const executeQuery = async function(config: IConfiguration, query: string): Promise<any> {
    const { useRaw } = await config._connection;
    const statement = await useRaw(query);
    return new Promise((resolve, reject)=>{
        if(query.match(/select/ig)) {
            statement.all((err, rows) => {
                if(err) {
                    return reject(err);
                }
                return resolve(rows);
            });
        }else {
            statement.run((err) => {
                if(err) {
                    reject(err);
                }
            });
        }
        statement.finalize();
    });
};
