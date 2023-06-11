"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class todo extends Model {
        static associate(models) {
        }
    }
    todo.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            description: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: "todo",
            underscored: true,
        }
    );
    return todo;
};
