import { useState } from 'react';
import './Forms.css';

const Forms = () => {
    const [users, setUsers] = useState([]);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;

        const user = { username, password };
        setUsers([...users, user]);
        e.target.reset();
    };

    return (
        <div style={{ margin: '20px' }}>
            <h2>Login Form</h2>

            <form className="login-form" onSubmit={(e) => handleFormSubmit(e)}>
                <div>
                    <label htmlFor="username">Username</label>
                    <br />
                    <input type="text" id="username" required />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <br />
                    <input type="password" id="password" required />
                </div>
                <button style={{ width: '100px', margin: '10px 0' }} type="submit">Login</button>
            </form>

            <h3>Registered Users:</h3>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {users.map((user, index) => (
                    <li key={index}>{user.username}</li>
                ))}
            </ul>
        </div>
    );
};

export default Forms;