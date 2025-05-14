import React, { useContext, useState } from "react"
import axios from "axios"

const BASE_URL = "http://localhost:5000/api/v1/";

const GlobalContext = React.createContext()


export const GlobalProvider =({children}) => {

    const [incomes, setIncomes] = useState([])
    const [expenses, setExpenses] = useState([])
    const [error, setError] = useState(null)

    //calculate incomes
    const addIncome = async (income) => {
        const response = await axios.post(`${BASE_URL}add-income`, income)
            .catch((err) =>{
                setError(err.response.data.message)
            })
        getIncome()
    }

    const getIncome = async (income) => {
        const response = await axios.get(`${BASE_URL}get-income`)
            setIncomes(response.data)
            console.log(response.data)

    }

    const deleteIncome = async (id) => {
        const res = await axios.delete(`${BASE_URL}delete-income/${id}`)
        getIncome()
    }

    const totalIncome = () => {
        let totalIncome = 0;
        incomes.forEach((income) => {
            totalIncome = totalIncome + income.amount;

        })

        return totalIncome;
    }

    //calculating expenses

    const addExpense = async (income) => {
        const response = await axios.post(`${BASE_URL}add-expense`, income)
            .catch((err) =>{
                setError(err.response.data.message)
            })
        getExpense()
    }

    const getExpense = async () => {
        const response = await axios.get(`${BASE_URL}get-expense`)
            setExpenses(response.data)
            console.log(response.data)

    }

    const deleteExpense = async (id) => {
        const res = await axios.delete(`${BASE_URL}delete-expense/${id}`)
        getExpense()
    }

    const totalExpense = () => {
        let totalExpense = 0;
        expenses.forEach((income) => {
            totalExpense = totalExpense + income.amount;

        })

        return totalExpense;
    }



    console.log('total', totalIncome());

    const totalbalance = () => {
        return totalIncome() - totalExpense()
    }

    const transactionHistory = () => {
        const history = [...incomes, ...expenses]
        history.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt)
        })

        return history.slice(0, 3)
    }


    return (
        <GlobalContext.Provider value={{
            addIncome,
            getIncome,
            incomes,
            deleteIncome,
            totalIncome,
            addExpense,
            getExpense,
            deleteExpense,
            totalExpense,
            expenses,
            totalbalance,
            transactionHistory,
            error,
            setError
        }}>
            {children}
        </GlobalContext.Provider>
    )


}

export const useGlobalContext = () =>{
    return useContext(GlobalContext)

}
