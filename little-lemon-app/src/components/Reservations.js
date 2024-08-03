import { React, useState } from 'react';
// import glassss from "./img/glass.svg"


export default function Reservations(props) {

  const minDate = new Date().toISOString().substring(0, 10);

  const [formData, setFormData] = useState({
    name: '',
    date: minDate,
    time: props.availableTimes[0],
    guests: 1,
    occasion: "Occasion"
  })

  const handleFormChange = (e, type) => {

    setFormData((formdata) => {
      return { ...formdata, [type]: e.target.value }
    });


  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitForm(formData);

  }

  const validateInput = (e) => {

    const sub = document.getElementById("submit");

    if (e.target.validity.valid) {
      sub.style.backgroundColor = "#f4ce14";
      sub.style.color = "#333333";
    }
    else {
      e.target.reportValidity();
      sub.style.backgroundColor = "#495e57";
      sub.style.color = "#edefee";
    }
  }


  // console.log("test", formData)
  return (
    <section id="res-section">
      <form id="res-form" data-testid="form" onSubmit={handleSubmit}>
        <label htmlFor='name'>Your name:</label>
        <input type='text' id='name' name='name' value={formData.name} min={3} max={255} onChange={(e) => handleFormChange(e, 'name')} required onBlur={validateInput} />
        <label htmlFor="res-date">Choose date:</label>
        <input type="date" id="res-date" name="date" value={formData.date} min={minDate} onChange={(e) => handleFormChange(e, "date")} onBlur={validateInput} required />
        <label htmlFor="res-time">Choose time:</label>
        <select data-testid="select" id="res-time" name="time" value={formData.time} onChange={(e) => handleFormChange(e, "time")} required={true} aria-label="On Click">
          {props.availableTimes.map((time) => (
            <option data-testid="select-option" key={time}>{time}</option>
          ))}
        </select>
        <label htmlFor="guests">Number of guests:</label>
        <input type="number" placeholder="1-10" min="1" max="10" id="guests" name="guests"
          value={formData.guests} onChange={(e) => handleFormChange(e, "guests")} onBlur={validateInput} required />
        <label htmlFor="occasion">Occasion:</label>
        <select id="occasion" value={formData.occasion} onChange={(e) => handleFormChange(e, "occasion")} name="occasion">
          <option id="Occasion" value="Occasion">Occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Engagement">Engagement</option>
          <option value="Other">Other</option>
        </select>
        <input id="submit" type="submit" value="Make your reservation" />
      </form>
    </section>
  )
}

