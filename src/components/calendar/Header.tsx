import { format } from "date-fns";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import styled from "@emotion/styled";

interface Props {
  currentMonth: Date;
  onPrevMonth: () => void;
  onNextMonth: () => void;
}

export const Header = ({ currentMonth, onPrevMonth, onNextMonth }: Props) => {
  return (
    <Container>
      <div className="date-box">
        <span className="text">
          {format(currentMonth, "M")}월
          <span className="year">{format(currentMonth, "yyyy")}</span>
        </span>
      </div>
      <div className="control-box">
        <Button variant="ghost" onClick={() => onPrevMonth()}>
          <ArrowBackIcon />
        </Button>
        <Button variant="ghost" onClick={() => onNextMonth()}>
          <ArrowForwardIcon />
        </Button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  .date-box {
    .text {
      font-weight: bold;
      font-size: 24px;
      .year {
        font-size: 16px;
        margin-left: 8px;
      }
    }
    .month {
    }
  }
  .control-box {
  }
`;
