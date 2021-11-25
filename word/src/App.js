import React from 'react';
import {Route,Link,Switch} from 'react-router-dom'

// Css
import styled from 'styled-components'

// Component
import Main from './main';
import Add from './add';
import Edit from './edit';

function App() {
  return (
    <>
      <AppWrap>
        <h1> <Link style={{textDecoration:'none'}} to='/'><span>항해는 어때요?</span></Link></h1>
        <Switch>

          <Route exact path='/' >
            <Main/>
          </Route>

          <Route path='/add'>
            <Add/>
          </Route>
          
          <Route path='/:id/edit'>
            <Edit/>
          </Route>
          
        </Switch>
      </AppWrap>
      
      <Route exact path='/'>
        <Link to='/add'><Button><div>+</div></Button></Link>
      </Route>  
    </>
  );
}

const AppWrap = styled.div`
  background-color: #fbfffe;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 100px;
  box-sizing: border-box;

  h1 {
    margin:0;
    width: 100%;
    height: 50px;
    background-color:#fff;
    text-align:center;
    line-height: 50px;
    border-bottom: 2px solid #eee;
    font-size: 24px;
    position:fixed;
    top: 0;
    left:0;
  }
  span {
    display: inline-block;
    color : #333;
  }

  @media only screen and (max-width: 992px) {
    padding: 0 50px;
  }
  @media only screen and (max-width: 768px) {
    padding: 0 10px;
  }
`
const Button = styled.div`
  width: 50px;
  height:50px;
  background-color:#6188f3;
  color:#fff;
  font-size: 50px;
  line-height: 40px;
  border-radius: 50%;
  text-align: center;
  cursor: pointer;
  position:fixed;
  right: 20px;
  bottom: 20px;
  
`
export default App;
