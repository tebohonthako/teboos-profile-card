import './App.css';
import ReactDOM from 'react-dom'
import React from 'react'
import UserProfileCard from './userProfileCard';

function App() {
  return (
    <div className="App">
      {/* Rendering my user Profile component  */}
      <UserProfileCard/>
    </div>
  );
}

ReactDOM.render(App, document.getElementById("root"))
ReactDOM.render(<UserProfileCard/>, document.getElementById("root"))

export default App;
