import gql from "graphql-tag";
import { Query } from "react-apollo";
import React from "react";
import { useParams, Link } from "react-router-dom";

const FETCH_POST = gql`
  query FetchPost($id: ID!) {
    post(id: $id) {
      id
      title
      body
      author {
          name
      }
    }
  }
`;

const PostDetail = props => {
    const params = useParams();
    return (
        <>
        <Query query={FETCH_POST} variables={{ id: params.postId }}>
            {({ loading, error, data }) => {
            console.log(data);
            return (
            <div>
                <h1>Post Detail</h1>
                <ul>
                    {!loading &&
                        <li key={data.post.id}>
                            <p>title:{data.post.title}</p>
                            <p>body:{data.post.body}</p>
                            <p>written by:{data.post.author.name}</p>
                        </li>
                    }
                </ul>
            </div>
            );
        }}
        </Query>
       <Link to="/posts">All Posts</Link>
        </>
    )
};

export default PostDetail;