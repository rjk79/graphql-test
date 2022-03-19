import gql from "graphql-tag";
import React from "react";
import { Query } from "react-apollo";

const FETCH_USERS = gql`
  query FetchUsers {
    users {
      id
      name
      email
    }
  }
`;

const UserIndex = () => (
    <Query query={FETCH_USERS}>
      {({ loading, error, data }) => {
        console.log(data);
        return (
          <div>
            <h1>UserIndex</h1>
          </div>
        );
      }}
    </Query>
  );

  export default UserIndex;