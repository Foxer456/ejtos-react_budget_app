import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, setBudget, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        dispatch({ type: 'SET_BUDGET', payload: parseInt(event.target.value) })
        if(newBudget >= 20000){
            alert("the budget can not exceed 20000")
            setNewBudget(2000)
        }
        else
            setNewBudget(event.target.value);
            setBudget(event.target.value); 
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £
                <input 
                type="number" 
                step="10" 
                value={newBudget} 
                onChange={handleBudgetChange}>
                </input>
            </span>
        </div>
    );
};

export default Budget;
