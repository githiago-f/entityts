
declare interface IConnection {
    useRaw: (query: string) => Promise<Sqlite3.Statement>;
}
