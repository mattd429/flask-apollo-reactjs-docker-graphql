// React
import React from 'react';
// Apollo
import { Query } from 'react-apollo';
import { GET_USERS_BLOGS } from '../../state/queries/queries';
// Local
import '../../styles/blog.css';

const Blogs = () => { 
    return (
      <Query query={GET_USERS_BLOGS}>
      {({ loading, error, data }) => {
        if (loading) return <div>Loading...</div>
        if (error) return <div>THERE WAS AN ERROR</div>
        console.log(data)
        return (
        <ul className="blog-post columns-2">
          <li>
              <h3>{data.users.edges[0].node.blog.title}</h3>
              <p>{data.users.edges[0].node.blog.text}</p>
              <p>{data.users.edges[0].node.username}</p>
          </li>
          <li>
              <h3>{data.users.edges[1].node.blog.title}</h3>
              <p>{data.users.edges[1].node.blog.text}</p>
              <p>{data.users.edges[1].node.username}</p>
          </li>
          <li>
              <h3>{data.users.edges[2].node.blog.title}</h3>
              <p>{data.users.edges[2].node.blog.text}</p>
              <p>{data.users.edges[2].node.username}</p>
          </li>
          <li>
              <h3>{data.users.edges[3].node.blog.title}</h3>
              <p>{data.users.edges[3].node.blog.text}</p>
              <p>{data.users.edges[3].node.username}</p>
          </li>
        </ul>
        )
      }}
      </Query>
    ); 
}

export default Blogs;