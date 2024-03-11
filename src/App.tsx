import './App.css';
import { useState } from 'react';
import Title from './components/Title'; 
import Button from './components/Button';
import Tabs from './components/Tabs';
import User from './components/User';

function App() {
  return (
    <>
      <User text="Artem Malkin"></User>
      <Title text = "Sign In"></Title>
      <div><Tabs isDisabled={false}></Tabs></div>
      <Button isDisabled={false} text="Primary" typeButton={'button-primary'} />
      <Button isDisabled={false} text="Secondary" typeButton={'button-secondary'} />
      <Button isDisabled={false} text="Secondary 2" typeButton={'button-secondary-2'} />
    </>
  );
}

export default App;
