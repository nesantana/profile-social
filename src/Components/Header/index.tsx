import React, { useEffect } from "react";
import logo from "./logo.jpg";
import { Flex } from "@chakra-ui/react";
import { useUsersContext } from "../../Context/Users.context";

export const Header: React.FC = () => {
  const { users, getAllUsers } = useUsersContext();

  useEffect(() => {
    if (!users.length) {
      getAllUsers();
    }
  }, [getAllUsers, users]);

  return (
    <header>
      <Flex
        bg="#FDC421"
        textAlign={"center"}
        borderRadius="xl"
        alignItems={"center"}
        justifyContent={"center"}
        py={4}
        mb={5}
      >
        <img src={logo} alt="Kolab Logo" />
      </Flex>
    </header>
  );
};
