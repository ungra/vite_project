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
  return (
    <Wrapper>
      <h1>Home</h1>
    </Wrapper>
  );
}
