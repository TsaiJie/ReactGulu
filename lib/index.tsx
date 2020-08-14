import React from 'react'
import ReactDom from 'react-dom'

import Icon from './icon/icon'
const fn: React.MouseEventHandler = (e)=>{
    console.log(e.currentTarget)
}
ReactDom.render(<React.Fragment>
    <Icon name={"qq"}
          onClick={fn}
          onMouseEnter={()=> console.log('enter')}
          onMouseLeave={()=> console.log('leave')}
    />
</React.Fragment>, document.querySelector("#root"))


