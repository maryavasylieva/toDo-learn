import React, { lazy, Suspense } from 'react';
import Navigation from './Components/Navigation/Navigation';
import { Route, Redirect, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Layout, Breadcrumb } from 'antd';

const { Content, Footer } = Layout;

const AsyncHome = lazy(() => import('./Pages/Home'));
// // const AsyncAbout = lazy(() => import('./Pages/About'));
const AsyncList = lazy(() => import('./Pages/ListPages'));

function App() {
  return (
    <div className='App'>
      <Navigation></Navigation>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path='/' component={AsyncHome} />
          {/* <Route path='/about' component={AsyncAbout} /> */}
          <Route path='/list' component={AsyncList} />
          <Redirect to='/' />
        </Switch>
      </Suspense>
    </div>
  );
}

// const App = () => (
//   <Layout className='layout'>
//     <Navigation />
//     <Content style={{ padding: '0 50px' }}>
//       <Breadcrumb style={{ margin: '16px 0' }}>
//         <Breadcrumb.Item>Home</Breadcrumb.Item>
//         <Breadcrumb.Item>List</Breadcrumb.Item>
//         <Breadcrumb.Item>App</Breadcrumb.Item>
//       </Breadcrumb>
//       <Suspense fallback={<div>Loading...</div>}>
//         <Switch>
//           <Route exact path='/' component={AsyncHome} />
//           {/* <Route path='/about' component={AsyncAbout} /> */}
//           <Route path='/list' component={AsyncList} />
//           <Redirect to='/' />
//         </Switch>
//       </Suspense>
//     </Content>
//     <Footer style={{ textAlign: 'center' }}></Footer>
//   </Layout>
// );

export default App;
