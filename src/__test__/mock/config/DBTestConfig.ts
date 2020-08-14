import * as path from 'path';
import { Configuration } from '../../../decorators/configuration';

@Configuration({
    client: 'sqlite3',
    database: path.resolve(__dirname, 'db/tests.db'),
    envirornment: 'test',
    logSQL: true
})
export class DBTestConfig implements IConfiguration {
    _config: Config;
    _env: string;
    _connection: Promise<IConnection>;
}
