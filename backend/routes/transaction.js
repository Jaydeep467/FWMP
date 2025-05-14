//const { addIncome } = require('../controllers/income')

const { addExpense, getExpense, deleteExpense } = require('../controllers/expense')
const { addIncome, getIncome, deleteIncome } = require('../controllers/income')

const router = require('express').Router()


router.post('/add-income', addIncome)
    .get('/get-income', getIncome)
    .delete('/delete-income/:id', deleteIncome)
    .post('/add-expense', addExpense)
    .get('/get-expense', getExpense)
    .delete('/delete-expense/:id', deleteExpense)
//router.post('/add-income', addIncome)

module.exports = router