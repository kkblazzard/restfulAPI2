const Tasks=require('./models');
module.exports={
    index: (req, res)=> Tasks.find().then(tasks=>console.log(tasks) || res.json(tasks)).catch(err=>console.log(err)|| res.json(err)),
    new: (req, res) => Tasks.create(req.body).then(res.json(req.body)).catch(err=>console.log(err) || res.json(err)),
    remove: (req, res) => Tasks.findByIdAndDelete(req.params.id).then(console.log("deleted") ||res.json("deleted")).catch(err=>console.log(err) || res.json(err)),
    details:(req, res) => Tasks.findById(req.params.id).then(task=>console.log(task) || res.json({task:task} )).catch(err=>console.log(err) || res.json({errors:err})),
    update: (req, res) => Tasks.findByIdAndUpdate(req.params.id,req.body,{new: true}).then(task =>console.log(task)||res.json(task)).catch(err=>console.log(err) || res.json(err))
}
