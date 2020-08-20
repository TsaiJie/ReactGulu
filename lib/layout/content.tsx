import React from 'react';
import {scopedClassMaker} from '../classes';
const sc = scopedClassMaker('gulu-layout');
const Content: React.FunctionComponent = (props) => {
  return (
    <>
      <div className={sc('content')}>content</div>
    </>);
};
export default Content;
