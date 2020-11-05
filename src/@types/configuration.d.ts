declare interface Config {
    client: 'sqlite3' | 'mysql2' | 'postgres';
    database: string;
    username?: string;
    password?: string;
    extraConfig?: {[key: string]: string | number};
    envirornment: string;
    logSQL?: boolean;
}

declare interface IConfiguration {
    _config: Config;
    _env: string;
    _connection: Promise<IConnection>;
}

type TConfiguration = (config: Config) => TClassDecorator;
