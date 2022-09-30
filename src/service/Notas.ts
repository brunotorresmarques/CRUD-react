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

export function Cria(token: any, nota: any){
    return(
        axios({
            method: "POST",
            url: "https://test-flimed-backend.herokuapp.com/notes/create",
            headers: {
                'Authorization': `Bearer ${token}` 
            },
            data:nota
        })
    );
}

export function Get(token: any, id: any){
    return axios({
        method:"GET",
        url:`https://test-flimed-backend.herokuapp.com/notes/show/${id}`,
        headers: {
            'Authorization': `Bearer ${token}` 
        }
    })
}

export function AtualizaNota(token: any, id: any, nota: any){
    return axios({
        method:"PUT",
        url:`https://test-flimed-backend.herokuapp.com/notes/update/${id}`,
        headers: {
            'Authorization': `Bearer ${token}` 
        },
        data:nota
    })
}

export function DeleteNotas(token: any, id: any){
    return(
        axios({
            method: "DELETE",
            url: `https://test-flimed-backend.herokuapp.com/notes/delete/${id}`,
            headers: {
                'Authorization': `Bearer ${token}` 
            }
        })
    );
}

export function GetNota(token: any, id: any){
    return axios({
        method:"GET",
        url:`https://test-flimed-backend.herokuapp.com/notes/show/${id}`,
        headers: {
            'Authorization': `Bearer ${token}` 
        }
    })
}