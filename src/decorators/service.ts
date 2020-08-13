import { IoCContainer } from '../ioc-container/index';
import { parseKeyValue } from '../functions/parseKeyValue';

export const Service: NoParamsClassDecorator =
    (target) => {
        const prototype = target.prototype as IService<Unknown, unknown>;
        const defaultEntity = prototype._entity as TEntity;

        const table = defaultEntity._tableName;
        const executeQuery = async (query: string) => {
            return (await prototype._config._connection)
                .executeQuery(query);
        };

        prototype.getOne = async function(entity) {
            const condition = parseKeyValue(entity);
            const query = `SELECT * FROM ${table} WHERE ${condition}`;
            const queryResponse = await executeQuery(query);
            return queryResponse[0];
        };

        prototype.getAll = async function() {
            const query = `SELECT * FROM ${table}`;
            const queryResponse = await executeQuery(query) as Unknown[];
            return queryResponse;
        };

        prototype.save = async function(entity) {
            const keys = Object.keys(entity);
            const vals = () => {
                return keys.map(key => entity[key]).join(', ');
            };
            const query = `INSERT INTO ${table} (${keys.join(', ')}) VALUES (${vals()})`;
            await executeQuery(query);
            return null;
        };

        prototype.update = async function(entity) {
            Object.keys(entity);
            return null;
        };

        prototype.delete = async function(entity) {
            const condition = parseKeyValue(entity);
            const query = `DELETE FROM ${table} WHERE ${condition}`;
            await executeQuery(query);
            return;
        };

        IoCContainer.instance.register(target.name, target);
    };
