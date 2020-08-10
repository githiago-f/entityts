declare interface IService<Entity, Identificator = number> {
    _config: IConfiguration;
    save: (entity: Entity) => Promise<Entity>;
    update: (entity: Entity, id: Identificator) => Promise<Entity>;
    delete: (id: Identificator) => Promise<void>;
    getOne: (id: Identificator) => Promise<Entity>;
    getAll: () => Promise<Entity[]>;
}
