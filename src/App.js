import logo from './logo.svg';
import './App.css';
import React from 'react';
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import { getOrg } from './features/orgSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrg());
  }, [])
  return (
    <div className="App">
      <FirstComponent />
      <SecondComponent />
    </div>
  );
}

export default App;
