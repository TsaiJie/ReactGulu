import React, {Fragment,} from 'react';
import Button from './button';

const ButtonExample: React.FunctionComponent = () => {
  
  return (<Fragment>
    <div>
      <Button>默认按钮</Button>
      <Button theme="link" href="https://www.baidu.com">默认按钮</Button>
      <Button theme="text" >默认按钮</Button>
    </div>
  </Fragment>);
};
export default ButtonExample;
