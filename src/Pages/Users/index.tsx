import {
  Box,
  Button,
  Card,
  Flex,
  Input,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";

import { iUser } from "../../Interfaces";
import { useUsersContext } from "../../Context/Users.context";
import User from "../../Components/User";
import { DEFAULT_USER } from "../../Constants";
import FormProfile from "../../Components/FormProfile";
import { BiMinus, BiPlus } from "react-icons/bi";

const Users = () => {
  const { users, getAllUsers, createUser } = useUsersContext();
  const [search, setSearch] = useState<string>("");

  // New user
  const [newUser, setNewUser] = useState<iUser>({
    ...DEFAULT_USER,
    id: Math.random(),
  });
  const [openNewUser, setOpenNewUser] = useState(false);

  useEffect(() => {
    if (!users.length) {
      getAllUsers();
    }
  }, [getAllUsers, users]);

  const usersFiltered = useMemo(() => {
    if (!search.length) return users;

    return users.filter((user: iUser) =>
      user?.name?.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, users]);

  return (
    <Box>
      <Box mb={5}>
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Box>
            <Text as="h1" fontSize={"2xl"} fontWeight={"bold"}>
              Usuários
            </Text>
            <Text as="p" color={"gray.500"}>
              Selecione o usuário que deseja usar!
            </Text>
          </Box>

          <Tooltip
            label={openNewUser ? "Fechar" : "Criar um novo usuário"}
            placement="left"
          >
            <Button
              size={"sm"}
              height={"40px"}
              width={"40px"}
              p={0}
              rounded={"full"}
              onClick={() => setOpenNewUser(!openNewUser)}
            >
              {openNewUser ? <BiMinus size={20} /> : <BiPlus size={20} />}
            </Button>
          </Tooltip>
        </Flex>
        {openNewUser && (
          <Box textAlign={"left"} mt={5}>
            <FormProfile user={newUser} setUser={setNewUser} isNewUser />

            <Flex gap={2} justifyContent={"space-between"} mt={5}>
              <Button
                colorScheme="red"
                onClick={() => {
                  setOpenNewUser(false);
                  setNewUser(DEFAULT_USER);
                }}
              >
                Cancelar
              </Button>
              <Button
                colorScheme="green"
                onClick={() => {
                  createUser(newUser);
                  setOpenNewUser(false);
                  setNewUser(DEFAULT_USER);
                }}
              >
                Criar Usuário
              </Button>
            </Flex>
          </Box>
        )}

        <Input
          placeholder="Buscar por nome..."
          mt={5}
          value={search}
          onChange={({ target }) => setSearch(target.value)}
        />
      </Box>
      <Flex direction={"column"} gap={5}>
        {!!usersFiltered.length &&
          usersFiltered?.map((user: iUser) => (
            <Card key={user?.id} p={5} borderRadius={10}>
              <User user={user} hasAction />
            </Card>
          ))}
      </Flex>
    </Box>
  );
};

export default Users;
