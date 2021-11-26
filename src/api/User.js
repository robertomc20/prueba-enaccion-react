import Swal from "sweetalert2";

// Registrar usuario
export const registerUser = async (formRegister) => {
    const url = "http://localhost:4000/api/user";
    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(formRegister),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });
    const data = await response.json();
    if (data.ok) {
        Swal.fire("Registro creado", "Usuario registrado", "success")
        return data;
    } else {
        Swal.fire("Error", "Por favor, complete todo el formulario", "error")
    }
    // console.log(data);
};

// Obtener usuarios
export const getUsers = async () => {
    const url = "http://localhost:4000/api/user";
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });
    const data = await response.json();

    return data.userCache;
};
