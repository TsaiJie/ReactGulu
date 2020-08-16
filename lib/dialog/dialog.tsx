import React, {Fragment, ReactElement} from "react";
import './dialog.scss'
import {Icon} from "../index";
import {scopedClassMaker} from "../classes";
import ReactDOM from 'react-dom';

interface Props {
  visible: boolean;
  buttons?: Array<ReactElement>;
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
            buttons && buttons.map((button, index) =>
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
const alert = (content: string) => {
  const component = <Dialog visible={true} onClose={() => {
    // 把 component 复制一份儿 visible变为false，重新新渲染
    ReactDOM.render(React.cloneElement(component, {visible: false}), div)
    // 把div从reactDom卸载
    ReactDOM.unmountComponentAtNode(div)
    // 删除div
    div.remove()
  }}> {content}</Dialog>
  const div = document.createElement('div')
  document.body.append(div)
  ReactDOM.render(component, div)
}

const confirm = (content: string, yes?: () => void, no?: () => void) => {
  const onYes = () => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div)
    ReactDOM.unmountComponentAtNode(div)
    div.remove()
    yes && yes()
    
  }
  const onNo = () => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div)
    ReactDOM.unmountComponentAtNode(div)
    div.remove()
    no && no()
  }
  const component = (
    <Dialog visible={true}
            onClose={onNo}
            buttons={[
              <button onClick={onYes}>yes</button>,
              <button onClick={onNo}>no</button>
            ]}>
      {content}
    </Dialog>)
  const div = document.createElement('div')
  document.body.append(div)
  ReactDOM.render(component, div)
  
}
export {alert, confirm}

export default Dialog
