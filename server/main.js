const {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLString,
	GraphQLList,
	GraphQLNonNull
} = GraphQL.types;

import Sleep from "./imports/Tools/Sleep/Sleep.js";
import Promisify from "./imports/Tools/Promisify/Promisify.js";
import { Human } from "./imports/GraphQL/types.js";

import WorldDB from "./database.js";

const query = new GraphQLObjectType({
	name: 'WorldQueries',
	fields: () => ({
		humans: {
			type: new GraphQLList(Human),
			resolve() {
				// Old Monogo Code
				/*
				const coll = HumansCollection.rawCollection();
				const cursor = coll.find();
				return Sleep(200)
					.then(() => Promisify(cursor, 'toArray')());
				*/

				// New Postgres code
				let people = WorldDB.models.human.findAll();
				return people;
			}
		},
		human: {
			type: Human,
			args: {
				id: {
					type: new GraphQLNonNull(GraphQLString)
				}
			},
			resolve() {
				// Old Mongo Code
				/*
				const selector = {
					id: args.id
				};
				const coll = HumansCollection.rawCollection();
				return Sleep(200)
					.then(() => Promisify(coll, 'findOne')(selector));
				*/

				// TODO: Postgres resolve
			}
		}
	})
})
const mutation = new GraphQLObjectType({
	name: 'WorldMutations',
	fields: () => ({
		createHuman: {
			type: Human,
			args: {
				firstName: {
					type: new GraphQLNonNull(GraphQLString)
				},
				lastName: {
					type: new GraphQLNonNull(GraphQLString)
				}
			},
			resolve(root, args) {
				/* Old MongodDB Stuff */
				/*
				const coll = HumansCollection.rawCollection();
				return Sleep(800)
					.then(() => Promisify(coll, 'insert')(args))
					.then(() => args);
				*/

				// New Postgres Stuff
				return WorldDB.models.human.create({
					firstName: args.firstName,
					lastName: args.lastName
				});
			}
		}
	})
});

const schema = new GraphQLSchema({
	query,
	mutation
});

GraphQL.registerSchema('World', schema);
