import { Box, Card, Input, Text } from "@chakra-ui/react";
import { iUser } from "../../Interfaces";

const inputsBasic = [
  {
    name: "name",
    text: "Nome",
    disabled: false,
  },
  {
    name: "username",
    text: "Nome de usuário",
    disabled: false,
  },
  {
    name: "email",
    text: "E-mail",
    disabled: true,
  },
  {
    name: "phone",
    text: "Telefone",
    disabled: false,
  },
  {
    name: "website",
    text: "Website",
    disabled: false,
  },
];

const inputsAddress = [
  {
    name: "street",
    text: "Rua",
  },
  {
    name: "suite",
    text: "Nº",
  },
  {
    name: "city",
    text: "Cidade",
  },
  {
    name: "zipcode",
    text: "CEP",
  },
];

const inputsCompany = [
  {
    name: "name",
    text: "Nome da empresa",
  },
  {
    name: "catchPhrase",
    text: "Tagline da empresa",
  },
  {
    name: "bs",
    text: "B.S. da empresa",
  },
];

const FormProfile = ({
  user,
  setUser,
  isNewUser = false,
}: {
  user: iUser;
  setUser(user: iUser): void;
  isNewUser?: boolean;
}) => {
  const handleUserChange = ({
    value,
    key,
    type,
  }: {
    value: string;
    key: string;
    type?: "address" | "company";
  }) => {
    if (type === "address") {
      setUser({
        ...user,
        address: {
          ...user.address,
          [key]: value,
        },
      });

      return;
    }

    if (type === "company") {
      setUser({
        ...user,
        company: {
          ...user.company,
          [key]: value,
        },
      });

      return;
    }

    setUser({ ...user, [key]: value });
  };

  return (
    <>
      <Card p={5} borderRadius={10} gap={2}>
        <Text mb={2} fontWeight={"bold"}>
          Informações básicas
        </Text>
        {inputsBasic.map((input) => (
          <Box key={input.name}>
            <Text fontSize={"small"} mb={2} color="gray.500">
              {input.text === "E-mail" && !isNewUser
                ? "E-mail (Informação não editadável)"
                : input.text}
            </Text>
            <Input
              placeholder={input.text}
              borderColor="gray.200"
              disabled={input.disabled && !isNewUser}
              value={user[input.name as keyof iUser] as string}
              onChange={({ target }) =>
                handleUserChange({ value: target.value, key: input.name })
              }
            />
          </Box>
        ))}
      </Card>
      <Card p={5} borderRadius={10} gap={2}>
        <Text mb={2} fontWeight={"bold"}>
          Endereço
        </Text>
        {inputsAddress.map((input) => (
          <Box key={input.name}>
            <Text fontSize={"small"} mb={2} color="gray.500">
              {input.text}
            </Text>
            <Input
              placeholder={input.text}
              borderColor="gray.200"
              value={
                user["address"][input.name as keyof iUser["address"]] as string
              }
              onChange={({ target }) =>
                handleUserChange({
                  value: target.value,
                  key: input.name,
                  type: "address",
                })
              }
            />
          </Box>
        ))}
      </Card>
      <Card p={5} borderRadius={10} gap={2}>
        <Text mb={2} fontWeight={"bold"}>
          Empresa
        </Text>
        {inputsCompany.map((input) => (
          <Box key={input.name}>
            <Text fontSize={"small"} mb={2} color="gray.500">
              {input.text}
            </Text>
            <Input
              placeholder={input.text}
              borderColor="gray.200"
              value={
                user["company"][input.name as keyof iUser["company"]] as string
              }
              onChange={({ target }) =>
                handleUserChange({
                  value: target.value,
                  key: input.name,
                  type: "company",
                })
              }
            />
          </Box>
        ))}
      </Card>
    </>
  );
};

export default FormProfile;
