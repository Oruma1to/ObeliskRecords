# ObeliskRecords
<p align="center">
  <img src="/src/images/giphy.gif" width="80%"/>
</p>
# PROJECT 2 README <!-- omit in toc -->


- [Project Planning](#Project-Planning)
  - [Overview](#Overview)
  - [Wireframes](#Wireframes)
  - [MVP](#MVP)
    - [Goals](#Goals)
    - [Libraries](#Libraries)
    - [Data](#Data)
    - [Component Hierarchy](#Component-Hierarchy)
    - [Component Breakdown](#Component-Breakdown)
    - [Component Estimates](#Component-Estimates)
    - [Helper Functions](#Helper-Functions)
  - [Post-MVP](#Post-MVP)
- [Project Delivery](#Project-Delivery)
  - [Code Showcase](#Code-Showcase)
  - [Code Issues & Resolutions](#Code-Issues--Resolutions)


### Overview

**Obelisk Records** 
The point of this project was to see what kind of logic goes into a cart system in a store. Obelisk records is a simple record store as to where each individual user has their own cart. Each user can only access their own cart once they are logged in and authorized to do so.
<br>


<br>

### MVP

**Obelisk Records** The web app will give users the ability to search for music by artist or album. Users will then be able to click on the album for more detail, once on the album page, they can view the tracks of the album and add it to their cart. If the user is signed in they should be able to view the cart since the last time they were logged in (cart retains state). If the user is an admin they have full CRUD functionality for albums. 

If you would like to test out ADMIN capabilities please contact me.

<br>

#### Goals

* Searchbar on homepage for easier access to specific albums or artist
* All albums will be showcased in a grid format on the homepage
* Mock Track listings for each album
* Uniform Styling for every page
* Cart history is based on authenticated user
* Incorporate Redux for state management
* Full CRUD for admin, limited for user on album.
* Custom Built API

<br>

#### Libraries


|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|   React Router   | _Used to make the page dynamically render all components_ |
|   React Redux   | _Introduces Global State management for all components._ |
| React Link | _Used to link all pages via onclick actions_ |
|   React Switch   | _Switch is what enables my routes to render_ |

<br>

#### Data


|    API     | Quality Docs? | Website       | Sample Query                            |
| :--------: | :-----------: | :------------ | :-------------------------------------- |
| Custom Built |      yes      | _PORT:3000_ | _/api/albums/:id |

<br>

#### Component Tree

```
src
|__ App.js
|__ actions
    |__index.js
|__ components/
      |__ albums
          |__CRUD
              |__CreateAlbum.jsx
              |__EditAlbum.jsx
          |__Album.jsx
          |__Albums.jsx
          |__Search.jsx
      |__ Shared
          |__Header.jsx
          |__Home.jsx
      |__ ShoppingCart
          |__AddItem.jsx
          |__ShoppingCart.jsx
      |__ users
          |__EditMyProfile.jsx
          |__MyProfile.jsx
          |__SignIn.jsx
          |__SignUp.jsx
|__ reducers
    |__services
        |__apiAlbum.js
        |__apiCart.js
        |__apiConfig.js
        |__apiUser.js
    |__ forceUpdate.js
    |__ index.js
    |__ isLogged.js
    |__ shoppingCart.js
```

<br>

#### Component Breakdown

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will contain the title as a nav back home._          |
|     App      | functional |   y   |   n   | _The App will house the overall structure and the axios call._   |
|   HomePage   | functional |   n   |   y   | _Will house the Search bar, list of albums._     |
|     Album     | functional |   y   |   y   | _This page will contain all of the album info pulled from api along with CRUD buttons for Admins_   |
|   MyProfile    | functional |   n   |   y   | _Page where the user can view their shipping info and update it as well._|
|     ShoppingCart     | functional |   n   |   y   | _User has ability to update their current shopping cart by adding or subtracting.._ |
<br>

#### Component Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Create Header/footer |    L     |     1 hr      |          |    <1 hr    |
| Setup global state |    H     |     3 hrs      |          |     3hrs     |
| Backend Logic for Auth/Cart |    H     |     20 hrs      |          |     12hrs     |
|   Create API Data Structure   |    H     |     1 hr      |          |     1hr     |
| Styling |    H     |     10 hrs      |      L    |     6hrs     |
| Admin Functionality   |    H     |     6 hrs      |          |    4hrs     |
| TOTAL               |          |    41 hrs      |          |     27hrs     |

<br>


<br>

### Post-MVP
** Add safeguards for deleting albums or removing from cart
** Mock Checkout Page
** Flowing page transitions
<br>

***



