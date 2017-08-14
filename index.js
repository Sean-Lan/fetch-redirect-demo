const Koa = require('koa');
const route = require('koa-route');
const serve = require('koa-static');
const path = require('path');

const app = new Koa();

const bait = ctx => {
  ctx.response.redirect('/gotcha');
}

const gotcha = ctx => {
    ctx.response.type = 'json';
  ctx.response.body = { data: 'Gotcha!' };
}

app.use(route.get('/gotcha', gotcha));
app.use(route.get('/bait', bait));
app.use(serve(path.join(__dirname, 'static')));

app.listen(3000);

