import React from 'react';
import './Login.css'

const Login = props => {
    // const [username, setUsername] = useState('test');
    // const [password, setPassword] = useState('');

    const submitLogin = event => {
        event.preventDefault();
        if (event.target[0].value.length > 1 && event.target[1].value.length > 1) {
            props.setAuthentication(event.target[0].value);
        }
    }

    return (
        <div className="login-page">
            <div className="login-wrapper">
                <h2>Log in to see your posts!</h2>
                <form className="login-form" onSubmit={event => submitLogin(event)}>
                    <label>Username:
                        <input
                            name="username"
                            placeholder="username"
                            required
                            type="text"
                        />
                    </label>
                    <label>Password
                        <input
                            name="password"
                            type="password"
                            required
                        />
                    </label>
                    <input
                        type="submit"
                        value="Submit"
                    />
                </form>
            </div>
        </div>
    );
};

export default Login;