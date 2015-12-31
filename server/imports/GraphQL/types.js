const {
	GraphQLObjectType,
	GraphQLInt,
	GraphQLString,
	GraphQLNonNull
} = GraphQL.types;

export var Human = new GraphQLObjectType({
	name: 'Human',
	fields: () => ({
		id: {
			type: new GraphQLNonNull(GraphQLInt)
		},
		firstName: {
			type: new GraphQLNonNull(GraphQLString)
		},
		lastName: {
			type: new GraphQLNonNull(GraphQLString)
		}
	})
});
