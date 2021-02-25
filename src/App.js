import React from 'react';
import Counter from './components/Counter';

class App extends React.Component {
  // state = {
  //   value: 0
  // }

  render() {
    return (
    <div>

      <h1> Hello React!</h1>      
        {/* <UserList user={user} /> */}
       <Counter /> 


    </div>
  );
   }
};

export default App;
