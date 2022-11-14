import { Model, DataTypes  } from 'sequelize';
import { pool } from '../util/database';

export const Role = pool.define('role', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: DataTypes.STRING,
}, {
    freezeTableName: true,
});