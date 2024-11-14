import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import Tweet from "./Tweet";
import styled from "styled-components";

export interface ITweet {
  id: string;
  photo?: string;
  tweet: string;
  userId: string;
  username: string;
  createAt: number;
}
const Wrapper = styled.div``;

export default function Timeline() {
  const [tweet, setTweet] = useState<ITweet[]>([]);
  const fetchTweets = async () => {
    const queryTweets = query(
      collection(db, "tweet"),
      orderBy("createAt", "desc")
    );
    const snapshot = await getDocs(queryTweets);
    const tweets = snapshot.docs.map((doc) => {
      const { tweet, createdAt, userId, username, photo } = doc.data();
      return {
        tweet,
        createdAt,
        userId,
        username,
        photo,
        id: doc.id,
      };
    });
    setTweet(tweets);
  };
  useEffect(() => {
    fetchTweets();
  }, []);
  return (
    <Wrapper>
      {tweet.map((tw) => (
        <Tweet key={tw.id} {...tw} />
      ))}
    </Wrapper>
  );
}
