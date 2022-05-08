import React, {PureComponent} from "react";

import Contact from "../Contact/Contact";

interface Contacts {
    phoneNumber: string | number,
    email: string
}

type UserContactsProps = {
    contacts: Contacts
}

class UserContacts extends PureComponent<UserContactsProps> {
    render() {
        const {phoneNumber, email} = this.props.contacts
        return (<div className="user-contacts">
                <h3 className="user-contacts__title">Contacts:</h3>
                <Contact
                    contactName="Phone"
                    contactValue={phoneNumber}
                />
                <Contact
                    contactName="E-mail"
                    contactValue={email}
                />
            </div>
        )
    }
}

export default UserContacts