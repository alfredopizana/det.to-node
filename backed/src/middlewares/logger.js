function calllog(request,response,next){
    const {method, url,body} = request
    console.log(`${method} ${url} ${JSON.stringify(body)}`)
    next()
}
module.exports = calllog