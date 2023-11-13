import { Box, Flex, Text } from "@chakra-ui/react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useQuery } from '@apollo/client'

 
const UserPost = ({ posts }) => {
// const UserPost = ({post, postedBy}) => {
//     const [user, setUser] = useState(null);
//     const navigate = useNavigate();

    return (
        <div>
        <div className="flex-row justify-space-between my-4">
          {posts &&
            posts.map((post) => (
              <div key={post} className="col-12 col-xl-6">
                <div className="card mb-3">
                  <h4 className="card-header bg-dark text-light p-2 m-0 display-flex align-center">
                    <span>{posts.body}</span>
                  </h4>
                </div>
              </div>
            ))}
        </div>

      </div>
    )
}

export default UserPost;