import gql from "graphql-tag";
import { Query } from "react-apollo";
import React from "react";
import { useParams, Link } from "react-router-dom";

const FETCH_USER = gql`
  query FetchUser($id: ID!) {
    user(id: $id) {
      id
      name
      email
      posts {
          title
      }
    }
  }
`;

const UserDetail = props => {
    const params = useParams();
    return (
        <>
        <Query query={FETCH_USER} variables={{ id: params.userId }}>
            {({ loading, error, data }) => {
            if (data) console.log('posts', data.user.posts);
            return (
            <div>
                <h1>User Detail</h1>
                <ul>
                    {!loading &&
                        <li key={data.user.id}>
                            <p>name:{data.user.name}</p>
                            <p>email:{data.user.email}</p>
                        </li>
                    }
                </ul>
            </div>
            );
        }}
        </Query>
        <Link to="/">Home</Link>
        </>
    )
};

export default UserDetail;