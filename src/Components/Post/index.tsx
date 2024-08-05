import { iComment, iPost, iUser } from "../../Interfaces";

import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Image,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Text,
  Textarea,
  Tooltip,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useUsersContext } from "../../Context/Users.context";
import { useCallback, useEffect, useState } from "react";
import User from "../User";
import { isEmpty } from "lodash";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { usePostsContext } from "../../Context/Posts.context";
import { BiEdit } from "react-icons/bi";
import ImageInput from "../ImageInput";
import Comment from "../Comment";

const Post = ({ post }: { post: iPost }) => {
  const { getOneUser, users, currentUser } = useUsersContext();
  const { createComment, editPost, deletePost } = usePostsContext();
  const [user, setUser] = useState<iUser>({} as iUser);
  const [showComments, setShowComments] = useState(false);
  const { isOpen, onToggle, onClose } = useDisclosure();

  // Edit post
  const [image, setImage] = useState<string>(post?.image || "");
  const [title, setTitle] = useState<string>(post?.title || "");
  const [body, setBody] = useState<string>(post?.body || "");
  const [openEdit, setOpenEdit] = useState(false);

  // New comment
  const [bodyComment, setBodyComment] = useState<string>("");
  const [nameComment, setNameComment] = useState<string>("");

  const handleOpenEdit = () => {
    setOpenEdit(true);
    setTitle(post?.title || "");
    setBody(post?.body || "");
    setImage(post?.image || "");
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
    setTitle("");
    setBody("");
    setImage("");
  };

  const toast = useToast();

  const getUser = useCallback(() => {
    const data = getOneUser(post?.userId);
    setUser(data);
  }, [getOneUser, post]);

  useEffect(() => {
    getUser();
  }, [users, getUser, post]);

  return (
    <Card key={post?.id} width={"100%"}>
      <CardHeader>
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          {!isEmpty(user) && <User hasRoute user={user as iUser} />}
          {currentUser?.id === post?.userId && (
            <Tooltip label="Editar post" placement="left">
              <div onClick={() => handleOpenEdit()}>
                <BiEdit size={20} cursor={"pointer"} />
              </div>
            </Tooltip>
          )}
        </Flex>
      </CardHeader>
      <CardBody py={0}>
        {openEdit ? (
          <Flex flexDirection={"column"} gap={2}>
            <Input
              placeholder="Título do post"
              borderColor="gray.200"
              value={title}
              onChange={({ target }) => setTitle(target.value)}
            />
            <Textarea
              placeholder="Me conta sobre isso..."
              borderColor="gray.200"
              value={body}
              onChange={({ target }) => setBody(target.value)}
            />
            <ImageInput image={image} setImage={setImage} />

            <Flex gap={2} justifyContent={"space-between"}>
              <Popover
                returnFocusOnClose={false}
                isOpen={isOpen}
                onClose={onClose}
                placement="end"
                closeOnBlur={false}
              >
                <PopoverTrigger>
                  <Button colorScheme="red" onClick={onToggle}>
                    Apagar
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverHeader fontWeight="semibold">
                    Tem certeza que deseja excluir este post?
                  </PopoverHeader>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverBody>Essa ação não pode ser desfeita.</PopoverBody>
                  <PopoverFooter display="flex" justifyContent="flex-end">
                    <ButtonGroup size="sm">
                      <Button variant="outline" onClick={onClose}>
                        Cancelar
                      </Button>
                      <Button
                        colorScheme="red"
                        onClick={() => {
                          deletePost(post);
                          onClose();
                        }}
                      >
                        Excluir
                      </Button>
                    </ButtonGroup>
                  </PopoverFooter>
                </PopoverContent>
              </Popover>

              <Flex gap={2}>
                <Button colorScheme="red" onClick={() => handleCloseEdit()}>
                  Cancelar
                </Button>
                <Button
                  colorScheme="green"
                  onClick={() => {
                    editPost({ title, body, image, id: post?.id });
                    handleCloseEdit();
                  }}
                >
                  Salvar
                </Button>
              </Flex>
            </Flex>
          </Flex>
        ) : (
          <Box gap={2} alignItems={"center"}>
            <Text fontWeight={"bold"} mb={2}>
              {post?.title}
            </Text>
            <Text whiteSpace={"pre-line"}>{post?.body}</Text>
            {post?.image && (
              <Image src={post?.image} mt={5} alt="Imagem do post" />
            )}
          </Box>
        )}
      </CardBody>

      <CardFooter p={5} flexDir={"column"}>
        <Text
          fontSize={"smaller"}
          mb={1}
          color={"gray.500"}
          display={"flex"}
          gap={2}
        >
          {showComments ? (
            <MdVisibility
              cursor={"pointer"}
              onClick={() => setShowComments(false)}
              size={20}
            />
          ) : (
            <MdVisibilityOff
              size={20}
              cursor={"pointer"}
              onClick={() => setShowComments(true)}
            />
          )}
          {post?.comments?.length} Comments{" "}
        </Text>
        {showComments && (
          <Flex
            justify="space-between"
            flexDirection={"column"}
            gap={2}
            bg="gray.50"
            p={5}
            rounded={"md"}
          >
            {!isEmpty(post?.comments) &&
              post?.comments?.map((comment: iComment) => (
                <Comment key={comment?.id} comment={comment} />
              ))}
            {!isEmpty(currentUser) && (
              <Card p={5} gap={2}>
                <Text fontSize={"small"} color="gray.500">
                  Adicione um comentário:
                </Text>
                <Input
                  placeholder="De um título para seu comentário"
                  borderColor="gray.200"
                  value={nameComment}
                  onChange={({ target }) => setNameComment(target.value)}
                />
                <Textarea
                  placeholder="Digite seu comentário..."
                  borderColor="gray.200"
                  value={bodyComment}
                  onChange={({ target }) => setBodyComment(target.value)}
                />

                <Box>
                  <Button
                    onClick={() => {
                      createComment({
                        body: bodyComment,
                        name: nameComment,
                        postId: post?.id,
                        email: currentUser?.email,
                      });
                      setBodyComment("");
                      setNameComment("");
                      toast({
                        title: "Comentário criado com sucesso!",
                        description: "Parabéns, seu comentário foi adicionado!",
                        status: "success",
                        duration: 3000,
                        isClosable: true,
                      });
                    }}
                  >
                    Criar Comentário
                  </Button>
                </Box>
              </Card>
            )}
          </Flex>
        )}
      </CardFooter>
    </Card>
  );
};

export default Post;
