type TSQLite = {
    _fields: string;
    select(...fields: string[]): TSQLite;
    find(): Promise<any>;
};

async function SQLite() {
    const sqlite = await import('sqlite3');
    return {
        _fields: '',
        entityName: '',
        select(...fields: string[]) {
            this._fields = fields.join(', ');
            return this;
        },
        async find() {
            return new Promise((resolve, reject) => {
                sqlite.all(`SELECT ${this._fields} FROM ${this.entityName}`, (err, rows)=> {
                    if(err) return reject(err);
                    return resolve(rows);
                });
            });
        },
        async delete(field: string, value: any) {
            return new Promise((resolve, reject) => {
                sqlite.run(`DELETE FROM ${this.entityName} WHERE ${field} = ${value}`);
            });
        },
        async raw(query: string) {
            // todo
        }
    } as TSQLite;
}

async function dummy() {
    const sqlite = await SQLite();
    const query = sqlite.select('id', 'name', 'createdAt AS created_at');

}
