const express = require('express')
const app = express();
const router = express.Router()
const PORT =  5000
app.listen(PORT,()=>{
    console.log(`TODO Server is started on port ${PORT} 👽👽🪐`)
})


app.use(express.json())
const mongoose = require('mongoose');
async function connectDatabase() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
  }
connectDatabase().then((result)=>console.log(result)).catch(err => console.log(err));

const todoschema = new mongoose.Schema({
    task: String,
    status: Boolean,
  });

const todomodel = mongoose.model('todo', todoschema);

app.use(router);
router.post('/todo',(req,res)=>
{
    const {task,status} =  req.body;
    const todoCreated =  new todomodel({task:task, status: status})
    todoCreated.save();
    res.json({
        success: true,
        todoCreated
    })
})
router.get('/todo',async(req,res)=>{
    const todo  = await todomodel.find();
    res.json({
        success: true,
        todo
    })
})
