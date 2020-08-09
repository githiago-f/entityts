declare type Config = {
    client: 'sqlite3' | 'mysql2' | 'postgres';
    database: string;
    username?: string;
    password?: string;
    extraConfig?: {[key: string]: string | number}
}

declare interface IConfiguration {
    _config: Config;
}
