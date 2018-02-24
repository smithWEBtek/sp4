import React, { Component } from 'react'
import { Grid, Row, Col, Carousel } from 'reactstrap'
import './Lessons.css'

class Lessons extends Component {
	render() {
		return (
			<Grid className="GridLeft">
				<Row className="show-grid">
					<Col xs={12} md={8}>
						<code>&lt;{'Col xs={12} md={8}'} /&gt;</code>
					</Col>
					<Col xs={6} md={4}>
						<code>&lt;{'Col xs={6} md={4}'} /&gt;</code>
					</Col>
				</Row>
				<Row>
					<Carousel>
						<Carousel.Item>
							<img width={900} height={500} alt="900x500" src="../Assets/Images/gig/cantina1.jpg" alt="latina cantina" />
						</Carousel.Item>

						<Carousel.Item>
							<img width={900} height={500} alt="900x500" src="../Assets/Images/brad-smith-cover.jpg" alt="ugly mug" />
						</Carousel.Item>

						<Carousel.Item>
							<img width={900} height={500} alt="900x500" src="../Assets/Images/doctor6.jpg" alt="piano doctor" />
						</Carousel.Item >
					</Carousel >
				</Row>
				<div>
					<a href="./docs/policy.pdf">Studio Policy</a><br />
					<a href="./docs/staff_blank.pdf">Staff - blank</a><br />
					<a href="./docs/piano_melody.pdf">Staff - piano & melody</a><br />
					<a href="./docs/staff_4bar_single.pdf">Staff - 4bar single</a><br />
					<a href="./docs/staff_4bar_double.pdf">Staff - 4bar double</a><br />
				</div>

				<div>
					<h4><strong>Berklee College graduate with 30+ years professional playing experience.</strong></h4>
					<h5>Private lessons in jazz piano, improvisation, harmony for students ages 14 and up.</h5>
					<h5>Based in the jazz approach to learning, these lessons are applicable to any style of music.</h5>
					<p><strong>Who will benefit from these lessons?</strong></p>
				</div>
				<div>
					<ul>
						Intermediate to advanced piano students, and jazz piano enthusiasts
						Classical piano teachers
						Vocalists
						Musicians involved in playing and teaching Religious/Sacred Music
						Professional Instrumentalists (non-pianists)
					</ul>
					<strong>What types of goals can be accomplished with these lessons?</strong>
					<ul>
						Playing, Improvising, Repertoire & Styles
						Improvisation and harmony in various styles of music
						Playing in a variety of styles without sheet music vs. ‘classical-only-all-written-music’ lessons
						Playing a set of Christmas carols, Beatles, Elton John, Billy Joel or show tunes just for FUN!Writing, arranging, leading musical groups
						Write your own music or arrangements for auditions and gigs
						Learn to accompany yourself on the piano
						Learn chords, scales, harmony & jazz theory
						Musical tools for versatility leading & playing with professional musicians Teaching Approaches and New Opportunities
						Draw from principles learned in jazz to playing, improvising, writing, and teaching
						Enhance classical playing by integrating principles learned in jazz
						Add a simplified, organic approach to teaching methods, to reach more students
						Put away the sheet music, playing and teaching from a different kind of ‘memory’
						Expand your offerings, teaching a wider range of musical styles
						Use the study of jazz piano, to develop within any style of playingCollege prep for future music majors
						Playing professionally as a solo pianist, or accompanist
					</ul>
				</div>
			</Grid >
		)
	}
}


export default Lessons
