const {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLString,
	GraphQLList,
	GraphQLNonNull
} = GraphQL.types;

export var Ancestor = new GraphQLObjectType({
	name: 'Ancestor',
	fields: () => ({
		_id: {
			type: new GraphQLNonNull(GraphQLString)
		},
		name: {
			type: new GraphQLNonNull(GraphQLString)
		}
	})
});

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
