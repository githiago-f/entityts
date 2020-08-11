import { IoCContainer } from '../ioc-container/index';

export const Service: NoParamsClassDecorator =
    (target) => {
        const prototype = target.prototype as IService<Unknown, unknown>;

        const table = 'persons', identificator = 'id';

        const config = prototype._config;
        const { useRaw } = config._connection;

        prototype.getOne = async function(id) {
            return useRaw(`SELECT * FROM ${table} WHERE ${identificator} = ${id}`)[0];
        };
        prototype.getAll = async function() { return []; };
        prototype.save = async function(entity) { return null; };
        prototype.update = async function(entity, id) { return null; };
        prototype.delete = async function(id) { return; };

        IoCContainer.instance.register(target.name, target);
    };
