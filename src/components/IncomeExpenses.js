import React from 'react'

import { makeStyles} from '@material-ui/core';


const useStyles = makeStyles({
    root: {
        backgroundColor: "#fff",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
        borderLeft: "border-width border-style border-color|initial|inherit",
        borderRight: "border-width border-style border-color|initial|inherit",
        display: "flex",
        justifyContent: "space-between",
        margin: 0,

    },

    title: {
        textTransform: "capitalize",

    },

    income: {
        borderRight: "1px solid #dedede",
        flex: 1,
        textAlign: "center",
    },

    plus: {
        color: "#2ecc71",
        fontSize: "large",
    },

    minus: {
        color: "#c0392b",
        fontSize: "large",
    },

    expense: {
        textAlign: "center",
        flex: 1,
    }
})


export const IncomeExpenses = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.income}>
                <h4 className={classes.title}>Income</h4>
                <p className={classes.plus}>+$0.00</p>
            </div>
            <div className={classes.expense}>
                <h4 className={classes.title}>Expense</h4>
                <p className={classes.minus}>-$0.00</p>
            </div>
        </div>
    )
}
