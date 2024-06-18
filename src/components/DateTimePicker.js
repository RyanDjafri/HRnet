import React, { useState } from "react";
import moment from "moment";
moment.locale("en");

const DateTimePicker = ({ onChange, value }) => {
  const [selectedDate, setSelectedDate] = useState(
    value ? moment(value) : moment()
  );

  const handleDateChange = (event) => {
    const date = moment(event.target.value, "YYYY-MM-DD");
    if (date.isValid()) {
      const newDate = moment(date).startOf("day");
      setSelectedDate(newDate);
      if (onChange) {
        onChange(newDate);
      }
    }
  };

  return (
    <div className="datetime-picker">
      <div className="picker-dropdown">
        <input
          type="date"
          value={selectedDate.format("YYYY-MM-DD")}
          onChange={handleDateChange}
        />
      </div>
    </div>
  );
};

export default DateTimePicker;
