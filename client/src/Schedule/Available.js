import React, { Component } from 'react'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import '../../node_modules/react-big-calendar/lib/css/react-big-calendar.css'
import './Schedule.css'
BigCalendar.momentLocalizer(moment)

class Available extends Component {
	state = {
		dateStart: '',
		dateEnd: '',
		dates: []
	}

	render() {
		let myEvents = []

		const eventsArr = () => {
			let ct = 3
			setTimeout(() => {
				for (let i = 0; i < ct; i++) {
					let evt = moment()
					myEvents.push(evt)
				}
			}, 1000)
			return myEvents
		}

		eventsArr()

		console.log('[myEvents]', myEvents);

		return (
			<div>
				<BigCalendar
					className='BigCal'
					culture='en-GB'
					events={myEvents}
					startAccessor='startDate'
					endAccessor='endDate'
					views={['day', 'week', 'month']}
				/>
			</div>
		)
	}
}

export default Available