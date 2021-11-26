import React from "react";
import moment from "moment";

export const UserList = (user) => {
    return (
        <div>
            <hr />
            <h3>Usuario: {user.name}</h3>
            <p>Edad: {user.age}</p>
            <p>Fecha de nacimiento: {moment(user.date_birth).format('DD-MM-YYYY')}</p>
            <hr />
        </div>
    );
};
