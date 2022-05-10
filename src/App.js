// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';
import Mycomponents from './compnents/greet.js';
import Welcome from './compnents/welcome';
import Hello from './compnents/hello';
import Message from './compnents/message';
import Counter from './compnents/count';
import FunctionClick from './compnents/FunctionClick';
import ClassClick from './compnents/classClick';
import EventBind from './compnents/EventBinding';
import Perents from './compnents/PerentComponet';
import UserGretting from './compnents/userGretting';
import NameList from './compnents/nameList';
import Styling from './compnents/styling';
import Inline from './compnents/inline';
import './appStyle.css'
import styles from './appStyle.module.css'
import FormComponent from './compnents/formComponent';
import LifeCycleA from './compnents/LifeCycleA';
import FragmentsDemo from './compnents/FragmentsDemo';
import Table from './compnents/Table';
import PureComponent from './compnents/PureComponent';
import Person from './compnents/personComponent';
// import Prarents from './compnents/Prarents';
import PrarentsComp from './compnents/Prarentscomp';
import RefcDemo from './compnents/RefcDemo';
import FocusInput from './compnents/FocusInput';
import FrPerentsInput from './compnents/FrPerentsInput';
import PortalDemo from './compnents/portalDemo';
import Hero from './compnents/hero';
import ErrorBoundry from './compnents/ErrorBoundry';
import ClickCounter from './compnents/clickCounter';
import HoverComponent from './compnents/HoverComponent';
import ClickCounterTwo from './compnents/ClickCounterTwo';
import HowerCounterTwo from './compnents/HowerCounterTwo';
import User from './compnents/User';
import CounterProp from './compnents/counter';
import ComponentC from './compnents/ComponentC';
import { UserProvider } from './compnents/UserContext';
// import counter from './compnents/count';
// console.log(Greet);


// using function component
// function App() {
//   return (
//     <div className='App'>
//       <Mycomponents/>
//     </div>
//   )
// }

// using class components


class App extends Component{
  render(){
    return(
      <div  className='App'>

        <UserProvider value='akshay'>
          <ComponentC/>
        </UserProvider>

        {/* context */}
        {/* <ComponentC/> */}
        


        {/* render props */}
        {/* <CounterProp render = {(count,incrementCount) => (
          <ClickCounterTwo count = {count} incrementCount={incrementCount}/>
        )}/>
        <CounterProp render = {(count,incrementCount) => (
          <HowerCounterTwo count = {count} incrementCount={incrementCount}/>
        )}/> */}


        {/* <ClickCounterTwo/>
        <HowerCounterTwo/>
        <User render = {(isLogin)=> isLogin ? 'akshay' : 'guest'}/> */}
        {/* higher order function  */}
        {/* <ClickCounter/>
        <HoverComponent name= 'akshay'/>
 */}

        {/* check err handling */}
        {/* <ErrorBoundry>
        <Hero heroName= 'batman'/>
        </ErrorBoundry>
        <ErrorBoundry>
        <Hero heroName= 'superman'/>
        </ErrorBoundry>
        <ErrorBoundry>
        <Hero heroName = 'joker'/>
        </ErrorBoundry> */}


        {/* <Hero heroname = 'Batman'/> */}
        {/* <Hero heroname = 'superman'/> */}



        {/* <PortalDemo/> */}

        {/* portal root demo creat a component */}


        {/* <FrPerentsInput/> */}
        
        {/* <FocusInput/> */}
        
        {/* <RefcDemo/> */}
        {/* <PrarentsComp/> */}
        
        {/* <PureComponent/> */}
        {/* <Table/> */}
        
        {/* <FragmentsDemo/> */}

        {/* <LifeCycleA/> */}
        
        {/* <h1 className='error'>Error</h1>
        <h2 className={styles.success}>success</h2> */}

        {/* <FormComponent/> */}

        {/* <Inline/> */}
        
        {/* <Styling Primary = {true}/> */}
        
        {/* <NameList/> */}
        
        {/* <UserGretting/> */}
        
        {/* <Perents/> */}
      {/*<EventBind/>*/}
      


        {/*<FunctionClick/>
        <ClassClick/>*/}
        
{ /*       <Counter/>
        <Mycomponents/>
    */}
        
{   /*     <Mxessage/>
*/}          {/* inside we creat a children tag 
        <Mycomponents name = 'akshayPandey' hero = 'hero'>
        <p>whats Happend</p>
        </Mycomponents>
        <Mycomponents name = 'dewashisepandey' hero = 'badeBhaiya'>
          <button>action</button>
        </Mycomponents>
        <Mycomponents name = 'dewashisepandey' hero = ' bde bhaiya'/>
        <Welcome name = 'dewashisepandey' hero = ' bde bhaiya'/>
        */}
        </div>
    )
  }
}


export default App;


