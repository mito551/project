module.exports = (sequelize, Sequelize) => {
    const Score = sequelize.define('score', {
        userID: {
            type: Sequelize.INTEGER
        },
        gameID: {
            type: Sequelize.INTEGER
        },
        score: {
            type: Sequelize.INTEGER
        },
        gameTime: {
            type: Sequelize.INTEGER
        }
    }, {
        tableName: 'scores'
    });

    return Score;
}