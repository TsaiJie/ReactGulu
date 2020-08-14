import React from 'react'
import ReactDom from 'react-dom'

import Icon from './icon'

ReactDom.render(<React.Fragment>
    <Icon name={"qq"} onClick={(e)=>console.log(e.currentTarget)}/>
</React.Fragment>, document.querySelector("#root"))


