const path = require('path');
const dbList = ['game', 'web']
const connections = dbList.map(dbName => {
    return {
        "name": `${dbName}`,
        "type": "sqlite",
        "database": path.join(__dirname, `db/${dbName}.db`),
        "entities": [
            path.join(__dirname, `src/entity/${dbName}/**/*.ts`)
        ],
        "migrations": [
            path.join(__dirname, `src/migration/${dbName}/**/*.ts`)
        ],
        // "synchronize": true,
        // "migrationsRun":true,
        // "autoSchemaSync": true,
        "logging": true,
        "cli": {
            "migrationsDir": `src/migration/${dbName}/`,
            "entitiesDir": `src/entity/${dbName}/`,
            "subscribersDir": `src/subscriber/${dbName}/`
        }
    }
})

module.exports = connections