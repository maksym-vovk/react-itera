import React from 'react';
import './App.css';
import UserCard from "./components/UserCard/UserCard";

const App = () => {

    const userInfo = {
        name: "Max V",
        biography: "Frontend developer with experience in developing web sites. Attentive to details and stress resistant. My main goal is to develop my abilities to the highest possible level. I want to discover new technologies and work on non-standard projects. I am a team player and hope to become a part of a strong team.",
        contacts: {
            phoneNumber: "+380111111111",
            email: "mmm.vvv@gmail.com"
        }
    }

    return (
        <div className="App">
            <div className="container">
                <UserCard
                    name={userInfo.name}
                    biography={userInfo.biography}
                    contacts={userInfo.contacts}
                />
            </div>
        </div>
    );
}

export default App;