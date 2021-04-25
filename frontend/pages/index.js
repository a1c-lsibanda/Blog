import Head from 'next/head'
import { gql } from "@apollo/client";
import client from "../apollo-client";

function HomePage({ posts }) {
  console.log('posts', posts);
  return <div>Welcome to Next.js! Docker!</div>
}

export async function getServerSideProps() {
    const { data } = await client.query({
      query: gql`
        query User {
           users {
             name
             email
           }
        }
      `,
    });

   console.log('data', data.users);
    return {
      props: {
        posts: data.users
      },
    };
}

export default HomePage
