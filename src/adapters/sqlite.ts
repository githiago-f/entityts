
export async function SQLite(config: Config): Promise<any> {
    const sqlite = (await import('sqlite3')).verbose();
    const db = new sqlite.Database(config.database);
    return {
        async useRaw(query) {
            const statement = db.prepare(query);
            return statement;
        }
    };
}
