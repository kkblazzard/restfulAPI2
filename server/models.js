var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/RESTfuldb', function(err){
        console.log("Connected to DB");
        if(err){console.log(err);}});
var taskSchema = new mongoose.Schema({
        title:{type: String},
        description:{type: String, default:""},
        completed: {type:Boolean, default:false}
        },
        {timestamps:true},);
        module.exports=mongoose.model('task', taskSchema);