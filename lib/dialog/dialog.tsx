import React, {Fragment, ReactElement, ReactNode} from 'react';
import './dialog.scss';
import {Icon} from '../index';
import {scopedClassMaker} from '../classes';
import ReactDOM from 'react-dom';

interface Props {
  visible: boolean;
  buttons?: ReactElement[];
  onClose: React.MouseEventHandler;
  clickMaskClose?: boolean;
}

const scopedClass = scopedClassMaker('gulu-dialog');
const sc = scopedClass;
const Dialog: React.FunctionComponent<Props> = (props) => {
  
  const {visible, children, buttons, onClose, clickMaskClose} = props;
  const onClickClose: React.MouseEventHandler = (e) => {
    onClose(e);
  };
  const onClickMaskClose: React.MouseEventHandler = (e) => {
    clickMaskClose && onClose(e);
  };
  const dialog =
    visible ? <Fragment>
      <div className={sc('mask')} onClick={onClickMaskClose}>
      </div>
      <div className={sc()}>
        <div className={sc('close')} onClick={onClickClose}>
          <Icon name={'close'}/>
        </div>
        <header className={sc('header')}>提示</header>
        <main className={sc('main')}>{children}</main>
        {buttons && buttons.length > 0 &&
        <footer className={sc('footer')}>
          {
            buttons && buttons.map((button, index) =>
              // 会损耗一些性能，渲染就会进行复制， 可以使用memo解决
              React.cloneElement(button, {key: index})
            )
          }
        </footer>}
      </div>
    </Fragment> : null;
  
  // 必须返回一个null或者组件children有可能是组件也可能不是组件
  return (
    ReactDOM.createPortal(dialog, document.body)
  );
};
Dialog.defaultProps = {
  clickMaskClose: false
  
};
const modal = (content: ReactNode, buttons?: ReactElement[], afterClose?: () => void) => {
  const onClose = () => {
    // 把 component 复制一份儿 visible变为false，重新新渲染
    ReactDOM.render(React.cloneElement(component, {visible: false}), div);
    // 把div从reactDom卸载
    ReactDOM.unmountComponentAtNode(div);
    // 删除div
    div.remove();
    
  };
  const component =
    <Dialog
      visible={true}
      buttons={buttons}
      onClose={() => {
        onClose();
        afterClose && afterClose();
      }}>
      {content}
    </Dialog>;
  const div = document.createElement('div');
  document.body.append(div);
  ReactDOM.render(component, div);
  return onClose;
};

const alert = (content: string) => {
  const button = <button onClick={() => close()}>Ok</button>;
  const close = modal(content, [button]);
};

const confirm = (content: string, yes?: () => void, no?: () => void) => {
  
  const onYes = () => {
    close();
    yes && yes();
  };
  const onNo = () => {
    close();
    no && no();
  };
  const buttons = [
    <button onClick={onYes}>yes</button>,
    <button onClick={onNo}>no</button>
  ];
  const close = modal(content, buttons, no);
  
};
// ReactNode 可以是标签可以是字符串 包括ReactFragment ReactElement
// ReactElement 只能是字符串
// ReactFragment 是多个 ReactNode

export {alert, confirm, modal};

export default Dialog;
