 import React from 'react'
 import ReactDOM from 'react-dom'
 import myProfilePic from './teboho.jpeg'
 import myIGshot from './ig-shot.png'
 

//  UserProfile card component 
function UserProfileCard() {
    return (
        <div className="user-profile-card">
            <img className="profileimage" src= {myProfilePic} alt="MyProfile" />
            <h2>Teboho Nthako</h2>
            <h4>Digital Creator</h4>
            <p> Front-end Developer | React enthusiast | Romans 8:28</p>
            <a>TebooIG</a>
            <button>10k Followers</button>
            <button>389 Following </button>
            <img className="screenshot"src = {myIGshot} alt="screenshot of my instagram posts"/>
        </div>
    );
}

export default UserProfileCard;
ReactDOM.render(UserProfileCard, document.getElementById('root'))