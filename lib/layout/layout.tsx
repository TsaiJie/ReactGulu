import React from 'react';
import {scopedClassMaker} from '../classes';
import './layout.scss';

const sc = scopedClassMaker('gulu-layout');

interface Props extends React.HTMLAttributes<HTMLElement>{
}

const Layout: React.FunctionComponent<Props> = (props) => {
  const {className, children, ...rest} = props;
  console.log(children);
  return (
      <div className={sc('', {extra: className})} {...rest}>
        {children}
      </div>);
};
export default Layout;
