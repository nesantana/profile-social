import {
  Button,
  ButtonGroup,
  Card,
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
} from "@chakra-ui/react";
import { iComment } from "../../Interfaces";
import { BiTrash } from "react-icons/bi";
import { usePostsContext } from "../../Context/Posts.context";
import { useUsersContext } from "../../Context/Users.context";

const Comment = ({ comment }: { comment: iComment }) => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const { deleteComment } = usePostsContext();
  const { currentUser } = useUsersContext();

  return (
    <>
      <Card p={2}>
        <Flex gap={2} justifyContent={"space-between"}>
          <Text fontSize={"small"}>{comment?.email}</Text>
          {comment.email === currentUser.email && (
            <>
              <Popover
                returnFocusOnClose={false}
                isOpen={isOpen}
                onClose={onClose}
                placement="end"
                closeOnBlur={false}
              >
                <PopoverTrigger>
                  <Button onClick={onToggle}>
                    <BiTrash color="red" cursor="pointer" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverHeader fontWeight="semibold">
                    Tem certeza que deseja excluir este comentário?
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
                          deleteComment(comment);
                          onClose();
                        }}
                      >
                        Excluir
                      </Button>
                    </ButtonGroup>
                  </PopoverFooter>
                </PopoverContent>
              </Popover>
            </>
          )}
        </Flex>
        <Text fontSize={"small"} fontWeight={"bold"}>
          {comment?.name}
        </Text>
        <Text fontSize={"small"}>{comment?.body}</Text>
      </Card>
    </>
  );
};

export default Comment;
