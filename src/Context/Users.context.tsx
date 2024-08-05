import {
  useState,
  createContext,
  useContext,
  useMemo,
  useCallback,
} from "react";
import { iUser } from "../Interfaces";
import * as apiUsers from "../Services/users.service";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { isEmpty } from "lodash";

type iUsersContext = {
  users: iUser[];
  setUsers(users: iUser[]): void;
  currentUser: iUser;
  getAllUsers(): void;
  getOneUser(id: number): iUser;
  loading: boolean;
  loginUser(user: iUser): void;
  editUser(user: iUser): void;
  createUser(user: iUser): void;
  logout(): void;
};

const UsersContext = createContext<iUsersContext>({} as iUsersContext);

interface iUserProvider {
  children: React.ReactNode;
}

export const UsersProvider: React.FC<iUserProvider> = ({ children }) => {
  const [users, setUsers] = useState<iUser[]>([]);
  const [currentUserId, setCurrentUserId] = useState<Number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();
  const toast = useToast();

  const getAllUsers = async (): Promise<void> => {
    try {
      const { data }: any = await apiUsers.getAll();

      if (data) {
        setUsers(data);
      }
    } finally {
      setLoading(false);
    }
  };

  const loginUser = (user: iUser): void => {
    setCurrentUserId(user.id);
    navigate("/feed");
  };

  const getOneUser = useCallback(
    (id: number): iUser => {
      const user = users.find((user) => user.id === id);

      return user || ({} as iUser);
    },
    [users]
  );

  const currentUser = useMemo(
    () => getOneUser(currentUserId as number),
    [currentUserId, getOneUser]
  );

  const editUser = (newUser: iUser) => {
    if (newUser.id !== currentUserId) {
      toast({
        title: "Erro",
        description: "Você não pode editar outro usuário!",
        status: "error",
        duration: 3000,
        isClosable: true,
      });

      return;
    }

    const newUsers = users.map((user) => {
      if (user.id === newUser.id) {
        return newUser;
      }

      return user;
    });

    setUsers(newUsers);

    toast({
      title: "Usuário editado com sucesso!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const createUser = (newUser: iUser) => {
    if (isEmpty(newUser)) {
      toast({
        title: "Erro",
        description: "Você deve preencher todos os campos!",
        status: "error",
        duration: 3000,
        isClosable: true,
      });

      return;
    }

    setUsers([newUser, ...users]);

    toast({
      title: "Usuário criado com sucesso!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });

    loginUser(newUser);

    navigate("/feed");
  };

  const logout = () => {
    setCurrentUserId(null);
    navigate("/");
  };

  return (
    <UsersContext.Provider
      value={{
        users,
        setUsers,
        currentUser,
        getAllUsers,
        loading,
        getOneUser,
        loginUser,
        editUser,
        createUser,
        logout,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export const useUsersContext = () => useContext(UsersContext);
