import React, {Fragment} from "react";
import './dialog.scss'
import {Icon} from "../index";
import {scopedClassMaker} from "../classes";
interface Props {
  visible: boolean;
}

const scopedClass = scopedClassMaker('gulu-dialog')
const sc = scopedClass
const Dialog: React.FunctionComponent<Props> = (props) => {
  const {visible, children} = props
  // 必须返回一个null或者组件children有可能是组件也可能不是组件
  return (
    visible ? <Fragment>
      <div className={sc("mask")}>
      </div>
      <div className={sc()}>
        <div className={sc('close')}>
          <Icon name={'close'}/>
        </div>
        <header className={sc('header')}>提示</header>
        <main className={sc('main')}>{children}</main>
        <footer className={sc('footer')}>
          <button>OK</button>
          <button>Cancel</button>
        </footer>
        
      </div>
    </Fragment> : null
  )
}
export default Dialog
