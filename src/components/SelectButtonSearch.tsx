import React, { useState } from "react";
import { ENDPOINT, sendRequest } from "../screens/searchScreens/SearchScreen";
import { Button } from "native-base";

interface SelectButtonSearchProps {
  type: string;
  btnName: string;
}

export const SelectButtonSearch: React.VFC<SelectButtonSearchProps> = ({
  type,
  btnName,
}) => {
  const [isloading, setIsLoading] = useState<boolean>(false);
  const onSubmit = async () => {
    const requestURL = ENDPOINT + type;
    setIsLoading(true);
    const personalDetails = await sendRequest(requestURL);
    setIsLoading(false);
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
          bg="info.400"
          onPress={onSubmit}
        >
          Loading
        </Button>
      ) : (
        <Button w="90%" mt={2} h={20} bg="info.400" onPress={onSubmit}>
          {btnName}
        </Button>
      )}
    </>
  );
};
