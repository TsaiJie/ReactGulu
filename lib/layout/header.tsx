import React from 'react';
import {scopedClassMaker} from '../classes';
const sc = scopedClassMaker('gulu-layout');
const Header: React.FunctionComponent = (props) => {
  return (
    <>
      <div className={sc('header')}>header</div>
    </>);
};
export default Header;
