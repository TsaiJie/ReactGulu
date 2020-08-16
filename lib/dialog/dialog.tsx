import React, {Fragment, ReactElement} from "react";
import './dialog.scss'
import {Icon} from "../index";
import {scopedClassMaker} from "../classes";
import ReactDOM from 'react-dom';

interface Props {
  visible: boolean;
  buttons: Array<ReactElement>;
  onClose: React.MouseEventHandler;
  clickMaskClose?: boolean
}

const scopedClass = scopedClassMaker('gulu-dialog')
const sc = scopedClass
const Dialog: React.FunctionComponent<Props> = (props) => {
  
  const {visible, children, buttons, onClose, clickMaskClose} = props
  const onClickClose: React.MouseEventHandler = (e) => {
    onClose(e)
  }
  const onClickMaskClose: React.MouseEventHandler = (e) => {
    clickMaskClose && onClose(e)
  }
  const dialog =
    visible ? <Fragment>
      <div className={sc("mask")} onClick={onClickMaskClose}>
      </div>
      <div className={sc()}>
        <div className={sc('close')} onClick={onClickClose}>
          <Icon name={'close'}/>
        </div>
        <header className={sc('header')}>提示</header>
        <main className={sc('main')}>{children}</main>
        <footer className={sc('footer')}>
          {
            buttons.map((button, index) =>
              // 会损耗一些性能，渲染就会进行复制， 可以使用memo解决
              React.cloneElement(button, {key: index})
            )
          }
        </footer>
      
      </div>
    </Fragment> : null
  
  // 必须返回一个null或者组件children有可能是组件也可能不是组件
  return (
    ReactDOM.createPortal(dialog, document.body)
  )
}
Dialog.defaultProps = {
  clickMaskClose: false
}
export default Dialog
