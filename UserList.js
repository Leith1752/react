import logo from './logo.svg';
import './App.css';


function UserList({data}) {
  console.log("insde", data)
  return (
    <div className="UserList">
      <ul>
        { data && data.map(item=>(
          <li key = {item.id}>
            <p>Name: {item.name}</p>
            <p>Email: {item.email}</p>
            <p>Phone: {item.phone}</p>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default UserList;