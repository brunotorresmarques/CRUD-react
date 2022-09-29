import axios from "axios";

export function LoginUser(login_data: any){
    return(
        axios({
            method:"POST",
            url:"https://test-flimed-backend.herokuapp.com/users/auth",
            data: login_data,
        })
    );
}

export function CadastroUser(usuario: any){
    return(
        axios({
            method: "POST",
            url: "https://test-flimed-backend.herokuapp.com/users/create",
            data: usuario,
        })
    );
}
