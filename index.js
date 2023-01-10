const express =  require('express')

const app = express() 
const PORT = process.env.PORT || 5000



//Rest API .............................
app.use('/user', require('./Router/getRouters'))

app.listen(PORT, ()=>{console.log(`Learning server is running on the PORT :: ${PORT}`);})
