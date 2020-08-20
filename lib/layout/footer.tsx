import React from 'react';
import {scopedClassMaker} from '../classes';
interface Props extends React.HTMLAttributes<HTMLElement>{}
const sc = scopedClassMaker('gulu-layout');
const Footer: React.FunctionComponent<Props> = (props) => {
  const {className, children,...rest} = props;
  return (
    <>
      <div className={sc('footer',{extra: className})} {...rest}>{children}</div>
    </>);
};
export default Footer;
