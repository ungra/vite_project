import styled from "styled-components";
import PostTweetForm from "../components/Post-tweet-form";
import Timeline from "../components/Timeline";

const Wrapper = styled.div``;

export default function Home() {
  return (
    <Wrapper>
      <PostTweetForm />
      <Timeline />
    </Wrapper>
  );
}
