import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'

class ApptQuest extends Component {
	render() {
		return (
			<Container>
				<Row>
					<Col xs={6} md={4} />
					<h3>SCHEDULE PIANO SERVICE</h3>
					<ol>
						<li>Choose SCHEDULE below.</li>
						<li>LOGIN if you returning, or REGISTER if this is first time.</li>
						<li>End with <strong>MAKE APPOINTMENT</strong> button to complete scheduling.</li>
						<li>Find your confirmation email to be sure the process completed.</li>
					</ol>
					<ul>
						<li>Unsure? Call Brad: <strong>603-494-4147</strong></li>
						<li>or <a href="mailto:schedule@smithpiano.com?subject=%20Please%20call%20me%20to%20schedule%20piano%20service%20&body=Brad,%20please%20call%20me%20to%20schedule.  %20My%20phone%20number%20is:____ %20and%20the%20best%20time%20to%20call%20back%20is:____"><strong>CLICK HERE to email Brad</strong></a></li>
					</ul>
					<Col xs={6} md={4} />
					<h3>PRICING GUIDE</h3>
					<ul>
						<li>First time, or annual service: $150-200 estimated*</li>
						<li>Bi-annual maintainence, returning client: $135-150 estimated</li>
						<li>* NOTE: Your mileage may vary.</li>
						<li>We'll weigh options together after examining the piano and talking.</li>
						<li>In some cases, the costs outweigh the wisdom of investing in a given piano.</li>
						<li>I promise that I will keep your best interest as my priority.</li>
					</ul>
				</Row >
				<Row>
					<iframe title="aq-scheduler" src="http://www.appointmentquest.com/scheduler/2170076323" style={{ width: '100%', height: '900px', border: '0' }}>
					</iframe>
				</Row>
			</Container>
		)
	}
}

export default ApptQuest