import {
  useState,
  createContext,
  useContext,
  useMemo,
  useCallback,
} from "react";
import { iComment, iPost } from "../Interfaces";
import * as apiPost from "../Services/posts.service";
import * as apiComments from "../Services/comments.service";
import { useToast } from "@chakra-ui/react";
import { useUsersContext } from "./Users.context";

interface iSimpleComment {
  body: string;
  name: string;
  postId: number;
  email: string;
}

interface iSimplePost {
  title: string;
  body: string;
  image?: string;
  id?: number;
}

type iPostsContext = {
  posts: iPost[];
  setPosts(posts: iPost[]): void;
  comments: iComment[];
  setComments(comments: iComment[]): void;
  getAllPost(): void;
  getOnePost(id: number): void;
  loading: boolean;
  createComment(comment: iSimpleComment): void;
  deleteComment(comment: iComment): void;
  createPost(post: iSimplePost): void;
  editPost(post: iSimplePost): void;
  deletePost: (post: iPost) => void;
  myPosts: iPost[];
  getPostByUserId(userId: number): Promise<iPost[]>;
  removePosts(ids: number[]): void;
};

const PostsContext = createContext<iPostsContext>({} as iPostsContext);

interface iPostsProvider {
  children: React.ReactNode;
}

export const PostsProvider: React.FC<iPostsProvider> = ({ children }) => {
  const [posts, setPosts] = useState<iPost[]>([]);
  const [comments, setComments] = useState<iComment[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const toast = useToast();
  const { currentUser } = useUsersContext();

  const getAllPost = useCallback(async (): Promise<void> => {
    try {
      const { data }: any = await apiPost.getAll();
      const { data: dataComments }: any = await apiComments.getAll();

      const newPosts = data.map((post: iPost) => {
        const comments = dataComments.filter(
          (comment: iComment) => comment.postId === post.id
        );

        return { ...post, comments };
      });

      setPosts(newPosts);
      setComments(dataComments);
    } finally {
      setLoading(false);
    }
  }, []);

  const createPost = async ({ title, body, image }: iSimplePost) => {
    if (!title || !body) {
      toast({
        title: "Erro",
        description: "O post não pode ser vazio!",
        status: "error",
        duration: 3000,
        isClosable: true,
      });

      return;
    }

    const post: iPost = {
      title,
      body,
      userId: currentUser.id,
      id: Math.random(),
      comments: [],
      image,
    };

    const newPosts = [post, ...posts];

    setPosts(newPosts);

    toast({
      title: "Post criado com sucesso!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const myPosts: iPost[] = useMemo(() => {
    if (!posts.length) {
      getAllPost();

      return [];
    }

    return posts.filter((post) => post.userId === currentUser.id);
  }, [getAllPost, posts, currentUser]);

  const editPost = async ({ title, body, image, id }: iSimplePost) => {
    if (!title || !body) {
      toast({
        title: "Erro",
        description: "O post não pode ser vazio!",
        status: "error",
        duration: 3000,
        isClosable: true,
      });

      return;
    }

    const postEdited: iSimplePost = {
      title,
      body,
      image,
    };

    const newPosts = posts.map((post) => {
      if (post.id === id) {
        return { ...post, ...postEdited };
      }

      return post;
    });

    setPosts(newPosts);
    toast({
      title: "Post editado com sucesso!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const createComment = ({ body, name, postId, email }: iSimpleComment) => {
    if (!body && name && !postId && !email) {
      toast({
        title: "Erro",
        description: "O comentário não pode ser vazio!",
        status: "error",
        duration: 3000,
        isClosable: true,
      });

      return;
    }

    const comment: iComment = {
      body,
      name,
      email,
      postId,
      id: Math.random(),
    };

    const newPosts = posts.map((post) => {
      if (post.id === postId) {
        return {
          ...post,
          comments: [...post.comments, comment],
        };
      }

      return post;
    });

    setPosts(newPosts);
    setComments([...comments, comment]);
  };

  const deleteComment = async (comment: iComment) => {
    if (comment.email !== currentUser.email) {
      toast({
        title: "Erro",
        description: "Você não pode deletar esse comentário!",
        status: "error",
        duration: 3000,
        isClosable: true,
      });

      return;
    }

    const newPosts = posts.map((post) => {
      if (post.id === comment.postId) {
        return {
          ...post,
          comments: post.comments.filter((c: iComment) => c.id !== comment.id),
        };
      }

      return post;
    });

    const newComments = comments.filter((c: iComment) => c.id !== comment.id);

    setPosts(newPosts);
    setComments(newComments);

    toast({
      title: "Comentário excluído com sucesso!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const getOnePost = async (id: number) => {
    if (!posts.length) await getAllPost();

    const post = posts.find((post) => post.id === id);

    return post;
  };

  const deletePost = async (post: iPost) => {
    if (post.userId !== currentUser.id) {
      toast({
        title: "Erro",
        description: "Você não pode apagar este post!",
        status: "error",
        duration: 3000,
        isClosable: true,
      });

      return;
    }

    const newPosts = posts.filter((p) => p.id !== post.id);

    setPosts(newPosts);
    toast({
      title: "Post apagado com sucesso!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const getPostByUserId = useCallback(
    async (userId: number): Promise<iPost[]> => {
      if (!posts.length) await getAllPost();

      const post = posts.filter((post) => post.userId === userId);

      return post as iPost[];
    },
    [getAllPost, posts]
  );

  const removePosts = (ids: number[]) => {
    if (!ids.length) {
      toast({
        title: "Erro",
        description: "Você deve selecionar pelo menos um post!",
        status: "error",
        duration: 3000,
        isClosable: true,
      });

      return;
    }

    const newPosts = posts.filter((post) => !ids.includes(post.id));

    setPosts(newPosts);
    toast({
      title: "Posts apagados com sucesso!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <PostsContext.Provider
      value={{
        editPost,
        posts,
        setPosts,
        getAllPost,
        loading,
        getOnePost,
        comments,
        setComments,
        createComment,
        deleteComment,
        createPost,
        deletePost,
        myPosts,
        getPostByUserId,
        removePosts,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export const usePostsContext = () => useContext(PostsContext);
