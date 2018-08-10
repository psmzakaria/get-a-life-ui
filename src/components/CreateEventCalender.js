import React, { Component } from "react";
import InfiniteCalendar, { Calendar, withRange } from "react-infinite-calendar";
import "react-infinite-calendar/styles.css"; // only needs to be imported once

var today = new Date();
var aYearFromToday = new Date(
  today.getFullYear() + 1,
  today.getMonth(),
  today.getDate()
);

class CreateEventCalender extends Component {
  constructor() {
    super();
    this.state = {
      startDate: null,
      endDate: null
    };
  }

  handleCalendarSelect = async date => {
    if (date.eventType === 3) {
      await this.setState({
        startDate: date.start,
        endDate: date.end
      });
      this.props.handleCalendarDates(this.state.startDate, this.state.endDate);
    }
  };

  render() {
    return (
      <div>
        <InfiniteCalendar
          Component={withRange(Calendar)}
          displayOptions={{
            showHeader: false
          }}
          autoFocus={false}
          width={
            window.innerWidth <= 650
              ? window.innerWidth * 0.85
              : window.innerWidth * 0.6
          }
          height={window.innerHeight - 450}
          rowHeight={65}
          min={today}
          max={aYearFromToday}
          minDate={today}
          selected={{
            start: this.state.startDate,
            end: this.state.endDate
          }}
          onSelect={this.handleCalendarSelect}
          theme={{
            selectionColor: "rgb(146, 118, 255)",
            textColor: {
              default: "#333",
              active: "#FFF"
            },
            weekdayColor: "rgb(146, 118, 255)",
            headerColor: "rgb(127, 95, 251)",
            floatingNav: {
              background: "rgba(81, 67, 138, 0.96)",
              color: "#FFF",
              chevron: "#FFA726"
            }
          }}
        />
      </div>
    );
  }
}

export default CreateEventCalender;
