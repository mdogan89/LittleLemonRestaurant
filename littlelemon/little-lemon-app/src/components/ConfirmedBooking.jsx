import React from 'react'

export default function ConfirmedBooking(props) {
    return (
        <main>
            <section id="confirm">
                <h2>Your booking has been confirmed!</h2>
                <h2>For {props.confirmedBookings.formData.name}, on {props.confirmedBookings.formData.date} - {props.confirmedBookings.formData.time}, for {props.confirmedBookings.formData.guests} people.</h2>
            </section>
        </main>
    )
}
