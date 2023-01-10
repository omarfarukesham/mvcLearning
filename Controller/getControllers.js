
const getUser = (req, res)=>{
    res.send('Hi I am GET_API from controller ............')
}

const setUser = (req, res)=>{
    res.send('Hi I am POST_API from controller ............')
}

const updateUser = (req, res)=>{
    res.send(`Hi I am Update_API from controller ............${req.params.id}`)
}

const deleteUser = (req, res)=>{
    res.send(`Hi I am Update_API from controller ............${req.params.id}`)
}



module.exports = {getUser, setUser, updateUser, deleteUser}