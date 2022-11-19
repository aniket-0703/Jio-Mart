import { Text } from "@chakra-ui/react";
import React from "react";

const capitalize = (word) =>
  `${word[0].toUpperCase()}${word.substring(1, word.length)}`;

export default function Path({ product_category }) {
  return (
    <Text fontSize="sm" ml={10} pt={3}>
      {`Home > AllCategories > ${capitalize(product_category)}`}
    </Text>
  );
}
