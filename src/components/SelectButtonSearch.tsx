import React, { useState } from "react";
import { ENDPOINT, sendRequest } from "../screens/searchScreens/SearchScreen";
import { Button, Heading, Modal, ScrollView, Text } from "native-base";
import { PersonalDetails } from "../types/types";

interface SelectButtonSearchProps {
  type: string;
  btnName: string;
}

export const SelectButtonSearch: React.VFC<SelectButtonSearchProps> = ({
  type,
  btnName,
}) => {
  const [isloading, setIsLoading] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [personal, setPersonal] = useState<PersonalDetails>();

  const handleClick = () => {
    setModalVisible(!modalVisible);
  };

  const onSubmit = async () => {
    const requestURL = ENDPOINT + type;
    setIsLoading(true);
    const personalDetails = await sendRequest(requestURL);
    setPersonal(personalDetails);
    setIsLoading(false);
    setModalVisible(!modalVisible);
  };

  return (
    <>
      {isloading ? (
        <Button
          isLoading
          w="90%"
          variant="outline"
          mt={2}
          h={20}
          onPress={onSubmit}
        >
          Loading
        </Button>
      ) : (
        <>
          <Modal isOpen={modalVisible} onClose={handleClick} size="xl">
            <Modal.Content maxH="75%">
              <Modal.CloseButton />
              <Modal.Header>{type + "：" + personal?.name}</Modal.Header>
              <Modal.Body>
                <ScrollView>
                  <Text>{personal?.description}</Text>
                </ScrollView>
              </Modal.Body>
            </Modal.Content>
          </Modal>
          <Button w="90%" mt={2} h={20} bg="info.400" onPress={onSubmit}>
            <Heading color="light.50" bold>
              {btnName}
            </Heading>
          </Button>
        </>
      )}
    </>
  );
};
