import { Flex, Image, Input, Text, useToast } from "@chakra-ui/react";

interface iImageInput {
  image: string;
  setImage(image: string): void;
}

const ImageInput = ({ image, setImage }: iImageInput) => {
  const toast = useToast();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) {
      toast({
        title: "Erro",
        description: "Selecione uma imagem",
        status: "error",
      });

      return;
    }

    if (!file.type.includes("image")) {
      toast({
        title: "Erro",
        description: "Selecione uma imagem",
        status: "error",
      });

      return;
    }

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImage(reader.result?.toString() || "");
      };
    }
  };

  return (
    <>
      <Flex
        border={"2px dashed"}
        borderColor={image ? "green.200" : "gray.300"}
        rounded={10}
        p={2}
        position={"relative"}
      >
        <Text color={image ? "green.500" : "gray.500"}>
          {image
            ? "Imagem selecionada, clique ou arraste e solte aqui para atualizar"
            : "Clique ou arraste e solte a imagem aqui..."}
        </Text>
        <Input
          accept="image/png, image/gif, image/jpeg"
          position={"absolute"}
          opacity={0}
          type={"file"}
          onChange={handleFileChange}
        />
      </Flex>

      {image && <Image src={image} alt="Imagem do post" />}
    </>
  );
};

export default ImageInput;
