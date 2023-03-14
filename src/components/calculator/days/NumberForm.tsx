import React, { useEffect, useMemo, useState } from "react";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import styled from "@emotion/styled";

interface Props {
  type: "year" | "month" | "day";
  defaultValue: number;
  value?: number;
  onChange?: (value: number) => void;
}

export function NumberForm({ type, defaultValue, value, onChange }: Props) {
  const [_value, _setValue] = useState<number>(defaultValue);

  const range = useMemo(() => {
    if (type === "year") return { max: 9999, min: 1800 };
    if (type === "month") return { max: 12, min: 1 };
    return { max: 31, min: 1 };
  }, [type]);

  const handleChange = (num: number) => {
    _setValue(num);
    onChange && onChange(num);
  };

  useEffect(() => {
    if (!value) return;
    _setValue(value);
  }, [value]);

  return (
    <Wrap>
      <NumberInput
        max={range.max}
        min={range.min}
        clampValueOnBlur={false}
        onChange={(_, num) => handleChange(num)}
        value={_value}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </Wrap>
  );
}

const Wrap = styled.div`
  .chakra-numberinput {
    max-width: 100px;
  }
`;
