import './App.css'
import { auth } from './config/firebase';
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useContext } from 'react';
import AuthContext from './contexts/AuthContext/AuthContext';
import { useState } from 'react';
import { useEffect } from 'react';

const provider = new GoogleAuthProvider();

function App() {
  const { user, setUser } = useContext(AuthContext);
  const [users, setUsers] = useState(null);
  const [update_id, setUpdateId] = useState(null);
  const [update_name, setUpdateName] = useState(null);

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log('google login result: ', result);
        const user = result.user;
        const userInfo = {
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          accessToken: user.accessToken,
        };
        setUser(userInfo);
      }).catch((error) => {
        const errorCode = error.code;
        console.log("Error code: ", errorCode);
      });
  }

  const handleLogout = () => {
    signOut(auth)
    .then(() => {
      console.log("Logged out successfully");
    })
    .catch((error) => {
      console.error(error);
    });
  }

  console.log('user1', user);
  
  useEffect(() => {
    if (!user?.accessToken) return;
    fetch(`http://localhost:3000/users?email=${user.email}`, {
      method: 'GET',
      headers: {
        'authorization': `Bearer ${user?.accessToken}`,
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        if(data.message === 'Unauthorized'){
          // handleLogout();
        }else{
          setUsers(data);
        }
      })
      .catch(error => console.error('Error fetching users:', error));
  }, [user?.accessToken]);

  const handleRegisterUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ name: name, email: email })
    })
      .then(response => response.json())
      .then(data => {
        if (data.insertedId) {
          const newUser = { _id: data.insertedId, name: name, email: email };
          setUsers(prevUsers => [...prevUsers, newUser]);
          alert('User registered successfully!');
          e.target.reset();
        }
      })
      .catch(error => console.error('Error fetching users:', error));
  }

  const handleGetUser = (user) => {
    fetch(`http://localhost:3000/users/${user._id}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data) {
          console.log('single user: ', data);
          setUpdateName(data.name);
          setUpdateId(data._id);
          document.getElementById('my_modal_1').showModal();
        }
      })
      .catch(error => console.error('Error fetching users:', error));
  }

  const handleRegisterUserUpdate = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/users/${update_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ name: update_name })
    })
      .then(response => response.json())
      .then(data => {
        console.log('update data: ', data);
        if (data.modifiedCount > 0) {
          setUsers(prevUsers => prevUsers.map(u => u._id === update_id ? { ...u, name: update_name } : u));
          alert('User updated successfully!');
          document.getElementById("my_modal_1").close();
        }
      })
      .catch(error => console.error('Error fetching users:', error));
  }

  const handleDeleteUser = async (userId) => {
    try {
      const response = await fetch(`http://localhost:3000/users/${userId}`, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json'
        }
      });
      const data = await response.json();
      if (data.deletedCount > 0) {
        setUsers(prevUsers => prevUsers.filter(u => u._id !== userId));
        alert('User deleted successfully!');
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  }

  // if(user === null){
  //   return <p>Loading...</p>;
  // }

  return (
    <>

      <div className="App">
        <h1>Register Now</h1>
        <div style={{ border: '1px solid black', padding: '20px', marginBottom: '20px' }}>
          <form onSubmit={(e) => handleRegisterUser(e)}>
            <input type="text" name="name" placeholder="Name" required /> <br />
            <input type="email" name="email" placeholder="Email" required /> <br />
            <button type="submit">Register</button>
          </form>
        </div>


        <button onClick={handleGoogleLogin}>Google Login </button>
        <button onClick={handleLogout}> Logout </button>
        {user ? (
          <div>
            <h2>Welcome, {user.displayName}</h2>
            <p>Email: {user.email}</p>
            <img src={user.photoURL} alt="Profile" />
          </div>
        ) : (
          <p>Please log in to continue.</p>
        )}
      </div>

      <div>
        <h2>Users List:</h2>
        <ul>
          <li>
              Name
              |
              Email
              |
              Edit
              |
              Delete
          </li>

          {users?.map(user => (
            <li key={user._id}>
              {user.name}
              |
              {user.email}
              |
              <button onClick={() => handleGetUser(user)}>Edit</button>
              |
              <button onClick={() => handleDeleteUser(user._id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>


      {/* edit modal  */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Edit User</h3>
          <form onSubmit={(e) => handleRegisterUserUpdate(e)}>
            <input type="hidden" name="user_id" id="user_id" placeholder="User ID" required value={update_id} /> <br />
            <input type="text" name="name" id="name_up" placeholder="Name" required value={update_name} onChange={(e) => setUpdateName(e.target.value)} /> <br />
            <button type="submit">Update</button>
          </form>

          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>

    </>
  )
}

export default App
