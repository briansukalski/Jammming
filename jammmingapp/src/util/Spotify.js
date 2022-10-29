let userToken;

export const Spotify = {
    getAccessToken() {
        if (userToken) {
            return userToken;
        }
    }

};