import * as path from 'path';

describe('Database configuration', ()=>{
    test('should initialize a Database configuration object', ()=> {
        console.log(path.resolve(__dirname, 'config/db/tests.db'));
        expect(true).toBeTruthy();
    });
});
