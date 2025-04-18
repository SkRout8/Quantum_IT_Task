const express=require('express')
const { Register } = require('../Controller/Register')
const { login } = require('../Controller/Login')

const router=express.Router()
router.post("/register",Register)
router.post("/login",login)

module.exports=router