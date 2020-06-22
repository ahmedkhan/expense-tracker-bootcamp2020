import React from 'react';
import { Header } from './components/Header';
import { Paper } from '@material-ui/core';







function App() {

  return (

    <Paper style={{ marginTop: 100, marginLeft: 250, marginRight: 250, marginBottom: 100, height: '100vh', backgroundColor: '#fafafa' }} elevation={3}>
      <Header />
    </Paper>
  );
}

export default App;
