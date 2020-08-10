import { IoCContainer } from '../ioc-container/index';

export const Service: NoParamsClassDecorator =
    (target) => {
        const prototype = target.prototype as IService<any, number>;

        prototype.getOne = function(id) { return null;};
        prototype.getAll = function() { return []; };
        prototype.save = function(entity) { return null; };
        prototype.update = function(entity, id) { return null; };
        prototype.delete = function(id) { return; };

        IoCContainer.instance.register(target.name, target);
    };
