import React from 'react'
import ReactDom from 'react-dom'

import Icon from './icon'

ReactDom.render(<React.Fragment>
    <Icon name={"wechat"}/>
    <Icon name={"alipay"}/>
    <Icon name={"qq"}/>
</React.Fragment>, document.querySelector("#root"))


