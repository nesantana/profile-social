import { Box, Button, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { useUsersContext } from "../../Context/Users.context";
import { isEmpty } from "lodash";
import { useNavigate } from "react-router-dom";
import { iUser } from "../../Interfaces";
import FormProfile from "../../Components/FormProfile";
import { DEFAULT_USER } from "../../Constants";

const Profile = () => {
  const { currentUser, editUser } = useUsersContext();

  const navigate = useNavigate();

  const [user, setUser] = useState<iUser>(DEFAULT_USER);

  useEffect(() => {
    setUser(currentUser);
  }, [currentUser]);

  useEffect(() => {
    if (isEmpty(currentUser)) {
      navigate("/feed");
    }
  }, [currentUser, navigate]);

  return (
    <Box>
      <Flex direction={"column"} gap={10}>
        <FormProfile user={user} setUser={setUser} />

        <Flex justifyContent={"space-between"}>
          <Button onClick={() => navigate("/feed")}>Voltar</Button>
          <Button colorScheme="green" onClick={() => editUser(user)}>
            Editar Perfil
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Profile;
