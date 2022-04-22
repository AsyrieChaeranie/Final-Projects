# Dokumentation

## Musicophile
The name of this application is Musicophile which means One who likes songs from his generation, the generation above it, and the generation after it. He is not picky just likes songs from his generation. This fits Gigi very well because Gigih is a young boy who loves music. Almost every day he listens to music on Spotify of various genres.

## Features 
, , , , , .

**In this application there are several features:**

- [x] Login - You can't continue creating playlists if you're not logged in
- [x] Add playlist name - minimum 10 characters
- [x] Create Playlist Description - minimum 10 characters
- [x] Save playlist - This will be Private playlist
- [x] Search for songs - You can only select a song once in 1 playlist
- [x] Select and delete songs - you can delete it before the playlist is created


## Technical Requirements
- [x] Hooks : I use hooks on files
* ..\components\co_NavBar.js
* ..\pages\CreatePlaylist_pages.js
* (already commented)

- [x] Flex & Grid : I use this on file
* .\App.css
* ..\components\co_NavBar.js
* (already commented)

- [x] Typescript
* I have made but there is a problem
* can be checked at the following link https://github.com/AsyrieChaeranie/Final-Project

- [x] Redux : I use this on file
* ..\Data\store.js

- [x] Eslint : I enabled this on all files

- [x] Testing :
* * I have made but there is a problem
* can be checked at the following link https://github.com/AsyrieChaeranie/Final-Project

- [x] Documentation : I use this on file
* .\README.md or this file

## Installation

In the project directory, you can run:

note: 
make sure you create a .env.local to change the `REACT_APP_CLIENT_ID` to get your ClientID from spotify API

## `npm install`

it is recommended to start `npm install` for installing all the package included in this project

## `npm start`

Runs the app in the development mode.
Open http://localhost:3000/ to view it in your browser.

## In Online
* u can open this link vercel (https://vercel.com/asyriechaeranie/tesss)
## In Local

`localhost:3000/` : 
The page will shows a login button and navbar Musicophile

`localhost:3000/create-playlist` :
- [x] if user already login (get an accessToken) 
* The page will show Navbar of Musicophile
* The page will show your pic profile and your account name
* The page will show Create Playlist Form contain add name playlist and create description playlist
* The page will show Search Song form

- [x] if user already search
* The page will open track a row of songs according to what you are looking for

- [x] if user haven't logged in => the page will redirect to `localhost:3000/`

`localhost:3000/some-random-url` : 
* The page will shows 404 Error Not Found 

note : 
- [x] This project was bootstrapped with [Create React App]
- [x] This project is unresponsive
- [x] This product is available in 1366x768 and 600px screen media