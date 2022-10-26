import {Component} from 'react';

let userToken;

export class Spotify extends Component {


    getAccessToken() {
        if (userToken) {
            return userToken;
        }
        return 'What is password?';
    }

}