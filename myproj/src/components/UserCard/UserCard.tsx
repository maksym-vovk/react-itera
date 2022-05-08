import React from "react";
import "./style.css";
import UserContacts from "../UserContacts/UserContacts";

interface Contacts {
    phoneNumber: string | number,
    email: string
}

type userInfoProps = {
    name: string,
    biography: string,
    contacts: Contacts
}

const UserCard: React.FC<userInfoProps> = ({name, biography, contacts }) => (
    <div className="user">
        <h2 className="user__name">{name}</h2>
        <p className="user__bio">{biography}</p>
        <UserContacts contacts={contacts}/>
        <span className="user__intro">Hover me</span>
    </div>
)

export default UserCard;