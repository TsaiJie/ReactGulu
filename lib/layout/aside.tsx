import React from 'react';
import {scopedClassMaker} from '../classes';
interface Props extends React.HTMLAttributes<HTMLElement>{}
const sc = scopedClassMaker('gulu-layout');
const Aside: React.FunctionComponent<Props> = (props) => {
  const {className, ...rest} = props;
  return (
    <>
      <div className={sc('aside',{extra:className})} {...rest}>aside</div>
    </>);
};
export default Aside;
