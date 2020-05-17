'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addConstraint('Songs', ['userId'], {
            type: 'foreign key',
            name: 'custom_fkey_userId',
            references: {
                table: 'Users',
                field: 'id'
            },
            onDelete: 'cascade',
            onUpdate: 'cascade'
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.removeConstraint('Songs', 'custom_fkey_userId')
    }
};