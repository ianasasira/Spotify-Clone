//This is not a component

//so it first directs us to the login with spotify
export const authEndpoint  = "https://accounts.spotify.com/authorize";

//After that it then redirects us to our home page
const redirectUri = "http://localhost:3000/";


const clientId = "ae22bd10c36a4a14b7022bc6111fd293";

//
//  the scopes you need in the app
const SCOPES = [
  'user-read-private',
  'user-read-email',
  'user-library-read',
  'user-library-modify',
  'playlist-read-private',
  'playlist-modify-public',
  'playlist-modify-private',
  'user-read-playback-state',
  'user-read-recently-played',
  'user-modify-playback-state',
  'user-read-currently-playing',
  'user-follow-read',
  'user-follow-modify'

]
// so now we are making one big url
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri} `