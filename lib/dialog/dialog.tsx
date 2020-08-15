import React, {Fragment} from "react";
import './dialog.scss'
import {Icon} from "../index";
interface Props {
  visible: boolean;
}

const Dialog: React.FunctionComponent<Props> = (props) => {
  const {visible, children} = props
  // 必须返回一个null或者组件children有可能是组件也可能不是组件
  return (
    visible ? <Fragment>
      <div className="gulu-dialog-mask">
      </div>
      <div className="gulu-dialog">
        <div className="gulu-dialog-close">
          <Icon name={'close'}/>
        </div>
        <header className="gulu-dialog-header">提示</header>
        <main className="gulu-dialog-main">{children}</main>
        <footer className="gulu-dialog-footer">
          <button>OK</button>
          <button>Cancel</button>
        </footer>
        
      </div>
    </Fragment> : null
  )
}
export default Dialog
