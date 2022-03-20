import gql from "graphql-tag";
import React, {useState} from "react";
import { Query } from "react-apollo";
import {useNavigate, Link} from 'react-router-dom'

const FETCH_POSTS = gql`
  query FetchPosts {
    posts {
      id
      title
    }
  }
`;

const PostIndex = () => {
  const navigate = useNavigate()
  const [post, setPost] = useState(null)

  return (
     <>
     <Query query={FETCH_POSTS}>
       {({ loading, error, data }) => {
         console.log(data);
         return (
           <div>
             <h1>Post Index</h1>
             <ul>
                 {!loading && data.posts.map((post) => (
                     <li key={post.id} onClick={() => navigate(`/posts/${post.id}`)}>
                         <p>title:{post.title}</p>
                     </li>
                 ))}
             </ul>
           </div>
         );
       }}
     </Query>
     <Link to="/">Home</Link>
     </>
   );
}

  export default PostIndex;