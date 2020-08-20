import React from 'react';
import Layout from './layout';
import Content from './content';
import Footer from './footer';
import Header from './header';

const LayoutExample: React.FunctionComponent = (props) => {
  return (
    <>
      <div>
        <h1>第一个例子</h1>
        <Layout style={{height: '500px'}} className={'1'} >
          <Header>header</Header>
          <Content>content</Content>
          <Footer>footer</Footer>
        </Layout>
      </div>
    </>);
};
export default LayoutExample;
