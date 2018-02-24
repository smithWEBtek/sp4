import React, { Component } from 'react'
import Img from 'react-image'
import { Col, Container, Row } from 'reactstrap'
import './Lessons.css'
import Aux from '../hoc/Aux'

class Lessons extends Component {

	render() {


		return (
			// <Container>
			// 	<Row>
			// 		<Img src="http://res.cloudinary.com/smithwebtek/image/upload/v1519490185/sp-site/recording-MichaelBlum-Initiation3.jpg" />
			// 		<Img src="http://res.cloudinary.com/smithwebtek/image/upload/v1519490185/sp-site/piano-teaching.bmp" />
			// 		<Img src="http://res.cloudinary.com/smithwebtek/image/upload/v1519490184/sp-site/piano-doctor-couch.jpg" />
			// 	</Row>
			// </Container >

			<Container>
				<Row>
					<Col xs="3">
						<div>
							<a href="./docs/policy.pdf">Studio Policy</a><br />
							<a href="./docs/staff_blank.pdf">Staff - blank</a><br />
							<a href="./docs/piano_melody.pdf">Staff - piano and melody</a><br />
							<a href="./docs/staff_4bar_single.pdf">Staff - 4bar single</a><br />
							<a href="./docs/staff_4bar_double.pdf">Staff - 4bar double</a><br />
						</div>
					</Col>
					<Col xs="9">
						<div>
							<h4><strong>Berklee College graduate with 30+ years professional playing experience.</strong></h4>
							<h5>Private lessons in jazz piano, improvisation, harmony for students ages 14 and up.</h5>
							<h5>Based in the jazz approach to learning, these lessons are applicable to any style of music.</h5>
							<p><strong>Who will benefit from these lessons?</strong></p>
						</div>
						<div>
							<ul>
								<li>Intermediate to advanced piano students, and jazz piano enthusiasts</li>
								<li>Classical piano teachers</li>
								<li>Vocalists</li>
								<li>Musicians involved in playing and teaching Religious/Sacred Music</li>
								<li>Professional Instrumentalists (non-pianists)</li>
							</ul>
							<h4><strong>What types of goals can be accomplished with these lessons?</strong></h4>
							<ul>
								<li>Playing, Improvising, Repertoire and Styles</li>
								<li>Improvisation and harmony in various styles of music</li>
								<li>Playing in a variety of styles without sheet music vs. ‘classical-only-all-written-music’ lessons</li>
								<li>Playing a set of Christmas carols, Beatles, Elton John, Billy Joel or show tunes just for FUN!Writing, arranging, leading musical groups</li>
								<li>Write your own music or arrangements for auditions and gigs</li>
								<li>Learn to accompany yourself on the piano</li>
								<li>Learn chords, scales, harmony and jazz theory</li>
								<li>Musical tools for versatility leading and playing with professional musicians Teaching Approaches and New Opportunities</li>
								<li>Draw from principles learned in jazz to playing, improvising, writing, and teaching</li>
								<li>Enhance classical playing by integrating principles learned in jazz</li>
								<li>Add a simplified, organic approach to teaching methods, to reach more students</li>
								<li>Put away the sheet music, playing and teaching from a different kind of ‘memory’</li>
								<li>Expand your offerings, teaching a wider range of musical styles</li>
								<li>Use the study of jazz piano, to develop within any style of playingCollege prep for future music majors</li>
								<li>Playing professionally as a solo pianist, or accompanist</li>
							</ul>
						</div>
					</Col>
				</Row>
			</Container>
		)
	}
}

export default Lessons
