const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLNonNull
} = GraphQL.types;

export var Human = new GraphQLObjectType({
	name: 'Human',
	fields: () => ({
		id: {
			type: new GraphQLNonNull(GraphQLString)
		},
		firstName: {
			type: new GraphQLNonNull(GraphQLString)
		},
		lastName: {
			type: new GraphQLNonNull(GraphQLString)
		}
	})
});
