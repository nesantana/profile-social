import { Box, Flex, Text } from "@chakra-ui/react";
import { useEffect } from "react";

import { iPost } from "../../Interfaces";
import { usePostsContext } from "../../Context/Posts.context";
import Post from "../../Components/Post";

const Feed = () => {
  const { posts, getAllPost } = usePostsContext();

  useEffect(() => {
    if (!posts.length) {
      getAllPost();
    }
  }, [getAllPost, posts]);

  return (
    <Box>
      <Flex mb={5} justifyContent={"space-between"}>
        <Text fontWeight={"bold"} color="gray.500">
          {posts.length} Posts
        </Text>
      </Flex>
      <Flex direction={"column"} gap={10}>
        {!!posts.length &&
          posts?.map((post: iPost) => <Post key={post?.id} post={post} />)}
      </Flex>
    </Box>
  );
};

export default Feed;
