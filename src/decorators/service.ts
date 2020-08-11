import { IoCContainer } from '../ioc-container/index';
import { parseKeyValue } from '../functions/parseKeyValue';
import { executeQuery } from '../functions/executeQuery';

export const Service: NoParamsClassDecorator =
    (target) => {
        const prototype = target.prototype as IService<Unknown, unknown>;
        const table = 'persons';
        const config = prototype._config;

        prototype.getOne = async function(entity) {
            const condition = parseKeyValue(entity);
            const query = `SELECT * FROM ${table} WHERE ${condition}`;
            const queryResponse = await executeQuery(config, query);
            return queryResponse[0];
        };
        prototype.getAll = async function() {
            const query = `SELECT * FROM ${table}`;
            const queryResponse = await executeQuery(config, query);
            return queryResponse;
        };
        prototype.save = async function(entity) {
            const keys = Object.keys(entity);
            const query = `INSERT INTO ${table} (${keys.join(', ')}) VALUES ()`;
            await executeQuery(config, query);
            return null;
        };
        prototype.update = async function(entity) {
            return null;
        };
        prototype.delete = async function(entity) {
            const condition = parseKeyValue(entity);
            const query = `DELETE FROM ${table} WHERE ${condition}`;
            await executeQuery(config, query);
            return;
        };

        IoCContainer.instance.register(target.name, target);
    };
