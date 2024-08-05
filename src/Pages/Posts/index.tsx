import {
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  Container,
  Flex,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { iPost } from "../../Interfaces";
import { usePostsContext } from "../../Context/Posts.context";
import Post from "../../Components/Post";
import { useUsersContext } from "../../Context/Users.context";
import { isEmpty } from "lodash";
import { useNavigate } from "react-router-dom";
import { BiTrash } from "react-icons/bi";

const Posts = () => {
  const { myPosts, removePosts } = usePostsContext();
  const { currentUser } = useUsersContext();

  const { isOpen, onToggle, onClose } = useDisclosure();
  const toast = useToast();
  const navigate = useNavigate();

  const [openSelectPosts, setOpenSelectPosts] = useState(false);
  const [selectedPosts, setSelectedPosts] = useState<number[]>([]);

  useEffect(() => {
    if (!openSelectPosts) {
      setSelectedPosts([]);
    }
  }, [openSelectPosts]);

  const handleSelectPosts = (id: number) => {
    if (!openSelectPosts) return;

    if (selectedPosts.includes(id)) {
      const newPosts = selectedPosts.filter((post) => post !== id);

      setSelectedPosts(newPosts);

      return;
    }

    setSelectedPosts([...selectedPosts, id]);
  };

  const handleSelectAllPosts = () => {
    if (!myPosts.length) {
      toast({
        title: "Erro",
        description: "Você não tem nenhum post!",
        status: "error",
        duration: 3000,
        isClosable: true,
      });

      return;
    }

    if (selectedPosts.length === myPosts.length) {
      toast({
        title: "Erro",
        description: "Você já selecionou todos os posts!",
        status: "error",
        duration: 3000,
        isClosable: true,
      });

      return;
    }

    setSelectedPosts(myPosts.map((post) => post.id));
  };

  useEffect(() => {
    if (isEmpty(currentUser)) {
      navigate("/feed");
    }
  }, [currentUser, navigate]);

  return (
    <Box>
      <Flex mb={5} justifyContent={"space-between"}>
        <Text fontWeight={"bold"} color="gray.500">
          {myPosts.length} Posts
        </Text>
        <Text
          color="gray.400"
          cursor={"pointer"}
          _hover={{ textDecoration: "underline" }}
          onClick={() => setOpenSelectPosts(!openSelectPosts)}
        >
          {openSelectPosts ? "Cancelar Seleção" : "Selecionar vários"}
        </Text>
      </Flex>
      <Flex direction={"column"} gap={10} position={"relative"}>
        {!!myPosts.length &&
          myPosts?.map((post: iPost) => (
            <Flex
              key={post?.id}
              gap={2}
              onClick={() => handleSelectPosts(post.id)}
              cursor={openSelectPosts ? "pointer" : "auto"}
            >
              {openSelectPosts && (
                <Checkbox
                  size="lg"
                  colorScheme="green"
                  borderColor={"green.800"}
                  isChecked={selectedPosts.includes(post.id)}
                  pointerEvents={"none"}
                />
              )}
              <Box pointerEvents={openSelectPosts ? "none" : "auto"}>
                <Post post={post} />
              </Box>
            </Flex>
          ))}

        {openSelectPosts && (
          <Flex
            position={"fixed"}
            bottom={0}
            right={0}
            width={"100%"}
            justifyContent={"center"}
            bg={"gray.50"}
          >
            <Container maxWidth={"500px"} p={5}>
              <Flex justifyContent={"space-between"}>
                <Button onClick={() => setOpenSelectPosts(false)}>
                  Cancelar Seleção
                </Button>

                <Flex gap={2}>
                  <Button
                    colorScheme="green"
                    onClick={() => handleSelectAllPosts()}
                  >
                    Selecionar Todos
                  </Button>
                  <Popover
                    returnFocusOnClose={false}
                    isOpen={isOpen}
                    onClose={onClose}
                    placement="end"
                    closeOnBlur={false}
                  >
                    <PopoverTrigger>
                      <Button colorScheme="red" onClick={onToggle}>
                        <BiTrash size={20} />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverHeader fontWeight="semibold">
                        Tem certeza que deseja excluir estes posts?
                      </PopoverHeader>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverBody>
                        Essa ação não pode ser desfeita.
                      </PopoverBody>
                      <PopoverFooter display="flex" justifyContent="flex-end">
                        <ButtonGroup size="sm">
                          <Button variant="outline" onClick={onClose}>
                            Cancelar
                          </Button>
                          <Button
                            colorScheme="red"
                            onClick={() => {
                              removePosts(selectedPosts);
                              setOpenSelectPosts(false);
                            }}
                          >
                            Excluir
                          </Button>
                        </ButtonGroup>
                      </PopoverFooter>
                    </PopoverContent>
                  </Popover>
                </Flex>
              </Flex>
            </Container>
          </Flex>
        )}
      </Flex>
    </Box>
  );
};

export default Posts;
