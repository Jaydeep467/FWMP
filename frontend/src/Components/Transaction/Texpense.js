import React, { useEffect } from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layouts";
import { useGlobalContext } from "../../context/globalContext";
import IncomeItem from "../IncomeItem/IncomeItem";
import ExpenseForm from "../Expenses/ExpenseForm";

function Texpense()
{
    const {addExpense, expenses, getExpense, deleteExpense, totalExpense} = useGlobalContext()
    
    useEffect(() => {
        getExpense()
    }, [])

    return(
        <ExpenseStyled>
            <InnerLayout>
                <h1>Expenses</h1>
                <h2 className="total-income">Total Expenses: <span>${totalExpense()}</span></h2>
                <div className="income-content">
                    <div className="form-container">
                                            </div>
                    <div className="incomes">
                       {expenses.map((income) => {
                            const{ _id, title, amount, date, category, description, type} = income;
                            console.log(income)

                            return <IncomeItem
                                key={_id}
                                id={_id} 
                                type={type}
                                title={title} 
                                description={description} 
                                amount={amount} date={date} 
                                category={category} 
                                indicatorColor="var(--color-green)"
                                deleteItem={deleteExpense}
                            />
                       })} 
                       
                    </div>
                </div>

            </InnerLayout>
        </ExpenseStyled>
    )
}

const ExpenseStyled = styled.div`
    
    overflow: auto;
    .total-income{
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        border-radius: 20px;
        padding: 1rem;
        margin: 2rem 0;
        font-size: 1rem;
        gap: .5rem;
        width: 300px; /* Set fixed width */
        margin-left: 75px;

        span{
            font-size: 1rem;
            font-weight: 800;
            color: var(--color-green);
        }
    }
    .income-content{
        
        gap: 2rem;
        .incomes{
            font-size: 0.8rem;
            width: 500px;
        }
    }
`;

export default Texpense