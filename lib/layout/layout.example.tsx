import React from 'react';
import Layout from './layout';
import Content from './content';
import Footer from './footer';
import Header from './header';
import Aside from './aside';

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
      <div>
        <h1>第二个例子</h1>
        <Layout style={{height: '500px'}} className={'1'} >
          <Header>header</Header>
          <Layout>
            <Aside>aside</Aside>
            <Content>content</Content>
          </Layout>
          <Footer>footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>第三个例子</h1>
        <Layout style={{height: '500px'}} className={'1'} >
          <Header>header</Header>
          <Layout>
            <Content>content</Content>
            <Aside>aside</Aside>
          </Layout>
          <Footer>footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>第四个例子</h1>
        <Layout style={{height: '500px'}} className={'1'} >
          <Aside>aside</Aside>
          <Layout>
            <Header>header</Header>
            <Content>content</Content>
            <Footer>footer</Footer>
          </Layout>
        </Layout>
      </div>
    </>);
};
export default LayoutExample;
