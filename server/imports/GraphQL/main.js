const {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt,
	GraphQLList,
	GraphQLNonNull
} = GraphQL.types;

import { Human } from "./types.js";
import WorldDB from "../PostgreSQL/main.js";

const query = new GraphQLObjectType({
	name: 'WorldQueries',
	fields: () => ({
		humans: {
			type: new GraphQLList(Human),
			resolve() {
				// Find the people in the database
				let people = WorldDB.models.human.findAll();
				return people;
			}
		},
		human: {
			type: Human,
			args: {
				id: {
					type: new GraphQLNonNull(GraphQLInt)
				}
			},
			resolve(root, args) {
				// TODO: Postgres resolve
				let person = WorldDB.models.human.findById(args.id);
				return person;
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
				// Create the new person
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

export default GraphQL.registerSchema('World', schema);
