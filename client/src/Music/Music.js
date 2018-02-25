import React, { Component } from 'react'
import { Col, Container, Row } from 'reactstrap'
import './Music.css'
import Img from 'react-image'
import Discography from './Discography'

class Music extends Component {
	render() {
		return (
			<div>
				<Container>
					<Row>
						<Col xs="12">
							<iframe
								title='demo-reel'
								width="300"
								height="180"
								src="https://www.youtube.com/embed/w8kmVYpY-Dc?rel=0"
								// frameBorder="0"
								allowFullScreen></iframe>
							<h3>Brad Smith</h3>
							<h5>II III II III II III II III II III II III II III</h5>
							<p>Pianist, Keyboardist, Accompanist, Musical Director</p>
							<p>Acoustic and Electric Jazz - Funk - Latin - Musical Theater</p>
							<p>Performance, Recording, Touring and Teaching</p>
						</Col>
					</Row>
					<Row>
						<Col xs="12">
							<h5><button><a href="#bio">Bio</a></button> <button><a href="#resume">Resume</a></button> <button><a href="#discography">Discography</a>
							</button><button><a href="#latintrio">LatinTrio</a></button> <button><a href="#latintrio">FunkRockTrio</a></button> <button><a href="#jazzpianotrio">CabaretTrio</a></button> <button><a href="#jazzpianotrio">JazzPianoTrio</a></button> <button><a href="#vanjam">VanJam</a></button> <button><a href="#solopiano">SoloJazzPiano</a></button> <button><a href="#salsa">SalsaGrupo</a></button></h5>
						</Col>
					</Row>
					<Row>
						<Col xs="12">

							<hr />
							<h4>Bio</h4>
							<h5>II III II III II III II III II III II III II III</h5>
							<p><strong>Brad Smith</strong> is a highly regarded professional accompanist, keyboardist and leader in jazz, musical theatre, blues, funk and Latin music in Boston.
								He has worked as a show band pianist on cruise ships, including Premiere (Disney) and Princess cruise lines.
							Notable Boston area performances include cabaret with vocalist Diva Taunia, an early recording with Spanish cabaret star Alphonso Villalonga, jazz with vocalist Janine Graham, performances and recording with British guitarist Conrad Warre (Bees Deluxe trio) and performances with Afro-Latin percussionist Cornell Coley, among others.</p>
							<p>
								In 2007, Brad met Latin jazz guitarist Roderick Camelia, beginning a serious study of Latin music. The Camelia Latin Jazz format requires the keyboardist to play left hand bass with montuno rhythms in the right hand, for salsa, merengue, bachata, samba, cumbia and cha-cha styles. As a result, Brad has worked with the best Latin musicians in Boston including, Angel Wagner (Grupo Fantasia), Willie Colon (Grupo Chevere), Willy Cotto (Orquestra Unicason), Rafy Muriel (Gozarsa), Gilberto Rivera (Rumbanama), Van Lester (musical heir to Hector Lavoe via Fania Records) and concert appearances with Yaure Muniz (lead trumpeter of Afro-Cuban All Stars). Brad has been pianist with Sabor Picante (Ernesto Lugo) since 2012, performing at the Boston Puerto Rican festival in 2014 and the Boston Betances Latin festival annually.</p>
							<p>
								Brad has recorded as a sideman on eight albums in jazz, funk and musical theater.
								He has also been fortunate to work with Berklee faculty member, bassist and arranger Jim Stinnett on multiple recordings and performances in jazz and pop. A career highlight of 2015 was the opportunity for Brad to accompany classical double-bass virtuoso Gary Karr at the NH Bass Festival (thanks to Jim Stinnett) in a variety of formats from Saint-Saëns to Gershwin. The week also included jazz bass legend Eddie Gomez who performed at the festival, with accompanying in duo, trio and quartet formats.</p>
							<p>Brad is available for performing, touring and recording anywhere in the world.</p>
						</Col>
					</Row>

					<Row>
						<Col xs="12">

							<br />
							<button><a href='#top'>top</a></button>
							<hr />
						</Col>
					</Row>
					<Row>
						<Col xs="4">
							<h3>Latin Keyboard Trio</h3>
							<h5>II III II III II III II III II III II III II III</h5>
							<p>Keyboard w/left-hand bass, guitar, percussion.</p>
							<iframe title='asdf1' width="300" height="552" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/207133298andamp;color=%23ff5500andamp;auto_play=falseandamp;hide_related=falseandamp;show_comments=trueandamp;show_user=trueandamp;show_reposts=false"></iframe>
						</Col>
						<Col xs="8">
							<a name='funktrio'></a>
							<h3>Funk Rock Trio</h3>
							<h5>II III II III II III II III II III II III II III</h5>
							<p>Keyboard w/left-hand bass, electric guitar, drums</p>
							<iframe title='asdf2' width="300" height="180" src="https://www.youtube.com/embed/KhY47CvgsQ4" frameBorder="0" allowFullScreen="yes"></iframe>
							<iframe title='asdf3' width="300" height="180" src="https://www.youtube.com/embed/sn3P9Ei58D0" frameBorder="0" allowFullScreen="yes"></iframe>
							<iframe title='asdf4' width="300" height="180" src="https://www.youtube.com/embed/WSEFKzdlrGM" frameBorder="0" allowFullScreen="yes"></iframe>
							<iframe title='asdf5' width="300" height="180" src="https://www.youtube.com/embed/Q1KJ5Mxnaps" frameBorder="0" allowFullScreen="yes"></iframe>
							<iframe title='asdf6' width="300" height="180" src="https://www.youtube.com/embed/keS0riw3nHw" frameBorder="0" allowFullScreen="yes"></iframe>
						</Col>
					</Row>

					<Row>
						<Col xs="12">
							<br /><br />
							<a name='jazzpianotrio'></a>
							<button><a href='#top'>top</a></button>
							<hr />
						</Col>
						<Col xs="4">
							{/* <a name='cabaret'></a> not needed, using 'jazzpianotrio' link to get here */}
							<h3>Cabaret Trio</h3>
							<h5>II III II III II III II III II III II III II III</h5>
							<p>Vocalist, keyboards w/left-hand bass, drums</p>
							<iframe width="300" height="180" src="https://www.youtube.com/embed/sZfEtsbbtHA" frameBorder="0" allowFullScreen="yes"></iframe>
							<iframe width="300" height="180" src="https://www.youtube.com/embed/Behsbq2fRio?rel=0" frameBorder="0" allowFullScreen></iframe>
							<iframe width="300" height="180" src="https://www.youtube.com/embed/GkKpxkcFPvw?rel=0" frameBorder="0" allowFullScreen></iframe>

						</Col>
						<Col xs="4">
							<h3>Jazz Piano Trio</h3>
							<h5>II III II III II III II III II III II III II III</h5>
							<p>Piano, bass, drums (various trios)</p>
							<iframe width="300" height="540" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/207141804andamp;color=%23ff5500andamp;auto_play=falseandamp;hide_related=falseandamp;show_comments=trueandamp;show_user=trueandamp;show_reposts=false"></iframe>
						</Col>
						<Col xs="4">
							<iframe width="300" height="180" src="https://www.youtube.com/embed/b3FDVFas-wY" frameBorder="0" allowFullScreen></iframe>
							<iframe width="300" height="180" src="https://www.youtube.com/embed/uHAVx-BdAbg" frameBorder="0" allowFullScreen></iframe>
							<iframe width="300" height="180" src="http://www.ustream.tv/embed/recorded/108639266?html5ui" frameBorder="0" allowFullScreen></iframe>
							<p>Trio Concert: Zachary Winter (bass), Joe Hunt (drums): Tribute to Ray Brown</p>
						</Col>
					</Row>

					<Row>
						<Col xs="12">
							<br /><br />
							<a name='vanjam'></a>
							<button><a href='#top'>top</a></button>
							<hr />
							<h3>Van Jam Trio</h3>
							<h5>II III II III II III II III II III II III II III</h5>
							<p>keyboards, bass, drums trio playing in the van, various locations in Boston and Cambridge</p>
							<iframe width="300" height="200" src="https://www.youtube.com/embed/LzFNFoEXU0g" frameBorder="0" allowFullScreen></iframe>
							<iframe width="300" height="200" src="https://www.youtube.com/embed/tifEHy6QM_8" frameBorder="0" allowFullScreen></iframe>
							<iframe width="300" height="200" src="https://www.youtube.com/embed/LQKqf6At6ko" frameBorder="0" allowFullScreen></iframe>
						</Col>
					</Row>

					<Row>
						<Col xs="12">
							<br /><br />
							<a name='solopiano'></a>
							<button><a href='#top'>top</a></button>
							<hr />
							<h3>Solo Jazz Piano</h3>
							<h5>II III II III II III II III II III II III II III</h5>
						</Col>
						<Col xs="4">
							<iframe width="300" height="540" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/207129494andamp;color=%23ff5500andamp;auto_play=falseandamp;hide_related=falseandamp;show_comments=trueandamp;show_user=trueandamp;show_reposts=false"></iframe>
						</Col>
						<Col xs="8">
							<iframe width="300" height="215" src="https://www.youtube.com/embed/8Sl2DtChnw4" frameBorder="0" allowFullScreen></iframe>
						</Col>
					</Row>
				</Container>
				<Container>
					<Row>
						<Col xs="12">
							<br /><br />
							<a name='salsa'></a>
							<button><a href='#top'>top</a></button>
							<hr />
							<h3>Salsa Grupo</h3>
							<h5>II III II III II III II III II III II III II III</h5>
							<iframe width="300" height="250" src="https://www.youtube.com/embed/j7PBcEiBrck" frameBorder="1" allowFullScreen></iframe>
							<iframe width="300" height="250" src="https://www.youtube.com/embed/unSYVFLMaK8" frameBorder="1" allowFullScreen></iframe>
							<iframe width="300" height="250" src="https://www.youtube.com/embed/VzhjMeHs_5o" frameBorder="1" allowFullScreen></iframe>
						</Col>
					</Row>
					<Row>
						<Col xs="12">
							<a name='resume' />
							<button><a href='#top'>top</a></button>
							<hr />
							<h3>Resume</h3>
						</Col>
					</Row>
					<Row>
						<Col xs="12">
							<h3>EDUCATION</h3>
							<ul>
								<li>Private lessons in Jazz Improvisation with Charlie Banacos, Boston, MA 1988-1990</li>
								<li>Classical Piano and Weight Technique with Kathy Rand, Boston Conservatory, 1987-1989</li>
								<li>B.A. Degree, Professional Music, Berklee College of Music, Boston, MA, 1985</li>
								<li>Jazz piano and improvisation with Mike Marra, Boston, MA 1984-1985</li>
								<li>Master class and private lessons with pianist Ken Werner, Boston, MA 1984</li>
								<li>Classical piano with Dr. George Mulder, Interlochen Arts Academy, Interlochen, Michigan 1973-1977</li>
							</ul>

							<h3>EXPERIENCE</h3>
							<ul>
								<li>Pianista para Sabor Picante, Salsa y Latin Jazz, 2012-2017</li>
								<li>Jazz Piano Trio concert with Zach Winter (bass), Joe Hunt(drums), Boston Oct 2017</li>
								<li>Pianist with Carlos Torres' Mambo Magic, Festival Betances, Boston 2016</li>
								<li>Accompanist for Royal Carribean Cruise Lines, Boston auditions, Summer 2016</li>
								<li>Pianist with Camelia Latin Jazz Quintet, Festival Betances, Boston 2015</li>
								<li>Accompanist with classical virtuoso bassist Gary Karr, NH Bass Fest 2015</li>
								<li>Duo, trio and quartet performances with jazz bass legend Eddie Gomez, NH Bass Fest 2015</li>
								<li>Pianist with Afrika Gente, afro-Latin jazz, various performances 2015-16</li>
								<li>Duo with African drummer Cornell Coley (Afrika Gente leader) 2015-16</li>
								<li>Pianist with Willie Cotto y Orquesta Unicason, Worcester, MA 2014</li>
								<li>Pianist with Salsa singer Van Lester at Boston Puerto Rican Festival 2014</li>
								<li>Pianist with Rafael Muriel Salsa Grupo at Festival Betances, Boston 2014</li>
								<li>Pianist with Sabor Picante, Festival Betances, Boston, 2014</li>
								<li>Keys and keyboard bass with Dominique Dinardo and Reid Trevaskas, N’awlins, Manchester, NH 2013-2014</li>
								<li>Keyboardist with Manchuka 10 piece funk dance band 2009 and 2014</li>
								<li>Jazz piano and keyboards with Stan Johnson, Chops Turner and Lori Dow, Boston, MA 2012-2014</li>
								<li>Jazz piano and organ with Don Altobello Jazz Sextet, Boston, MA 2012-2014</li>
								<li>Jazz piano with Richard Hale Shaw and Jazz Continuum, Boston MA 2012-2014</li>
								<li>Jazz piano with Bopkick Jazz Quartet, Boston area 2009-2014</li>
								<li>Pianist with Salsa artists Jose Salgado and Gilberto Rivera’s Rhumbanama, Lowell Puerto Rican Festival 2013</li>
								<li>Keyboards with Sweet Willie D, swing, gospel, Blues and Soul quintet, Boston, MA 2013</li>
								<li>Keyboards and Keys Bass with Bees Deluxe, blues-funk-rock trio, Boston, MA 2012-2013</li>
								<li>Keyboards and Keyboard Bass with Jose Zayas and Fernanda Peirera, Worcester, MA 2012</li>
								<li>Keyboards and Keyboard Bass with Roderick Camelia, Latin Jazz Trio, Boston area 2007-2011</li>
								<li>Street Jazz and Latin Jazz performances with Brad Smith Trio in Boston area 2008-2016</li>
								<li>Keyboards for Grupo Fantasia Salsa, Merengue, Bachata, Cha Cha, Latin Jazz,  2010</li>
								<li>Accompanist for classical/sacred vocalists at Peterborough CS Church 2009-2011</li>
							</ul>

							<h3>BACKGROUND</h3>
							<ul>
								<li>Working pianist, since 1975 Age 13, When the band failed to show at the club where I washed dishes.</li>
								<li> Cover / Rock / Funk / Club Band “Sneaker” Gigged Around Northern Michigan, 1978 - 80</li>
								<li> Pianist, Recorded With Chris Bickley Big Band, “Gonna Fly Now” In Imf – Ambisonic Format 1981</li>
								<li> First Two Berklee Years, Studied With Dick Odgren, Mike Marra, Alex Elin, Bob Winter, Jeff Covell Started Apprenticeship</li>
								<li> With Tom Sheehan, As Piano Technician At Berklee, 1981</li>
								<li> Performed, Wrote and Arranged For Michigan Jazz Sextet, Equinox And Singer Robin Lee Berry 1982 - 1983</li>
								<li> Instructor, Jazz Piano and Improvisation, Northwestern Michigan College 1983</li>
								<li> Jazz Trio With Sky Elobar, Bass And Marcello Pelletieri, Drums, Boston, Ma 1984 - 1985</li>
								<li> Music Therapist With Blind And Autistic Savant, Toren Hall, Mass Assoc.For The Blind 1985</li>
								<li> Solo, Duo, Trio and Quartet Jazz Performances In Boston Clubs 1982 - 1993</li>
								<li> Jazz Quartet With Mike Piepman, Trumpet Performed At Ryles, 1369 Club, Willow Jazz Club, 1985 - 1987</li>
								<li> Cruise Ship House Band Pianist, With New Orleans Trumpeter Jamil Sharif, Premiere Cruise Lines 1988</li>
								<li> Cruise Ship House Band Pianist, Princess Cruise Lines, Star Princess 1989</li>
								<li> House Pianist, Ritz Hotel And Other Major Boston Hotels, For Curtis International Agency, Boston, Ma 1988 - 1992</li>
								<li> Street Performing, Recording and Nyc Performances With French Singer, Gary Innocent 1986 - 1989</li>
								<li> Pianist With Alphonse Villalong and The Cabaret Rose, 1989 - 1991</li>
							</ul>
							< h3 > PERFORMED WITH</h3 >
							<p>Stan Mark, Bruce Dunlap, Jamey Haddad, Skip Hadden, Jack Dryden, John Abercrombie, Donny Mccaslin, Tim Hagans, Bill Mobley, Ian Froman, Gene Jackson, Marcello Pelletieri, Alphonso Villalonga, Matt Wilson, Bob Nieske, David Clark, Jim Stinnett, Ratso Harris, Jamil Sharif, Jan Shapiro, Conrad Warre, Stan Johnson, Chops Turner, Gary Karr, Eddie Gomez</p>
						</Col>
					</Row>
					<Row>
						<Col xs="12">
							<Discography />
						</Col>
					</Row>
				</Container>
			</div>
		)
	}
}

export default Music
