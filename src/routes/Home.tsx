import { auth } from "../firebase";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 420px;
  padding: 50px 0px;
`;

export default function Home() {
  const logOut = () => {
    auth.signOut();
  };
  return (
    <Wrapper>
      <h1>Home</h1>
      <button onClick={logOut}>Log out</button>
    </Wrapper>
  );
}
