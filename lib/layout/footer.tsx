import React from 'react';
import {scopedClassMaker} from '../classes';
const sc = scopedClassMaker('gulu-layout');
const Footer: React.FunctionComponent = (props) => {
  return (
    <>
      <div className={sc('footer')}>footer</div>
    </>);
};
export default Footer;
