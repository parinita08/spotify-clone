// spotidy documentation
// https://developer.spotify.com/documentation/web-playback-sdk/quick-start///#


export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
const clientId = "9981edbecb084d9796a6d6c23e68df5f";

// Things that we will be allowed to do. Only read functios, nothin can be deleted. "Permissions"
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
    return window.location.hash //this goes to the hashtag in the url
        .substring(1) //chopping the string and getting the first bit of the string
        .split('&') //we dont need any extra parameters past the access token
        .reduce((initial, item) => {
            let parts = item.split('=');
            initial[parts[0]] = decodeURIComponent(parts[1]);
            return initial;
        }, {});
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;