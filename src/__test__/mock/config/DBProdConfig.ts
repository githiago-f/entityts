import { Configuration } from '../../../decorators/configuration';

@Configuration({
    client: 'mysql2',
    database: 'posts',
    password: process.env.DB_PASSWORD || '',
    username: process.env.DB_USERNAME || 'root',
    envirornment: 'production'
})
export class DBProdConfig implements IConfiguration {
    _config: Config;
    _env: string;
    _connection: Promise<IConnection>;
}
