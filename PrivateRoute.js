import React from 'react';
import { Route, Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      fetch('http://localhost:6000/users')
        .then((response) => response.json())
        .then((users) => {
          const authenticatedUser = users.find(
            (user) => user.username === 'example' && user.password === 'password'
          );

          if (authenticatedUser) {
            return <Component {...props} />;
          } else {
            return (
              <Navigate to={{ pathname: '/login', state: { from: props.location } }} />
            );
          }
        })
        .catch((error) => {
          console.log('Error:', error);
          return (
            <Navigate to={{ pathname: '/login', state: { from: props.location } }} />
          );
        })
    }
  />
);
