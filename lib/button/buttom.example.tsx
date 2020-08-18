import React, {Fragment,} from 'react';
import Button from './button';

const ButtonExample: React.FunctionComponent = () => {
  
  return (<Fragment>
    <div>
      <Button>默认按钮</Button>
      <Button theme="link" href="https://www.baidu.com">link</Button>
      <Button theme="text" >text</Button>
    </div>
    <div>
      <Button size="big">默认按钮</Button>
      <Button size="big" theme="link" href="https://www.baidu.com">link</Button>
      <Button size="big" theme="text" >text</Button>
      <br/>
      <Button size="small">默认按钮</Button>
      <Button size="small" theme="link" href="https://www.baidu.com">link</Button>
      <Button size="small" theme="text" >text</Button>
    </div>
  </Fragment>);
};
export default ButtonExample;
