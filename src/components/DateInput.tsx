import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import CalendarIcon from "./CalendarIcon";
import CloseIcon from "./CloseIcon";
import { useState } from "react";

interface DateInputProps {
  value: Date;
  onChange: (value: Date) => void;
  placeholder?: string;
}

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function DateInput({
  value,
  onChange,
  placeholder = "mm/dd/yyyy",
}: DateInputProps) {
  const [calendarValue, setCalendarValue] = useState<Value>(null);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const onCalendarIconClick = () => setIsCalendarOpen((prev) => !prev);
  const onCalendarCloseIconClick = () => setCalendarValue(() => null);

  const onDayClick = (value: Value) => {
    setCalendarValue(() => value);
    if (value instanceof Date) onChange(value);
    setIsCalendarOpen(() => false);
  };

  const getDate = () => {
    let date = "";
    if (calendarValue && calendarValue instanceof Date)
      date =
        "" +
        calendarValue.getDate() +
        "_" +
        calendarValue.getMonth() +
        "_" +
        calendarValue.getFullYear();

    return date;
  };

  return (
    <div className="flex border border-bg1 rounded overflow-x-visible text-s font-roboto">
      <input
        readOnly
        defaultValue={getDate()}
        placeholder={placeholder}
        className="flex items-center px-2 py-1.5 text-grey focus:outline-none focus:ring-2 focus:ring-accent text-sm w-27.5"
      />
      <div className="w-px bg-bg1" />
      <div className="flex items-stretch bg-bg2 relative overflow-visible">
        <button
          type="button"
          className="flex items-center justify-center w-6 cursor-pointer hover:bg-gray-200 transition-colors"
          onClick={onCalendarCloseIconClick}
        >
          <CloseIcon />
        </button>
        <div className="w-px bg-bg1" />
        <button
          type="button"
          className="flex items-center justify-center w-6 cursor-pointer hover:bg-gray-200 transition-colors"
          onClick={onCalendarIconClick}
        >
          <CalendarIcon />
        </button>
        {isCalendarOpen && (
          <Calendar
            defaultValue={value}
            className="absolute max-w-60! top-10 -left-40 z-10"
            onChange={onDayClick}
            value={calendarValue}
          />
        )}
      </div>
    </div>
  );
}
