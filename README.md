Meteor GraphQL PostgreSQL Demo
========

Basic Demo of [Meteor 1.3 (NPM support)](https://forums.meteor.com/t/meteor-1-3-early-beta-now-available/14723) with [React](https://facebook.github.io/react/), [Lokka](https://github.com/kadirahq/lokka), [GraphQL](https://facebook.github.io/react/blog/2015/05/01/graphql-introduction.html), [PostgreSQL](http://www.postgresql.org/) ([Sequelize](http://docs.sequelizejs.com/en/latest/))

[Live Demo](https://graphql-postgres-demo.meteor.com) (Not currently working due to Galaxy not working with Meteor 1.3 and NPM Packages)

## Usage

* clone the repository
* modify `server/imports/PostgreSQL/connection.js` with your own credentials (either localhost, heroku instance, or other)
* run `meteor` from project root

View GraphiQL locally at: <br>
`http://localhost:3000/graphql/ide?schema=World`

## TODO

+ Latency Compensation:<br>
Not Currently working because Lokka requires the cached item to be identical to what's received from GraphQL. Since IDs aren't randomly generated with Postgres (as opposed to Mongo) you can't just supply an ID for the server to insert. This could be worked around by only requesting data that doesn't include the ID and then inserting that into the cache.

## Credits

+ Lee Benson for this [YouTube Video](https://www.youtube.com/watch?v=DNPVqK_woRQ) on GraphQL+Sequelize
+ Arunoda for [Meteor GraphQL](https://github.com/kadirahq/meteor-graphql) Support and [Demos](https://github.com/kadira-samples/meteor-graphql-demo)
