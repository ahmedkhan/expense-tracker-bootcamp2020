import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { ListItemText, ListItem } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <ListItem className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text} 
      <ListItemText  style={{
                    display: "flex",
                    flexDirection: "column-reverse",
                    justifyContent: "center",
                    alignItems: "inherit",
                    margin: "0 auto",
                    width: "50%",
                    padding: "0 0 0 30px"
                    
                }}>{sign}${Math.abs(transaction.amount)}</ListItemText>
      <DeleteIcon onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</DeleteIcon>
    </ListItem>
  )
}