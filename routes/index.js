const smartphonesrouter = require ('./smartphones')
const computadoresrouter = require ('./computadores')
function routerApi(app){
    app.use('/smartphones',smartphonesrouter);
    app.use('/computadores',computadoresrouter);
}
module.exports=routerApi;