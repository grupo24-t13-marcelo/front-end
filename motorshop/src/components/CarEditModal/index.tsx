import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Button,
  Input,
} from "@chakra-ui/react";
import { Colors } from "../../themes/themes";
import { useContext, useState } from "react";
import { ContextModal } from "../../contexts/ModalContext";

export default function CarEditModal() {
  const { isOpenEditCar, onCloseEditCar } = useContext(ContextModal);
  const [imagesNumber, setImagesNumer] = useState([] as number[]);

  const addImage = () => {
    setImagesNumer([...imagesNumber, 1]);
  };
  const resetModal = () => {
    onCloseEditCar();
    setImagesNumer([]);
  };
  return (
    <>
      <Modal isOpen={isOpenEditCar} onClose={onCloseEditCar}>
        <ModalOverlay />
        <ModalContent
          maxW={550}
          mx={4}
          p={3}
          px={[0, 3]}
          borderRadius={"0.5rem"}
          padding={"0.5rem"}
          bg={"white"}
          justifySelf={"center"}
        >
          <div className="flex w-full justify-between">
            <h2 className="font-lexend font-semibold">Editar Anúncio</h2>
            <ModalCloseButton onClick={resetModal} color={Colors.grey4} />
          </div>
          <form>
            <ModalBody className="p-[8px]">
              <h2 className="font-medium font-inter">Informações do veículo</h2>
              <FormControl>
                <FormLabel className="w-max font-inter font-medium">
                  Marca
                </FormLabel>
                <select className="w-full border-grey-600 rounded-lg text-grey-800">
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
                <FormLabel className="w-max font-inter font-medium">
                  Modelo
                </FormLabel>
                <select className="w-full border-grey-600 rounded-lg text-grey-800">
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
                <div className="flex w-full gap-[8px]">
                  <div className="w-2/4">
                    <FormLabel className="w-max font-inter font-medium">
                      Ano
                    </FormLabel>
                    <select className="w-full border-grey-600 rounded-lg text-grey-800">
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </select>
                    <FormLabel className="w-max font-inter font-medium">
                      Quilometragem
                    </FormLabel>
                    <Input
                      className="w-full border-grey-600 rounded-lg"
                      type="number"
                    />
                    <FormLabel className="w-max font-inter font-medium">
                      Preço tabela FIPE
                    </FormLabel>
                    <Input
                      className="w-full border-grey-600 rounded-lg"
                      type="number"
                    />
                  </div>
                  <div className="w-2/4">
                    <FormLabel className="w-max font-inter font-medium">
                      Combustível
                    </FormLabel>
                    <select className="w-full border-grey-600 rounded-lg text-grey-800">
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </select>
                    <FormLabel>Cor</FormLabel>
                    <select className="w-full border-grey-600 rounded-lg text-grey-800">
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </select>
                    <FormLabel className="w-max font-inter font-medium">
                      Preço
                    </FormLabel>
                    <Input
                      className="w-full border-grey-600 rounded-lg"
                      type="number"
                    />
                  </div>
                </div>
                <FormLabel className="font-inter font-medium">
                  Descrição
                </FormLabel>
                <Input
                  className="w-full h-[100px] border-grey-600 rounded-lg"
                  type="text"
                />
                <FormLabel className="font-inter font-medium">
                  Publicado
                </FormLabel>
                <div className="w-full flex gap-[9px]">
                  <Button
                    className="w-1/2"
                    bg={"white"}
                    border={`1px solid ${Colors.grey2}`}
                  >
                    {" "}
                    Sim{" "}
                  </Button>
                  <Button className="w-1/2" color={"white"} bg={Colors.brand1}>
                    Não
                  </Button>
                </div>
                <div className="flex flex-col gap-[8px]">
                  <FormLabel className="font-inter font-medium">
                    Imagem de Capa
                  </FormLabel>
                  <Input
                    className="w-full border-grey-600 rounded-lg"
                    type="text"
                  />
                  <FormLabel className="font-inter font-medium">
                    1ª imagem da galeria
                  </FormLabel>
                  <Input
                    className="w-full border-grey-600 rounded-lg"
                    type="text"
                  />
                  <FormLabel className="font-inter font-medium">
                    2ª imagem da galeria
                  </FormLabel>
                  <Input
                    className="w-full border-grey-600 rounded-lg"
                    type="text"
                  />
                  {imagesNumber ? (
                    <>
                      {imagesNumber.map((e) => (
                        <>
                          <FormLabel className="font-inter font-medium">
                            imagem extra
                          </FormLabel>
                          <Input
                            className="w-full border-grey-600 rounded-lg"
                            type="text"
                          />
                        </>
                      ))}
                    </>
                  ) : null}
                  {imagesNumber.length < 3 ? (
                    <>
                      <Button
                        onClick={addImage}
                        bg={Colors.brand3}
                        color={Colors.brand4}
                      >
                        Adicionar campo para imagem da galeria
                      </Button>
                    </>
                  ) : null}
                </div>
              </FormControl>
            </ModalBody>
          </form>
          <ModalFooter>
            <Button
              onClick={onCloseEditCar}
              bg={Colors.grey6}
              h="49px"
              color={Colors.grey2}
              padding={"8px"}
              borderRadius={"0.5rem"}
              className="w-1/2"
            >
              Excluir Anúncio
            </Button>
            <Button
              type="submit"
              bg={Colors.brand3}
              h="49px"
              color={Colors.brand4}
              padding={"8px"}
              borderRadius={"0.5rem"}
              marginLeft={"15px"}
              className="w-1/2"
            >
              Salvar alterações
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}