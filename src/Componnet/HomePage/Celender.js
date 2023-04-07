import React from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
function Calendar() {
  const events = [
    { title: 'Meeting', start: new Date() }
  ]
  return (
    <div className="calendar">
      <div className="row">
        <div className="col-lg-8 col-md-12 col-12">
          <Fullcalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView={"dayGridMonth"}
            events={events}
            headerToolbar={{
              start: "today prev,next", // will normally be on the left. if RTL, will be on the right
              center: "title",
              end: "dayGridMonth,timeGridWeek,timeGridDay", // will normally be on the right. if RTL, will be on the left
            }}
            height={"70vh"}
          />
        </div>
        <div className="col-lg-4 col-md-12 col-12">
          <div className='booking_section'>
            <h6>MAKE A BOOKING</h6>
            <h6>DATE</h6>
            <div className='date_section'>
              <p className='date'>TODAY</p>
              <p className='date'>TOMORROW</p>
              <p className='date'>WEEK</p>
              <p className='date'>MONTH</p>
            </div>
            <h6>TIME</h6>
            <div className='date_section'>
              <p className='date'>10:00 AM</p>
              <p className='date'>12:30 PM</p>
              <p className='date'>3:30 PM</p>
              <p className='date'>5:30 PM</p>
            </div>
            <h6>SELECT SHOOT</h6>
            <select className='select'>
              <option>PRODUCT SHOOT</option>
              <option>CREATIVE DIRECTOR</option>
              <option>PHOTOGRAPHY</option>
              <option>VEDIO SHOOT</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Calendar;