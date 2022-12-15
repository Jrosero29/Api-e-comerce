const smartphonesrouter = require ('./smartphones')
function routerApi(app){
    app.use('/smartphones',smartphonesrouter);
}
module.exports=routerApi;