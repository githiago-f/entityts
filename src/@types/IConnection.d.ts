declare interface IConnection {
    useRaw: (query: string) => Unknown[];
}
