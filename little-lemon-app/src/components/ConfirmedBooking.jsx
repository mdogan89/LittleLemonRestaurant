import React from 'react'

export default function ConfirmedBooking(props) {
    return (
        <main>
            <section id="confirm">
                <h2>Your booking has been confirmed!</h2>
                <h2>For {props.confirmedBookings.name}, on {props.confirmedBookings.date} - {props.confirmedBookings.time}, for {props.confirmedBookings.guests} people.</h2>
            </section>
        </main>
    )
}
