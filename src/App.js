import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux/store';
import Root from './Components/Root/Root';

const App = () => (
  <Provider store={store}>
    <Root />
  </Provider>
);

export default App;


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

// export default App;
