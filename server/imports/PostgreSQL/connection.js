import Sequelize from 'sequelize';

const postgresConnection = new Sequelize(
	'd6gq88faq8ql6d', // Database Name
	'hegkyhjibpyubg', // Database Admin
	'x-7f3dNVO5RWTStANQckeYD1tI', // Database Password
	{
		host: 'ec2-107-22-170-249.compute-1.amazonaws.com', // Database Location
		dialect: 'postgres',
		dialectOptions: {
			ssl: true // Allow SSL for Heroku
		}
	}
);

export default postgresConnection;
