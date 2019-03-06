import React, { useState } from 'react';

// const authenticate = App => LoginPage =>
//   class extends React.Component {
//     thing = 'thing';
//     render() {
//         if (this.state.loggedIn) {
//             return <App />;
//         }
//         return <LoginPage />;
//     }
// };

const authenticate = App => LoginPage => () => {
    const checkAuth = () => {
        // returns `true` or `false`, depending on if local storage has a username saved
        const username = localStorage.getItem('username') || false;
        console.log('checkAuth running!  username:', username, Boolean(username));
        return Boolean(username);
    }

    const [authenticated, setAuthenticated] = useState(checkAuth);

    const setAuth = username => {
        localStorage.setItem('username', username);
        console.log('setAuth – localStorage:', localStorage.getItem('username'));
        setAuthenticated(checkAuth);
    }

    const revokeAuth = () => {
        console.log('revokeAuth() running!');
        if (authenticated) {
            localStorage.removeItem('username');
            setAuthenticated(checkAuth);
        }
        console.log(`Cannot revoke authentication. Authenticated: ${authenticated}`);
    }

    if (authenticated) {
        return <App revokeAuthentication={revokeAuth} />;
    } else {
        return <LoginPage revokeAuthentication={revokeAuth} setAuthentication={setAuth}/>;
    }
}

export default authenticate;