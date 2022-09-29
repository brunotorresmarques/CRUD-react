import axios from "axios";

export function Listar(token: any){
    return axios({
        method:"GET",
        url:"https://test-flimed-backend.herokuapp.com/users/show",
        headers: {
            'Authorization': `Bearer ${token}` 
        }
    })
}