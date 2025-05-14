import styled from "styled-components";
import math from './img/math.png'
import {MainLayout} from './styles/Layouts'
import Orb from './Components/Orb/Orb';
import Navigation from "./Components/Navigation/Navigation.js";
import React, {active, useMemo, useState} from "react";
import Dashboard from "./Components/Dashboard/Dashboard.js";
import Income from "./Components/Incomes/Income.js";
import Expenses from "./Components/Expenses/Expenses.js";
import { useGlobalContext } from "./context/globalContext.js";
import Transaction from "./Components/Transaction/Transaction.js";



function App() {
    const [active, setActive] = React.useState(1)

    const global = useGlobalContext()
    console.log(global);


    const displayData = () => {
        switch(active){
            case 1:
                return <Dashboard />
            case 2:
                return <Transaction />
            case 3:
                return <Income />
            case 4:
                return <Expenses />
            default:
                return <Dashboard />
        }
    }

    
    const orbMemo = useMemo(() => {
        return <Orb />
    })
    return (
        <AppStyled math={math} className="App">
            {orbMemo}
            <MainLayout>
                <Navigation active={active} setActive={setActive} />
                <main>
                    {displayData()}
                </main>
            </MainLayout>    
        </AppStyled>
    );
}

const AppStyled = styled.div`
    height: 100vh;
    background-image: url(${props => props.math});
    position: relative;
    main{
        flex: 1;
        background: rgba(252, 246, 249, 0.78);
        border: 3px solid #FFFFFF;
        backdrop-filter: blur(10px);
        border-radius: 32px;
        overflow-x: hidden;
        &::-webkit-scrollbar{
          width: 0;
    }
}
`;

export default App;