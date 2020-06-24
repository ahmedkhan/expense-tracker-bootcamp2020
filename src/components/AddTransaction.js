import React, { useState, useContext } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import { GlobalContext } from '../context/GlobalState';


const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
  }));

export const AddTransaction = () => {   
    const classes = useStyles();

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }

        addTransaction(newTransaction);
    }
    return (
        
        <div>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit} className={classes.root} noValidate autoComplete="off">
                <div className="form-control">                    
                    <TextField label="Enter Text Here...." variant="outlined" value={text} onChange={(e) => setText(e.target.value)} />
                </div>
                <div className="form-control">
                    
                    <TextField type="number" value={amount} onChange={(e) => setAmount(e.target.value)} label="Enter amount..." variant="outlined"/>
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </div>
    )
}
