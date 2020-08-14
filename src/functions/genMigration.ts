
class MigrationManager {
    constructor(
        private connection: IConnection
    ) {}

    async migrate() {
        this.connection.executeQuery('');
    }

    drop: () => Promise<void>;
    createTable: (table: TColumn) => Promise<void>;
}
