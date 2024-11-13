import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 420px;
  padding: 50px 0px;
`;
const Title = styled.h1`
  font-size: 42px;
`;
const Form = styled.form`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;
const Input = styled.input`
  padding: 10px 20px;
  border-radius: 50px;
  border: none;
  width: 100%;
  font-size: 16px;
  &[type="submit"] {
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
`;
const Error = styled.span`
  font-weight: 600;
  color: tomato;
`;

export default function CreateAccout() {
  const [isLoading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      //create an account
      //set the name of the user.
      //redirect to the home page.
      setLoading(true);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential.user);
      await updateProfile(userCredential.user, {
        displayName: name,
      });
      navigate("/");
    } catch (e) {
      //setError
    } finally {
      setLoading(false);
    }
  };
  return (
    <Wrapper>
      <Title> Create a 𝕏 account </Title>
      <Form onSubmit={onSubmit}>
        <Input
          name="name"
          onChange={onChange}
          value={name}
          placeholder="Name"
          type="text"
          required
        ></Input>
        <Input
          name="email"
          onChange={onChange}
          value={email}
          placeholder="Email"
          type="email"
          required
        ></Input>
        <Input
          name="password"
          onChange={onChange}
          value={password}
          placeholder="Password"
          type="password"
          required
        ></Input>
        <Input
          type="submit"
          value={isLoading ? "Loading..." : "Create Account"}
        ></Input>
      </Form>
      {error !== "" ? <Error>{error}</Error> : null}
    </Wrapper>
  );
}
