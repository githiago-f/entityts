import * as path from 'path';
import { Configuration } from '../../../decorators/configuration';

@Configuration({
    client: 'sqlite3',
    database: path.resolve(__dirname, 'db/tests.db')
})
export class DBTestConfig {}
