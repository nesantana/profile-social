import { Box, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { iPost } from "../../Interfaces";
import { usePostsContext } from "../../Context/Posts.context";
import Post from "../../Components/Post";
import { useParams } from "react-router-dom";

const UserPosts = () => {
  const { id } = useParams();

  const { getPostByUserId, posts } = usePostsContext();

  const [myPosts, setMyPosts] = useState<iPost[]>([]);

  useEffect(() => {
    if (!!posts.length) {
      (async () => {
        const post = await getPostByUserId(Number(id));
        setMyPosts(post);
      })();
    }
  }, [posts, getPostByUserId, id]);

  return (
    <Box>
      <Flex mb={5} justifyContent={"space-between"}>
        <Text fontWeight={"bold"} color="gray.500">
          {myPosts.length} Posts
        </Text>
      </Flex>
      <Flex direction={"column"} gap={10}>
        {!!myPosts.length &&
          myPosts?.map((post: iPost) => <Post key={post?.id} post={post} />)}
      </Flex>
    </Box>
  );
};

export default UserPosts;
