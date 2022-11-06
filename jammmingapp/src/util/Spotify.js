import {clientID} from './clientID'; /*Client ID imported from untracked file*/

let userToken;
const redirectURI = 'http://localhost:3000/';

export const Spotify = {
    getAccessToken() {
        if (userToken) {
            return userToken;
        }
        //Check for userToken
        let accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

        if  (accessTokenMatch && expiresInMatch) {
            userToken = accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch)[1];
            window.setTimeout(() => accessTokenMatch = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
            return userToken;
        }
        else {
            const accessURL = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
            window.location = accessURL;
        }
    },

    search(searchTerm) {
        const accessToken = Spotify.getAccessToken();
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${searchTerm}`, 
            {headers: {
                Authorization: `Bearer ${accessToken}`
            }}).then (response => {
                return response.json();
            }).then(jsonResponse  => {
                if (!jsonResponse.tracks) {
                    return [];
                }
                return jsonResponse.tracks.items.map(track => ({
                    id: track.id,
                    name: track.name,
                    artist: track.artists[0].name,
                    album: track.album.name,
                    uri: track.uri
                }));
            })
        ;
    },

    savePlaylist(playlistName, trackURIs) {
        if (!(playlistName && trackURIs)) {
            return;
        }
        const accessToken = Spotify.getAccessToken();
        const headers = {Authorization: `Bearer: ${accessToken}`};
        let userID;
        //Get user ID from Spotify API
        return fetch('https://api.spotify.com/v1/me', {headers: headers}
        ).then(response => response.json()
        ).then(jsonResponse => {
            userID = jsonResponse.id;
            //Post new playlist to user's profile with Spotify API
            return fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, 
                {
                    headers: headers,
                    method: 'POST',
                    body: JSON.stringify({name: playlistName})
                }
            ).then(response => response.json()
            ).then(jsonResponse => {
                const playlistID = jsonResponse.id;
                return fetch(`https://api.spotify.com/v1/playlists/${playlistID}/tracks`,
                    {
                        headers: headers,
                        method: 'POST',
                        body: JSON.stringify({uris: trackURIs})
                    }
                );
            });
        }
        
        )
    }

};