import axios from "axios";
import jwt_decode from "jwt-decode";

export const createOrGetUser = async (response: any, addUser: any) => {
  const decoded: { name: string; picture: string; sub: string; email: string } =
    jwt_decode(response.credential);
  const { name, picture, sub, email } = decoded;

  // create user object
  const user = {
    id: sub,
    userName: name,
    image: picture,
    email: email,
  };
  addUser(user);

  await axios.post("http://localhost:3000/api/auth", user);
};
