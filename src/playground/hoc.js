// Higher Order Component (HOC) - A component (HOC) that renders another component
// Reuse code
// Render Hijacking
// Prop manipulation
// Abstract State
import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrapComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info, please don't share</p>}
            <WrapComponent {...props} />
        </div>
    );
};

// requireAuthentication
const requireAuthentication = (WrapComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <p>Thanks for logging in</p>
            ) : (
                <p>Please log in</p>
            )}
            <WrapComponent {...props} />
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);
// ReactDOM.render(
//     <AdminInfo isAdmin={false} info="There are the details" />,
//     document.getElementById('app')
// );
ReactDOM.render(
    <AuthInfo isAuthenticated={true} info="There are the details" />,
    document.getElementById('app')
);
