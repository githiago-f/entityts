import { Configuration } from '../../../decorators/configuration';

@Configuration({
    client: 'mysql2',
    database: 'posts',
    password: process.env.DB_PASSWORD || '',
    username: process.env.DB_USERNAME || 'root',
    envirornment: 'production'
})
export class DBTestConfig {}
