import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
    root: {
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
        borderRight: "border-width border-style border-color|initial|inherit",
        borderLeft: "border-width border-style border-color|initial|inherit",
    },
    title: {
        textAlign: "center",
        fontSize: 16,
    },    
    
    total: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "x-large",
        color: '#2e16a5',
        padding: "0 0 10px"
    }

})



export const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h4 className={classes.title}>Your Balance</h4>
            <h1 className={classes.total}>${total}</h1>
        </div>
    )
}






