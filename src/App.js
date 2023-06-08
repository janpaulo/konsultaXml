import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import NavItems from './shared/NavItem';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Dashboard from './../src/pages/home/dashboard'
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

function App() {
  return (
    <Box sx={{ display: 'flex' }}>
        <BrowserRouter>
          <NavItems />

          <CssBaseline />
          <Container maxWidth="lg" style={{marginTop: '64px'}}>
              <Routes>
                <Route exact path="/"  element={ <Dashboard/> } />
                {/* <Route exact path="/employees"  element={ <Employees/> } />
                <Route exact path="/files" element={ <Files/> }  />
                <Route exact path="/leaves" element={ <Leaves/> }  />
                <Route exact path="/konsulta" element={ <Konsulta/> }  /> */}
              </Routes>
            </Container>
        </BrowserRouter>

   </Box>
  );
}

export default App;
