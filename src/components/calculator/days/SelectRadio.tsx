import {
  Radio,
  RadioGroup,
  useRadio,
  Box,
  useRadioGroup,
  HStack,
} from "@chakra-ui/react";

interface Props {
  options: string[];
  defaultValue?: string;
  value?: string;
  onChange?: (value: string) => void;
}

function RadioCard(props: any) {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: "teal.600",
          color: "white",
          borderColor: "teal.600",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={3.5}
        py={2}
      >
        {props.children}
      </Box>
    </Box>
  );
}

export function SelectRadio({ options, defaultValue, value }: Props) {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "framework",
    defaultValue: defaultValue ?? "",
    onChange: console.log,
  });
  const group = getRootProps();

  return (
    <HStack {...group}>
      {options.map((_value) => {
        const radio = getRadioProps({ _value });
        return (
          <RadioCard key={_value} {...radio}>
            {_value}
          </RadioCard>
        );
      })}
    </HStack>
  );
}
