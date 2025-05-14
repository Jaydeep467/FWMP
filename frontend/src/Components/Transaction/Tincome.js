import React, { useEffect } from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layouts";
import { useGlobalContext } from "../../context/globalContext";
import Form from "../Form/Form";
import IncomeItem from "../IncomeItem/IncomeItem";

function Tincome()
{
    const {addIncome, incomes, getIncome, deleteIncome, totalIncome} = useGlobalContext()
    
    useEffect(() => {
        getIncome()
    }, [])

    return(
        <IncomeStyled>
            <InnerLayout>
                <h1>Incomes</h1>
                <h2 className="total-income">Total Income: <span>${totalIncome()}</span></h2>
                <div className="income-content">
                    <div className="form-container">
                        
                    </div>
                    <div className="incomes">
                       {incomes.map((income) => {
                            const{ _id, title, amount, date, category, description, type} = income;
                            return <IncomeItem
                                key={_id}
                                id={_id} 
                                title={title} 
                                type={type}
                                description={description} 
                                amount={amount} date={date} 
                                category={category} 
                                indicatorColor="var(--color-green)"
                                deleteItem={deleteIncome}
                            />
                       })} 
                       
                    </div>
                </div>

            </InnerLayout>
        </IncomeStyled>
    )
}

const IncomeStyled = styled.div`
    display: flex;
    overflow: auto;
    .h2{
        size: 20px;
    }
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

export default Tincome