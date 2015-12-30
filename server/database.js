import Sequelize from 'sequelize';
import _ from 'lodash';
import Faker from 'faker';

const postgresConnection = new Sequelize(
	'World',
	'animal',
	'postgres', {
		dialect: 'postgres',
		host: 'localhost'
	}
);

const Human = postgresConnection.define('human', {
	firstName: {
		type: Sequelize.STRING,
		allowNull: false
	},
	lastName: {
		type: Sequelize.STRING,
		allowNull: false
	}
});

postgresConnection.sync({force: true}).then(() =>{
	_.times(10, ()=>{
		return Human.create({
			firstName: Faker.name.firstName(),
			lastName: Faker.name.lastName()
		});
	})
})

export default postgresConnection;
