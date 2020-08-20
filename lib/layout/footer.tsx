import React from 'react';
import {scopedClassMaker} from '../classes';
interface Props extends React.HTMLAttributes<HTMLElement>{}
const sc = scopedClassMaker('gulu-layout');
const Footer: React.FunctionComponent<Props> = (props) => {
  const {className, ...rest} = props;
  return (
    <>
      <div className={sc('footer',{extra: className})} {...rest}>footer</div>
    </>);
};
export default Footer;
