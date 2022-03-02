import React, { useState } from "react";
import { Button, Heading, Modal, ScrollView } from "native-base";
import { Text } from "native-base";

interface SelectButtonProps {
  name: string;
  description: string;
  btnName: string;
}

export const SelectButton: React.VFC<SelectButtonProps> = ({
  name,
  description,
  btnName,
}) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const handleClick = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <>
      <Modal isOpen={modalVisible} onClose={handleClick} size="xl">
        <Modal.Content maxH="75%">
          <Modal.CloseButton />
          <Modal.Header>{name}</Modal.Header>
          <Modal.Body>
            <ScrollView>
              <Text>{description}</Text>
            </ScrollView>
          </Modal.Body>
        </Modal.Content>
      </Modal>
      <Button
        w="90%"
        mt={2}
        h={20}
        bg="info.400"
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Heading color="light.50" bold>
          {btnName}
        </Heading>
      </Button>
    </>
  );
};
