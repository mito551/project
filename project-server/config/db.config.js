module.exports = {
    HOST: 'localhost',
    PORT: 33306,
    USER: 'root',
    PASSWORD: 'secret',
    DB: 'trainingBase',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}