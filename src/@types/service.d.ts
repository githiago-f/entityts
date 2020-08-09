declare interface IService<Entity, Identificator = number> {
    _connection;
    save: (entity: Entity) => Entity;
    update: (entity: Entity, id: Identificator) => Entity;
    delete: (id: Identificator) => void;
    getOne: (id: Identificator) => Entity;
    getAll: () => Entity[];
}
