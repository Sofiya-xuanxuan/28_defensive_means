const Koa=require('koa')
const helmet=require('koa-helmet')
const app=new Koa()

app.use(helmet())

app.use(ctx=>{
    ctx.body='hello helmet'
})

app.listen(4000)