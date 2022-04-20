import axios from "axios";

export const client = axios.create({
  baseURL: "http://localhost:4000",
});

export const getRecords = async () =>{
    const respons = await client.get("/users/me/records");
    return respons;
}

export const getRecordById = async (id) => {    
  const getRecByID = await client.get(`/users/me/records/${id}`);
  return getRecByID;
}



export const deleteRec = async (id) => {    
    const delRec = await client.delete(`/users/me/records/${id}`);
    return delRec;
}
