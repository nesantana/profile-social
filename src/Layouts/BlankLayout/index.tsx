import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Header } from "../../Components/Header";
import {
  Box,
  Button,
  Card,
  Container,
  Flex,
  Input,
  Link,
  Text,
  Textarea,
  Tooltip,
} from "@chakra-ui/react";
import { useUsersContext } from "../../Context/Users.context";
import { isEmpty } from "lodash";
import { useState } from "react";
import { usePostsContext } from "../../Context/Posts.context";
import { BiLogOutCircle, BiMinus, BiPlus } from "react-icons/bi";
import ImageInput from "../../Components/ImageInput";

const navigations = ["feed", "posts", "perfil"];

const BlankLayout = () => {
  const { currentUser, logout } = useUsersContext();
  const { createPost } = usePostsContext();
  const [openCreatePost, setOpenCreatePost] = useState(false);

  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [image, setImage] = useState<string>("");

  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Box bg={"gray.50"} minHeight={"100vh"}>
      <Container maxWidth="500px" p={5}>
        <Header />
        {!isEmpty(currentUser) ? (
          <Box mb={5}>
            <Flex justifyContent={"space-between"}>
              <Box>
                <Text>Olá {currentUser.name}!</Text>
                <Text>
                  Você está logado como <strong>{currentUser.email}</strong>
                </Text>
              </Box>

              <Flex gap={2}>
                <Tooltip
                  label={openCreatePost ? "Fechar" : "Criar um novo post"}
                  placement="left"
                >
                  <Button
                    size={"sm"}
                    height={"40px"}
                    width={"40px"}
                    p={0}
                    rounded={"full"}
                    onClick={() => setOpenCreatePost(!openCreatePost)}
                  >
                    {openCreatePost ? (
                      <BiMinus size={20} />
                    ) : (
                      <BiPlus size={20} />
                    )}
                  </Button>
                </Tooltip>
                <Tooltip label={"Sair"} placement="left">
                  <Button
                    size={"sm"}
                    height={"40px"}
                    width={"40px"}
                    p={0}
                    rounded={"full"}
                    onClick={() => logout()}
                  >
                    <BiLogOutCircle size={20} />
                  </Button>
                </Tooltip>
              </Flex>
            </Flex>
            {openCreatePost && (
              <Card p={5} gap={2} mt={2}>
                <Text fontSize={"small"} color="gray.500">
                  No que você está pensando?!
                </Text>
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

                <Box>
                  <Button
                    onClick={() => {
                      createPost({ title, body, image });

                      if (title && body) {
                        setTitle("");
                        setBody("");
                        setImage("");
                        setOpenCreatePost(false);
                      }
                    }}
                  >
                    Adicionar Post
                  </Button>
                </Box>
              </Card>
            )}

            <Flex rounded={10} overflow={"hidden"} mt={5}>
              {navigations.map((navigation) => (
                <Button
                  width={"100%"}
                  rounded={0}
                  key={navigation}
                  bg={
                    location.pathname === `/${navigation}`
                      ? "blue.500"
                      : "gray.200"
                  }
                  color={location.pathname === `/${navigation}` ? "white" : ""}
                  onClick={() => navigate(`/${navigation}`)}
                >
                  {navigation[0].toUpperCase() + navigation.substring(1)}
                </Button>
              ))}
            </Flex>
          </Box>
        ) : (
          location.pathname !== "/" && (
            <Box mb={5}>
              <Flex
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                textAlign={"center"}
              >
                <Text as="h1" fontSize={"xl"} fontWeight={"bold"}>
                  Você não está logado!
                </Text>
                <Text>
                  Você pode continuar como visitante, mas não terá acesso a
                  todas as funcionalidades.{" "}
                  <Link href="/" fontWeight={"semibold"} color={"blue.500"}>
                    Clique aqui para fazer o login!
                  </Link>
                </Text>
              </Flex>
            </Box>
          )
        )}
        <Outlet />
      </Container>
    </Box>
  );
};

export default BlankLayout;
