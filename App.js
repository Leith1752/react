
import './App.css';
import axios from 'axios'
import React, {useState, useEffect} from 'react';
import UserList from './UserList';

function App() {
  const [data, setData] = useState(null)
  useEffect(() => {


 axios.get("https://jsonplaceholder.typicode.com/users")

 .then(function(response) {
 setData(response.data)

})
.catch(function(error) {
  console.log(error);
});


  }, [])

  console.log(data)
  return (
    <div className="App">
    <UserList data={data}/>

    </div>
  );
}

export default App;
