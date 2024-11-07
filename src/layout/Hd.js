import React from 'react'
import { Link } from 'react-router-dom';
import navidb from '../db/db.json';

export default function Hd() {
  return (
    <div id="hd">
      <div className="container">
        <h1><a href="">로고</a></h1>
        <ul>
          {
            navidb.layout.navMenu.map(( ele, idx )=>{
                    return (
                    //   <li>
                    //     <Link to={navidb.layout.navMenu[idx].menuTitle}>
                    //           {navidb.layout.navMenu[idx].menuTitle}
                    //     </Link>
                    //  </li>
                     <li>
                        <Link to={ele.menuTitle}>
                              {ele.menuTitle}
                        </Link>
                     </li>
                    )
            })
          }
          
         
        </ul>

      </div>
    </div>
  )
}
