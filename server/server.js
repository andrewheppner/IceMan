import koa from 'koa';
import koaRouter from 'koa-router';
import koaBody from 'koa-bodyparser';
import {graphqlKoa, graphiqlKoa} from 'graphql-server-koa';

import './data/db';
import schema from './data/schema';

const app = new koa();
const router = new koaRouter();
const PORT = 3001;

// koaBody is needed just for POST.
app.use(koaBody());

// POST and GET requests will be redirected to GraphQL schema
router.post('/graphql', graphqlKoa({schema: schema}));
router.get('/graphql', graphqlKoa({schema: schema}));


router.get('/graphiql', graphiqlKoa({endpointURL: '/graphql'}));
app.use(router.routes());
app.use(router.allowedMethods());

// server startup
app.listen(PORT, () => {
    console.log('Server is running on', 'localhost:' + PORT);
    console.log('GraphiQL dashboard', 'localhost:' + PORT + '/graphiql');
});
