import { logQuery } from '../functions/logging-strategy';

export async function SQLite(config: Config): Promise<IConnection> {
    const sqlite = (await import('sqlite3')).verbose();
    const db = new sqlite.Database(config.database);

    return {
        async useRaw(query) {
            const statement = db.prepare(query);
            return statement;
        },
        async executeQuery(query: string) {
            if(config.logSQL){
                logQuery(query);
            }
            const statement = await this.useRaw(query);
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
        }
    };
}
