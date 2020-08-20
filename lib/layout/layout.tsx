import React, {ReactElement} from 'react';
import {scopedClassMaker} from '../classes';
import './layout.scss';
import Aside from './aside';

const sc = scopedClassMaker('gulu-layout');

interface Props extends React.HTMLAttributes<HTMLElement>{
  children: ReactElement | ReactElement[];
}

const Layout: React.FunctionComponent<Props> = (props) => {
  const {className, children, ...rest} = props;
  let hashAside = false;
  // 判断子元素中 是否有Aside
  React.Children.map(children, node=>{
    if('type' in node && node.type === Aside){
      hashAside = true;
    }
  });
  return (
      <div className={sc('', {extra: [className, hashAside && 'hasAside'].join(' ')})} {...rest}>
        {children}
      </div>);
};
export default Layout;
