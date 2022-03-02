import _ from "lodash";
import React, { Dispatch } from "react";
import { Box, CheckIcon, Select } from "native-base";

interface TypePickerProps {
  selectedValue: string;
  setSelectedValue: Dispatch<React.SetStateAction<string>>;
  personals: Item[];
}

interface Item {
  type: string;
  name: string;
  id: number;
}

export const TypePicker: React.VFC<TypePickerProps> = ({
  selectedValue,
  setSelectedValue,
  personals,
}) => {
  return (
    <Box w="3/4" maxW="300">
      <Select
        selectedValue={selectedValue}
        minWidth="200"
        accessibilityLabel="タイプを選んでください"
        placeholder="タイプを選んでください"
        _selectedItem={{
          bg: "secondary.400",
          endIcon: <CheckIcon size="5" />,
        }}
        mt={2}
        mb={2}
        p={4}
        onValueChange={(type) => setSelectedValue(type)}
      >
        {_.map(personals, (personal) => {
          return (
            <Select.Item
              label={personal.name + "：" + personal.type}
              value={personal.type}
            />
          );
        })}
      </Select>
    </Box>
  );
};
