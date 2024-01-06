// import { reRes } from "./dom.js";
export {
  getDate,
  addUser,
  deleteUser,
  complUser,
  putUser,
  searchUser,
  selectUser,
};
import { get, reRes } from "./dom.js"

let api = "http://localhost:3000/date";


export async function getSlide(cnt) {
  try {
    const { data } = await axios.get(`${api}?id=${cnt}`);
    reRes(data)
  } catch (error) {
    console.log(error);
  }
}


async function getDate() {
    try {
        const { data } = await axios.get(api);
        get(data)
    } catch(error) {
        console.log(error);
    }
}
async function addUser(user) {
    try {
        const { data } = await axios.post(api,user)
        get(data);
    } catch(error) {
        console.log(error);
    }
}
async function deleteUser(id) {
  try {
    const { data } = await axios.delete(`${api}/${id}`);
    getDate();
  } catch (error) {
    console.log(error);
  }
}
async function complUser(id, user) {
  try {
    const { data } = await axios.put(`${api}/${id}`, user);
    getDate();
  } catch (error) {
    console.log(error);
  }
}
async function putUser(id, user) {
     try {
       const { data } = await axios.put(`${api}/${id}`, user);
       getDate();
     } catch (error) {
       console.log(error);
     }   
}
async function searchUser(val) {
  try {
    const { data } = await axios.get(`${api}?name=${val}`);
    get(data);
  } catch (error) {
    console.log(error);
  }
}
async function selectUser(val) {
  try {
    if (val == "All") {
      getDate();
    } else {
      const { data } = await axios.get(`${api}?completed=${val}`);
      get(data);
    }
  } catch (error) {
    console.log(error);
  }
}
