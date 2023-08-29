
import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import Header from './components/Header';
import Home from './components/Home';

function App() {


  //setting which component want to be rendered by default
  const [component, componentChange] = useState('home')

  //passing this function to header component while clicking h1 automatically call this function passing 
  //value
  const selectedComponent = (value) => {
    console.log(value)
    if (value === 'counter') {
      componentChange('counter')
    }
    else if (value === 'home') {
      componentChange('home')
    }
  }


  //when componentChange change value of state component it will again render, there after setting component
  //header it wiil call this function this function will check the component value and will return the  component

  const componentViewHandle = () => {
    switch (component) {
      case 'home':
        return <Home />
      case 'counter':
        return <Counter />
      default:
        break;
    }
  }


  return (
    <div>

      {/* passing the selectedComponent function as props to Header component */}
      
      <Header selected_component={selectedComponent} />
    <hr />

      {componentViewHandle()}


    </div>

  );
}

export default App;
