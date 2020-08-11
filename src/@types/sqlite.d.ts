declare namespace Sqlite3 {
    interface RunResult extends Statement {
        lastID: number;
        changes: number;
    }

    class Statement {
        bind(callback?: (err: Error | null) => void): this;
        bind(...params: unknown[]): this;

        reset(callback?: (err: null) => void): this;

        finalize(callback?: (err: Error) => void): Database;

        run(callback?: (err: Error | null) => void): this;
        run(params: unknown, callback?: (this: RunResult, err: Error | null) => void): this;
        run(...params: unknown[]): this;

        get(callback?: (err: Error | null, row?: unknown) => void): this;
        get(params: unknown, callback?: (this: RunResult, err: Error | null, row?: unknown) => void): this;
        get(...params: unknown[]): this;

        all(callback?: (err: Error | null, rows: unknown[]) => void): this;
        all(params: unknown, callback?: (this: RunResult, err: Error | null, rows: unknown[]) => void): this;
        all(...params: unknown[]): this;

        each(callback?: (err: Error | null, row: unknown) => void, complete?: (err: Error | null, count: number) => void): this;
        each(params: unknown, callback?: (this: RunResult, err: Error | null, row: unknown) => void, complete?: (err: Error | null, count: number) => void): this;
        each(...params: unknown[]): this;
    }

    class Database {
        constructor(filename: string, callback?: (err: Error | null) => void);
        constructor(filename: string, mode?: number, callback?: (err: Error | null) => void);

        close(callback?: (err: Error | null) => void): void;

        run(sql: string, callback?: (this: RunResult, err: Error | null) => void): this;
        run(sql: string, params: unknown, callback?: (this: RunResult, err: Error | null) => void): this;
        run(sql: string, ...params: unknown[]): this;

        get(sql: string, callback?: (this: Statement, err: Error | null, row: unknown) => void): this;
        get(sql: string, params: unknown, callback?: (this: Statement, err: Error | null, row: unknown) => void): this;
        get(sql: string, ...params: unknown[]): this;

        all(sql: string, callback?: (this: Statement, err: Error | null, rows: unknown[]) => void): this;
        all(sql: string, params: unknown, callback?: (this: Statement, err: Error | null, rows: unknown[]) => void): this;
        all(sql: string, ...params: unknown[]): this;

        each(sql: string, callback?: (this: Statement, err: Error | null, row: unknown) => void, complete?: (err: Error | null, count: number) => void): this;
        each(sql: string, params: unknown, callback?: (this: Statement, err: Error | null, row: unknown) => void, complete?: (err: Error | null, count: number) => void): this;
        each(sql: string, ...params: unknown[]): this;

        exec(sql: string, callback?: (this: Statement, err: Error | null) => void): this;

        prepare(sql: string, callback?: (this: Statement, err: Error | null) => void): Statement;
        prepare(sql: string, params: unknown, callback?: (this: Statement, err: Error | null) => void): Statement;
        prepare(sql: string, ...params: unknown[]): Statement;

        serialize(callback?: () => void): void;
        parallelize(callback?: () => void): void;

        on(event: 'trace', listener: (sql: string) => void): this;
        on(event: 'profile', listener: (sql: string, time: number) => void): this;
        on(event: 'error', listener: (err: Error) => void): this;
        on(event: 'open' | 'close', listener: () => void): this;
        on(event: string, listener: (...args: unknown[]) => void): this;

        configure(option: 'busyTimeout', value: number): void;
        interrupt(): void;
    }

    function verbose(): Sqlite3;

    interface Sqlite3 {
        OPEN_READONLY: number;
        OPEN_READWRITE: number;
        OPEN_CREATE: number;
        OPEN_SHAREDCACHE: number;
        OPEN_PRIVATECACHE: number;
        OPEN_URI: number;
        RunResult: RunResult;
        Statement: typeof Statement;
        Database: typeof Database;
        verbose(): this;
    }
}
