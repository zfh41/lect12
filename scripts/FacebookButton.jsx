import * as React from 'react';
import { Socket } from './Socket';
import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';
 
const responseFacebook = (response) => {
  console.log(response);
}

function handleSubmit(event) {
    // TODO replace with name from oauth
    let name = "John Doe";
    Socket.emit('new facebook user', {
        'name': name,
    });
    
    console.log('Sent the name ' + name + ' to server!');
}

export function FacebookButton() {
    return <FacebookLogin
        appId="1926442404164409"
        autoLoad={false}
        fields="name,email,picture"
        callback={handleSubmit()} />;
}
