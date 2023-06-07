const { Model, DataTypes, Sequelize } = require('sequelize');
const TASK_TABLE = 'tasks';

class Task extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: TASK_TABLE,
            modelName: 'Task',
            timestamps: true
        }
    }
} 

const TaskSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field:'userId'
    },
    title: {
        allowNull: false,
        type: DataTypes.STRING,
        field:'title'
    },
    description:{ 
        allowNull:false,
        type: DataTypes.STRING,
        field: 'description'
    },
    status:{
        allowNull: false,
        type: DataTypes.STRING,
        field: 'status'
    } 
}
  
module.exports = { Task, TaskSchema };