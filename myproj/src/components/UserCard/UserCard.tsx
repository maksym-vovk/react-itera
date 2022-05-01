import React from "react";
import "./style.css";

type userInfoProps = {
    name: string,
    biography: string,
    contacts: {
        phoneNumber: string,
        email: string
    }
}

const UserCard: React.FC<userInfoProps> = ({name, biography, contacts }) => (
    <div className={"user"}>
        <h2 className="user__name">{name}</h2>
        <p className="user__bio">{biography}</p>
        <div className="user-contacts">
            <h3 className={"user-contacts__title"}>Contacts:</h3>
            <span className="user-contacts__data">Phone: {contacts.phoneNumber}</span>
            <span className="user-contacts__data">E-mail: {contacts.email}</span>
        </div>
        <span className="user__intro">Hover me</span>
    </div>
)

export default UserCard;