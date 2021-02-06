import axios from "axios";

function usersList() {
  return axios.get("https://randomuser.me/api/?results=25&nat=AU,BR,CA,CH,DE,DK,ES,FI,FR,GB,IE,NO,NL,NZ,TR,US");
}

export default {
  usersList
};
