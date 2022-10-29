let userToken;
const clientID = ''/*Client ID goies here*/;
const redirectURI = 'http://localhost:3000/';

export const Spotify = {
    getAccessToken() {
        if (userToken) {
            return userToken;
        }
        //Check for userToken
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

        if  (accessTokenMatch && expiresInMatch) {
            usertoken = accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch)[1];
            window.setTimeout(() => accessTokenMatch = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
            return userToken;
        }
        else {
            const accessURL = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
        }
    }

};