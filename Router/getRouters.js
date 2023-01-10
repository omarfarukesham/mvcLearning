const express = require('express')

const router = express.Router()
const {getUser, setUser, updateUser, deleteUser} = require('../Controller/getControllers')



router.get('/', getUser)
router.post('/', setUser)

router.put('/:id', updateUser)
router.delete('/:id', deleteUser)


module.exports = router

