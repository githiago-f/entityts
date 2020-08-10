type TSQLite = {
    _fields: string;
    select(...fields: string[]): TSQLite;
    find(): Promise<any>;
    entityName: string;
};

export async function SQLite(config: Config): Promise<TSQLite> {
    const sqlite = (await import('sqlite3')).verbose();
    const db = new sqlite.Database(config.database);
    return {
        _fields: '',
        entityName: '',
        select(...fields: string[]) {
            this._fields = fields.join(', ');
            return this;
        },
        async find() {
            return new Promise((resolve, reject) => {
                db.all(`SELECT ${this._fields} FROM ${this.entityName}`, (err, rows)=> {
                    if(err) return reject(err);
                    return resolve(rows);
                });
            });
        },
        async delete(field: string, value: any) {
            return new Promise((resolve, reject) => {
                db.run(`DELETE FROM ${this.entityName} WHERE ${field} = ${value}`);
            });
        },
        async raw(query: string) {
            return db.run(query);
        }
    } as TSQLite;
}
