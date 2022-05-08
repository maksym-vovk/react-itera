import React, { PureComponent } from "react";

type ContactProps = {
    contactName: string,
    contactValue: string | number
}

class Contact extends PureComponent<ContactProps> {
    render() {
        return (
            <span className="user-contacts__data">{this.props.contactName} {this.props.contactValue}</span>
        )
    }
}

export default Contact