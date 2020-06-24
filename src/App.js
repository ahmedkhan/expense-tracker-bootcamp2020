import React from 'react';
import './App.css';


import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { Paper, Box } from '@material-ui/core';

import { GlobalProvider } from './context/GlobalState';

function App() {


  return (
  <GlobalProvider>
    <Paper elevation={3} >
      <Header />
      <Box className="container">
        <Balance />
        <br/>
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </Box>
    </Paper>
  </GlobalProvider>
  );
}

export default App;
