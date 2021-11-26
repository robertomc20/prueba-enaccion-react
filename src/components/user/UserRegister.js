import React, { useEffect, useState } from "react";
import { getUsers, registerUser } from "../../api/User";
import { useForm } from "../../hooks/useForm";
import { UserList } from "./UserList";

export const UserRegister = () => {
    const [formRegister, setFormRegister] = useForm({
        name: "",
        age: "",
        date_birth: ""
    });

    const { name, age, date_birth } = formRegister;

    const [users, setUsers] = useState([]);
    const [refresh, setRefresh] = useState(false);

    const register = (e) => {
        e.preventDefault();
        registerUser(formRegister);
        setRefresh((prevState) => !prevState);
    };

    // Se obtiene la data
    useEffect(() => {
        const getData = async () => {
            const userData = await getUsers();
            setUsers(userData);
        };

        getData();
    }, [refresh]);

    return (
        <div>
            <h1>Formulario registro de usuario</h1>
            <form onSubmit={register}>
                <label>Nombre: </label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={setFormRegister}
                />
                <br />
                <br />

                <label>Edad: </label>
                <input
                    type="text"
                    name="age"
                    value={age}
                    onChange={setFormRegister}
                />
                <br />
                <br />

                <label>Fecha de nacimiento: </label>
                <input
                    type="date"
                    name="date_birth"
                    value={date_birth}
                    onChange={setFormRegister}
                />
                <br />
                <br />

                <input type="submit" value="Registrar" />
                <br />
            </form>

            {users &&
                users.map((user, index) => <UserList key={index} {...user} />)}
            {!users && (
                <div>
                    <hr />
                    <h3>No existen usuarios registrados</h3>
                </div>
            )}
        </div>
    );
};
