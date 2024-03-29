import styled from "@emotion/styled";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  isSameMonth,
  isSameDay,
  parse,
  addDays,
  subMonths,
  addMonths,
} from "date-fns";
import { dayCalcDisplay } from "./lunar";
import { useCallback } from "react";

interface Props {
  currentMonth: Date;
  selectedDate: Date;
  isCheckedGoodDay: boolean;
  holidays: any;
}

export const Cells = ({
  currentMonth,
  selectedDate,
  isCheckedGoodDay,
  holidays,
}: Props) => {
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate = "";

  const settingMonth = (day: Date, curMonth: Date) => {
    const targetMonth = Number(format(day, "M"));
    const currentMonth = Number(format(curMonth, "M"));
    const prevMonth = Number(format(subMonths(curMonth, 1), "M"));
    const nextMonth = Number(format(addMonths(curMonth, 1), "M"));
    if (targetMonth > currentMonth) return nextMonth;
    if (targetMonth < currentMonth) return prevMonth;
    return currentMonth;
  };

  // 손없는날 체크
  const isGoodDay = ({ lunar }: { lunar: string | undefined }): boolean => {
    if (!lunar) return false;
    const arr = lunar.split(".");
    const target = Number(arr[arr.length - 1]);
    const GOOD_DAYS = [9, 10, 19, 20, 29, 30];
    return GOOD_DAYS.includes(target);
  };

  const isShowGoodDay = useCallback(
    (lunar: string | undefined): boolean => {
      if (!isCheckedGoodDay) return false;
      if (!true) return false;

      return isGoodDay({ lunar });
    },
    [isCheckedGoodDay]
  );

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, "d");

      const startYear = Number(format(currentMonth, "yyyy"));
      const startMonth = settingMonth(day, currentMonth);
      const startDay = Number(formattedDate);
      const LUNAR_DAY = dayCalcDisplay({
        startYear,
        startMonth,
        startDay,
      });
      const fullDate = `${startYear}-${startMonth
        .toString()
        .padStart(2, "0")}-${startDay.toString().padStart(2, "0")}`;

      days.push(
        <div
          className={`col cell ${
            !isSameMonth(day, monthStart)
              ? "disabled"
              : isSameDay(day, selectedDate)
              ? "selected"
              : format(currentMonth, "M") !== format(day, "M")
              ? "not-valid"
              : "valid"
          }`}
          key={i}
        >
          <div className="date-group">
            <div className="day-box">
              <span
                className={`
              ${
                holidays[fullDate] != null && holidays[fullDate][1] == true
                  ? "text-holy"
                  : ""
              } ${
                  format(currentMonth, "M") !== format(day, "M")
                    ? "text not-valid"
                    : ""
                }`}
                style={{ zIndex: 10, position: "relative" }}
              >
                {formattedDate}
              </span>
              <div
                className={isShowGoodDay(LUNAR_DAY) ? "show" : "hidden"}
                style={{ zIndex: 2 }}
              />
            </div>
            <span className="lunar">{LUNAR_DAY}</span>
          </div>
          <p className="holiday">
            {holidays[fullDate] != null ? holidays[fullDate][0] : ""}
          </p>
        </div>
      );
      day = addDays(day, 1);
    }

    rows.push(
      <div className="row" key={day.toString()}>
        {days}
      </div>
    );
    days = [];
  }

  return <Container>{rows}</Container>;
};

const Container = styled.div`
  width: 100%;
  height: 89%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 2px solid black;
  word-break: break-word;

  .row {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.4px solid gray;

    :last-child {
      border-bottom: 2px solid black;
    }

    .col {
      width: 100%;
      height: 100%;
      display: flex;
      font-weight: 500;
      border-right: 0.4px solid gray;
      :first-child {
        color: red;
      }
      :last-child {
        border-right: none;
      }
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      font-size: 0.8em;

      .date-group {
        display: flex;
        width: 100%;
        padding: 6px 6px 0 6px;
        justify-content: space-between;
        align-items: flex-end;

        .day-box {
          position: relative;

          .show {
            position: absolute;
            top: -6px;
            left: -6px;
            width: 25px;
            height: 25px;
            background: #ffdfd4;
            z-index: 2;
          }

          .hidden {
            display: "none";
          }
        }

        @media (max-width: 600px) {
          flex-direction: column;
          align-items: flex-start;
        }

        .lunar {
          margin: 0;
          color: gray;
          font-size: 0.7em;
        }
      }
      .holiday {
        padding: 2px 6px 0 6px;
        color: red;
        font-size: 0.8em;
      }

      .not-valid {
        color: gray;
        font-size: 0.75em;
      }
      .text-holy {
        color: red;
      }
    }
    .col.cell.valid {
      &:hover {
        cursor: pointer;
        transition: 0.2s ease-in-out;
        font-size: 1em;
      }
    }
    .col.cell.selected {
      background: #f3c5b6;
      color: #aa5b42;
      font-weight: 600;
    }
    .col.cell.disabled {
      background: #f3f3f3;
    }

    @media (max-width: 600px) {
      .row {
        .col {
          .date-group {
          }
        }
      }
    }
  }
`;
