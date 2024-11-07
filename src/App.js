import React from 'react';
import Home from './content/Home';
import About from './content/About';
import Hd from './layout/Hd'
import { Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <div>
      <Hd></Hd>
    <div className="content">


  <Routes>
        <Route path='/' element={<Home   bgcolor="red" textcolor="white" vh="100vh" childcolor="white">
        <h2>메인페이지입니다.</h2>
        <p>짧은 설명 넣기</p>
      </Home>}></Route>

        <Route path='/about' element={ <About></About>} ></Route>

        <Route path='/contact' element={ <Home   bgcolor="yellow" textcolor="black" vh="100vh" childcolor="black">
            아~~~ 이렇게 해서 하나의 컴포넌트를 가지고 가성비있게 쓰는구나~<br></br>
            역시 리액트다~~~~
       </Home>     }></Route>
  </Routes>

      
      
     
    </div>
    </div>
  )
}
