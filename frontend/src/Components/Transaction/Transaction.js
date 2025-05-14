import React from "react";
import styled from "styled-components";
import Tincome from "./Tincome";
import Texpense from "./Texpense";

function Transaction() {
    return (
        <TransactionStyled>
            <h1>Transactions</h1>
            <div className="transaction-container">
                <div className="transaction-income">
                    <Tincome />
                </div>
                <div className="transaction-expense">
                    <Texpense />
                </div>
            </div>
        </TransactionStyled>
    );
}

const TransactionStyled = styled.div`
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    h1 {
        text-align: center;
        color: #333;
    }

    .transaction-container {
        display: flex;
        margin-top: 20px;
    }

    .transaction-income {
        max-width: 50%; /* Limit maximum width to 40% of container */
        padding: 10px;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        margin-right: 20px; /* Adjust spacing between the sections */
        align: left;
    }

    .transaction-expense {
        max-width: 50%; /* Limit maximum width to 40% of container */
        padding: 20px;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
`;

export default Transaction;
