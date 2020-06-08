import React from 'react';
import './App.css';

import Layout from './Layout/Layout';
import Login from './Security/Login';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

  




function App() {
  var isLogin = true;
  return (
    isLogin ?
    <div className="App">
      <Layout/>
    </div>
     :
     <div className="App login">
        <img src="./boy.png" alt="t1" className="boy"></img>
         <Login/>
       <img src="./boy2.png" alt="t1" className="boy2"></img>
     </div>
     
  );
}

export default App;




// import React, { Component } from 'react';
// import ReactTable from 'react-table-v6';
// import 'react-table-v6/react-table.css';

// class App extends Component {
  
//   render() {
//     const data = [{
//       name: 'Roy Agasthyan',
//       age: 26
//     },{
//       name: 'Sam Thomason',
//       age: 22
//     },{
//       name: 'Michael Jackson',
//       age: 36
//     },{
//       name: 'Samuel Roy',
//       age: 56
//     },{
//       name: 'Rima Soy',
//       age: 28
//     },{
//       name: 'Suzi Eliamma',
//       age: 28
//     }]

//     const columns = [{
//       Header: 'Name',
//       accessor: 'name'
//     },{
//       Header: 'Age',
//       accessor: 'age'
//     },{
//       Header: 'Age',
//       accessor: 'age'
//     },{
//       Header: 'Age',
//       accessor: 'age'
//     }]

//     return (
//           <div>
//               <ReactTable
//                 data={data}
//                 columns={columns}
//                 defaultPageSize = {3}
//                 pageSizeOptions = {[3, 6]}
//               />
//           </div>      
//     )

//   }
// }

// export default App;
