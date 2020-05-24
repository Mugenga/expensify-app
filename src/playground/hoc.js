// HOC 

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>hey</h1>
        <p>{props.info}</p>
    </div>
);

const withAdminWarning = (Wrapped) => {
    return (props) => (
        <div> 
            {props.isAdmin && <p>This is private info</p>} 
            <Wrapped {...props}/>
        </div>
    );
}

const requireAuthentication = (Wrapped) => {
    return (props) => (
        <div>
        {props.isAuthenticated && <Wrapped />}
        </div>
    );
};

//const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);
ReactDOM.render(<AuthInfo isAuthenticated={true} info="my details"/>, document.getElementById('app'));