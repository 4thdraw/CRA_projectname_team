import React from 'react'
//1. props 부모속성 -> 부모컴포넌트가 정보를 소유해서 유전 (컴포넌트공유)
//2. db.json으로 모두 데이터 한군데 모아서 필요한 컴포넌트가 연결해서 쓰기 (해당플랫폼공유)
//3. db.json  -> sql api연동 ( 외부플랫폼공유 )

import Movetool from '../ui/Mtitle'

export default function Home({bgcolor, textcolor, vh, children, childcolor }) {
  return (
    <div style={{ "background" : bgcolor, "color": textcolor, "height": vh }}>
      <Movetool textColor={childcolor}>{children}</Movetool>     
      
      </div>
  )
}
