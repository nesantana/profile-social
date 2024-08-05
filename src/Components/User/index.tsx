import { Box, Button, Flex, Heading, Text, Tooltip } from "@chakra-ui/react";
import { iUser } from "../../Interfaces";
import { BiLogInCircle, BiUser } from "react-icons/bi";
import { useUsersContext } from "../../Context/Users.context";
import { useNavigate } from "react-router-dom";

const User = ({
  user,
  hasAction = false,
  hasRoute = false,
}: {
  user: iUser;
  hasAction?: boolean;
  hasRoute?: boolean;
}) => {
  const { loginUser } = useUsersContext();
  const navigate = useNavigate();

  return (
    <Flex flex="1" gap="2" alignItems="center" justifyContent={"space-between"}>
      <Flex
        gap="2"
        cursor={hasRoute ? "pointer" : ""}
        onClick={(e) => {
          if (!hasRoute) return;
          e.preventDefault();
          navigate(`/posts/${user?.id}`);
        }}
      >
        <Flex
          width="50px"
          height="50px"
          bg="gray.100"
          borderRadius="50%"
          justifyContent={"center"}
          alignItems={"center"}
        >
          <BiUser size={25} />
        </Flex>
        <Box>
          <Heading size="sm">{user?.name || ""}</Heading>
          <Text>{user.email || ""}</Text>
        </Box>
      </Flex>
      {hasAction && (
        <Flex gap={2}>
          <Tooltip label="Fazer login como este usuário" placement="left">
            <Button
              size={"sm"}
              p={1}
              rounded={"full"}
              onClick={() => loginUser(user)}
            >
              <BiLogInCircle size={20} />
            </Button>
          </Tooltip>
        </Flex>
      )}
    </Flex>
  );
};

export default User;
