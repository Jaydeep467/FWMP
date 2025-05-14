import React from 'react';
import { Chart as ChartJs, CategoryScale, LinearScale, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/globalContext';

ChartJs.register(CategoryScale, LinearScale, ArcElement, Title, Tooltip, Legend);

function Chart() {
    const { incomes, expenses } = useGlobalContext();

    const totalIncome = incomes.reduce((sum, income) => sum + income.amount, 0);
    const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);

    const data = {
        labels: ['Income', 'Expenses'],
        datasets: [
            {
                label: 'Income vs Expenses',
                data: [totalIncome, totalExpenses],
                backgroundColor: ['green', 'red'],
                hoverOffset: 4,
            }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Income vs Expenses',
                font: {
                    size: 20, // Adjust the font size as needed
                } 
            },
        },
    };

    return (
        <ChartStyled>
            <Pie data={data} options={options} />
        </ChartStyled>
    );
}

const ChartStyled = styled.div`
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    padding: 1rem;
    border-radius: 20px;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

export default Chart;
