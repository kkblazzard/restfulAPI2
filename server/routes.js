const controller=require('./controller');
module.exports=function(app){
    app
        .get('/tasks', controller.index)
        .post('/tasks', controller.new)
        .get('/tasks/:id', controller.details)
        .put('/tasks/:id', controller.update)
        .delete('/tasks/:id', controller.remove)
    }