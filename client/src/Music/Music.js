import React, { Component } from 'react'
// import Img from 'react-image'
import { Col, Container, Row } from 'reactstrap'
import './Music.css'
import Aux from '../hoc/Aux'

class Music extends Component {
	render() {
		return (
			<Container>
				<Row>
					<Col xs="12">
						<iframe width="300" height="180" src="https://www.youtube.com/embed/w8kmVYpY-Dc?rel=0" frameborder="0" allowfullscreen></iframe>
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
			</Container>
		)
	}
}

export default Music

{/* <div class="container">
  <div class="row">
    <div class="col-lg-12">
      <a name='bio'></a>
      <hr>
      <h4>Bio</h4>
      <h5>II III II III II III II III II III II III II III</h5>
      <p><strong>Brad Smith</strong> is a highly regarded professional accompanist, keyboardist and leader in jazz, musical theatre, blues, funk and Latin music in Boston.
        He has worked as a show band pianist on cruise ships, including Premiere (Disney) and Princess cruise lines.
        Notable Boston area performances include cabaret with vocalist Diva Taunia, an early recording with Spanish cabaret star Alphonso Villalonga, jazz with vocalist Janine Graham, performances and recording with British guitarist Conrad Warre (Bees Deluxe trio) and performances with Afro-Latin percussionist Cornell Coley, among others. 
      </p>
      <p>
        In 2007, Brad met Latin jazz guitarist Roderick Camelia, beginning a serious study of Latin music. The Camelia Latin Jazz format requires the keyboardist to play left hand bass with montuno rhythms in the right hand, for salsa, merengue, bachata, samba, cumbia and cha-cha styles. As a result, Brad has worked with the best Latin musicians in Boston including, Angel Wagner (Grupo Fantasia), Willie Colon (Grupo Chevere), Willy Cotto (Orquestra Unicason), Rafy Muriel (Gozarsa), Gilberto Rivera (Rumbanama), Van Lester (musical heir to Hector Lavoe via Fania Records) and concert appearances with Yaure Muniz (lead trumpeter of Afro-Cuban All Stars). Brad has been pianist with Sabor Picante (Ernesto Lugo) since 2012, performing at the Boston Puerto Rican festival in 2014 and the Boston Betances Latin festival annually. 
      </p>
      <p>
        Brad has recorded as a sideman on eight albums in jazz, funk and musical theater. 
        He has also been fortunate to work with Berklee faculty member, bassist and arranger Jim Stinnett on multiple recordings and performances in jazz and pop. A career highlight of 2015 was the opportunity for Brad to accompany classical double-bass virtuoso Gary Karr at the NH Bass Festival (thanks to Jim Stinnett) in a variety of formats from Saint-Saëns to Gershwin. The week also included jazz bass legend Eddie Gomez who performed at the festival, with accompanying in duo, trio and quartet formats.
      </p>            
      <p>
        Brad is available for performing, touring and recording anywhere in the world.
      </p>
    </div>
  </div>
</div> 
<div class="container">
  <div class="row">
    <div class="col-lg-12">
      <a name='latintrio'></a>
      <br>
      <button><a href='#top'>top</a></button>
      <hr>
    </div>
    <div class="col-lg-4">
      <h3>Latin Keyboard Trio</h3> 
      <h5>II III II III II III II III II III II III II III</h5>
      <p>Keyboard w/left-hand bass, guitar, percussion.</p>  
      <iframe width="300" height="552" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/207133298andamp;color=%23ff5500andamp;auto_play=falseandamp;hide_related=falseandamp;show_comments=trueandamp;show_user=trueandamp;show_reposts=false"></iframe>
    </div>
    <div class="col-lg-8">
      <a name='funktrio'></a>
        <h3>Funk Rock Trio</h3>
        <h5>II III II III II III II III II III II III II III</h5>
        <p>Keyboard w/left-hand bass, electric guitar, drums</p>  
        <iframe width="300" height="180" src="https://www.youtube.com/embed/KhY47CvgsQ4" frameborder="0" allowfullscreen="yes"></iframe>
        <iframe width="300" height="180" src="https://www.youtube.com/embed/sn3P9Ei58D0" frameborder="0" allowfullscreen="yes"></iframe>
        <iframe width="300" height="180" src="https://www.youtube.com/embed/WSEFKzdlrGM" frameborder="0" allowfullscreen="yes"></iframe>
        <iframe width="300" height="180" src="https://www.youtube.com/embed/Q1KJ5Mxnaps" frameborder="0" allowfullscreen="yes"></iframe>
        <iframe width="300" height="180" src="https://www.youtube.com/embed/keS0riw3nHw" frameborder="0" allowfullscreen="yes"></iframe>
      </div>
    </div>
  </div>
</div>
<div class="container">
  <div class="row">
    <div class="col-lg-12">
      <br><br>
      <a name='jazzpianotrio'></a>
      <button><a href='#top'>top</a></button>
      <hr>
    </div>
    <div class="col-lg-4">
      <!-- <a name='cabaret'></a> not needed, using 'jazzpianotrio' link to get here -->
      <h3>Cabaret Trio</h3>
      <h5>II III II III II III II III II III II III II III</h5>
      <p>Vocalist, keyboards w/left-hand bass, drums</p>  
      
      <iframe width="300" height="180" src="https://www.youtube.com/embed/sZfEtsbbtHA" frameborder="0" allowfullscreen="yes"></iframe>
      <iframe width="300" height="180" src="https://www.youtube.com/embed/Behsbq2fRio?rel=0" frameborder="0" allowfullscreen></iframe>
      <iframe width="300" height="180" src="https://www.youtube.com/embed/GkKpxkcFPvw?rel=0" frameborder="0" allowfullscreen></iframe>
      <!-- vdio -->
    </div>
    <div class="col-lg-4">
      <h3>Jazz Piano Trio</h3>
      <h5>II III II III II III II III II III II III II III</h5>
      <p>Piano, bass, drums (various trios)</p>
      <iframe width="300" height="540" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/207141804andamp;color=%23ff5500andamp;auto_play=falseandamp;hide_related=falseandamp;show_comments=trueandamp;show_user=trueandamp;show_reposts=false"></iframe>
    </div>
    <div class="col-lg-4">
      <br>
      <br>
      <br>
      <br>
      <iframe width="300" height="180" src="https://www.youtube.com/embed/b3FDVFas-wY" frameborder="0" allowfullscreen></iframe>
      <iframe width="300" height="180" src="https://www.youtube.com/embed/uHAVx-BdAbg" frameborder="0" allowfullscreen></iframe>        
      <iframe width="300" height="180" src="http://www.ustream.tv/embed/recorded/108639266?html5ui" scrolling="no" allowfullscreen webkitallowfullscreen frameborder="0" style="border: 0 none transparent;"></iframe>
      <p>Trio Concert: Zachary Winter (bass), Joe Hunt (drums): Tribute to Ray Brown</p>
    </div>
  </div>
</div>
<div class="container">
  <div class="row">
    <div class="col-lg-12">
      <br><br>
      <a name='vanjam'></a>
      <button><a href='#top'>top</a></button>
      <hr>
      <h3>Van Jam Trio</h3>
      <h5>II III II III II III II III II III II III II III</h5>
      <p>keyboards, bass, drums trio playing in the van, various locations in Boston and Cambridge</p>
      <iframe width="300" height="200" src="https://www.youtube.com/embed/LzFNFoEXU0g" frameborder="0" allowfullscreen></iframe>
      <iframe width="300" height="200" src="https://www.youtube.com/embed/tifEHy6QM_8" frameborder="0" allowfullscreen></iframe>
      <iframe width="300" height="200" src="https://www.youtube.com/embed/LQKqf6At6ko" frameborder="0" allowfullscreen></iframe>
    </div>
  </div>
</div>
<div class="container">
  <div class="row">
    <div class="col-lg-12">
      <br><br>
      <a name='solopiano'></a>
      <button><a href='#top'>top</a></button>
      <hr>
      <h3>Solo Jazz Piano</h3>
      <h5>II III II III II III II III II III II III II III</h5>
    </div>
    <div class="col-lg-4">
      <iframe width="300" height="540" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/207129494andamp;color=%23ff5500andamp;auto_play=falseandamp;hide_related=falseandamp;show_comments=trueandamp;show_user=trueandamp;show_reposts=false"></iframe>
    </div>
    <div class="col-lg-8">
      <iframe width="300" height="215" src="https://www.youtube.com/embed/8Sl2DtChnw4" frameborder="0" allowfullscreen></iframe>
    </div>
  </div>
</div>
<div class="container">
  <div class="row">
    <div class="col-lg-12">
      <br><br>
      <a name='salsa'></a>
      <button><a href='#top'>top</a></button>
      <hr>
      <h3>Salsa Grupo</h3>
      <h5>II III II III II III II III II III II III II III</h5>
      <iframe width="300" height="250" src="https://www.youtube.com/embed/j7PBcEiBrck" frameborder="1" allowfullscreen></iframe>
      <iframe width="300" height="250" src="https://www.youtube.com/embed/unSYVFLMaK8" frameborder="1" allowfullscreen></iframe>
      <iframe width="300" height="250" src="https://www.youtube.com/embed/VzhjMeHs_5o" frameborder="1" allowfullscreen></iframe>
    </div>
  </div>
</div>
<div class="container">
  <div class="row">
    <div class="col-lg-12">
      <br><br>
      <a name='resume'>
      <button><a href='#top'>top</a></button>
      <hr>
      <h3>Resume</a></h3>
      <h5>II III II III II III II III II III II III II III</h5>
    </div>
    <div class="col-lg-12">
      <h3>EDUCATION</h3>
      Private lessons in Jazz Improvisation with Charlie Banacos, Boston, MA 1988-1990 
      <br>Classical Piano and Weight Technique with Kathy Rand, Boston Conservatory, 1987-1989 
      <br>B.A. Degree, Professional Music, Berklee College of Music, Boston, MA, 1985  
      <br>Jazz piano and improvisation with Mike Marra, Boston, MA 1984-1985 
      <br>Master class and private lessons with pianist Ken Werner, Boston, MA 1984 
      <br>Classical piano with Dr. George Mulder, Interlochen Arts Academy, Interlochen, Michigan 1973-1977 
      <br>
      <br>
      <h3>EXPERIENCE</h3>
      Pianista para Sabor Picante, Salsa y Latin Jazz, 2012-2017
      <br>Jazz Piano Trio concert with Zach Winter (bass), Joe Hunt(drums), Boston Oct 2017
      <br>Pianist with Carlos Torres' Mambo Magic, Festival Betances, Boston 2016
      <br>Accompanist for Royal Carribean Cruise Lines, Boston auditions, Summer 2016
      <br>Pianist with Camelia Latin Jazz Quintet, Festival Betances, Boston 2015 
      <br>Accompanist with classical virtuoso bassist Gary Karr, NH Bass Fest 2015 
      <br>Duo, trio and quartet performances with jazz bass legend Eddie Gomez, NH Bass Fest 2015 
      <br>Pianist with Afrika Gente, afro-Latin jazz, various performances 2015-16
      <br>Duo with African drummer Cornell Coley (Afrika Gente leader) 2015-16
      <br>
      <br>Pianist with Willie Cotto y Orquesta Unicason, Worcester, MA 2014 
      <br>Pianist with Salsa singer Van Lester at Boston Puerto Rican Festival 2014 
      <br>Pianist with Rafael Muriel Salsa Grupo at Festival Betances, Boston 2014 
      <br>Pianist with Sabor Picante, Festival Betances, Boston, 2014 
      <br>Keys and keyboard bass with Dominique Dinardo and Reid Trevaskas, N’awlins, Manchester, NH 2013-2014 
      <br>Keyboardist with Manchuka 10 piece funk dance band 2009 and 2014 
      <br>
      <br>Jazz piano and keyboards with Stan Johnson, Chops Turner and Lori Dow, Boston, MA 2012-2014 
      <br>Jazz piano and organ with Don Altobello Jazz Sextet, Boston, MA 2012-2014 
      <br>Jazz piano with Richard Hale Shaw and Jazz Continuum, Boston MA 2012-2014 
      <br>Jazz piano with Bopkick Jazz Quartet, Boston area 2009-2014 
      <br>Pianist with Salsa artists Jose Salgado and Gilberto Rivera’s Rhumbanama, Lowell Puerto Rican Festival 2013 
      <br>Keyboards with Sweet Willie D, swing, gospel, Blues and Soul quintet, Boston, MA 2013 
      <br>Keyboards and Keys Bass with Bees Deluxe, blues-funk-rock trio, Boston, MA 2012-2013 
      <br>Keyboards and Keyboard Bass with Jose Zayas and Fernanda Peirera, Worcester, MA 2012 
      <br>Keyboards and Keyboard Bass with Roderick Camelia, Latin Jazz Trio, Boston area 2007-2011 
      <br>Street Jazz and Latin Jazz performances with Brad Smith Trio in Boston area 2008-2016
      <br>Keyboards for Grupo Fantasia Salsa, Merengue, Bachata, Cha Cha, Latin Jazz,  2010 
      <br>Accompanist for classical/sacred vocalists at Peterborough CS Church 2009-2011</p>
      
      <h3>BACKGROUND</h3>
      Working pianist, since 1975 Age 13, When the band failed to show at the club where I washed dishes.
      <br>Cover/Rock/Funk/Club Band “Sneaker” Gigged Around Northern Michigan, 1978-80 
      <br>Pianist, Recorded With Chris Bickley Big Band, “Gonna Fly Now” In Imf – Ambisonic Format 1981 
      <br>First Two Berklee Years, Studied With Dick Odgren, Mike Marra, Alex Elin, Bob Winter, Jeff Covell Started Apprenticeship 
      <br>With Tom Sheehan, As Piano Technician At Berklee, 1981 
      <br>Performed, Wrote and Arranged For Michigan Jazz Sextet, Equinox And Singer Robin Lee Berry 1982-1983 
      <br>Instructor, Jazz Piano and Improvisation, Northwestern Michigan College 1983 
      <br>Jazz Trio With Sky Elobar, Bass And Marcello Pelletieri, Drums, Boston, Ma 1984-1985 
      <br>Music Therapist With Blind And Autistic Savant, Toren Hall, Mass Assoc. For The Blind 1985 
      <br>Solo, Duo, Trio and Quartet Jazz Performances In Boston Clubs 1982-1993 
      <br>Jazz Quartet With Mike Piepman, Trumpet Performed At Ryles, 1369 Club, Willow Jazz Club, 1985-1987 
      <br>Cruise Ship House Band Pianist, With New Orleans Trumpeter Jamil Sharif, Premiere Cruise Lines 1988 
      <br>Cruise Ship House Band Pianist, Princess Cruise Lines, Star Princess 1989 
      <br>House Pianist, Ritz Hotel And Other Major Boston Hotels, For Curtis International Agency, Boston, Ma 1988-1992 
      <br>Street Performing, Recording and Nyc Performances With French Singer, Gary Innocent 1986-1989 
      <br>Pianist With Alphonse Villalong and The Cabaret Rose, 1989-1991
      
      <h3>PERFORMED WITH</h3>
      <p>Stan Mark, Bruce Dunlap, Jamey Haddad, Skip Hadden, Jack Dryden, John Abercrombie, Donny Mccaslin, Tim Hagans, Bill Mobley, Ian Froman, Gene Jackson, Marcello Pelletieri, Alphonso Villalonga, Matt Wilson, Bob Nieske, David Clark, Jim Stinnett, Ratso Harris, Jamil Sharif, Jan Shapiro, Conrad Warre, Stan Johnson, Chops Turner, Gary Karr, Eddie Gomez</p>
    </div>
  </div>
</div>
<div class="container">
  <div class="row">
    <div class="col-lg-12">
      <a name='discography'></a>
      <button><a href='#top'>top</a></button>
      <hr>    
      <h3>Discography</h3>
      <h5>II III II III II III II III II III II III II III</h5>
    </div>
  </div>
</div> 
<div class="container">
  <div class="row">
    <div class="col-lg-6">
      <iframe width="500" height="200" src="https://www.youtube.com/embed/OSkmEbcF0A0?rel=0" frameborder="0" allowfullscreen></iframe>

    </div>
    <div class="col-lg-6">
      <p><strong>Michael Blum Quartet, recording Michael's tune "Don't Ever Go" upcoming album: Wes'n: A Tribute to Wes Montgomery</p>
      <p>Michael Blum (guitar), Chip McNeill (sax), Jim Stinnett (bass), Brad Smith (piano), Dave DiCenso (drums)</p>
      <p>Recorded at Jon Chase Studio 2017</p>
    </div>
  </div>
</div>
<br>
<div class="container">
  <div class="row">
    <div class="col-lg-2">
      <img src="./images/rec/blum-oscar.jpg" style="float: left" width= "150px" height="150px";>
    </div>
    <div class="col-lg-4">
      <strong>Chasin' Oscar</strong>     
      <p>Michael Blum Quartet<br>
        Recorded at Jon Chase Studio July 2016</p>
    </div>
    <div class="col-lg-4">
      <p>Michael Blum (guitar), Jim Stinnett (bass), Dom Moio (drums), Brad Smith (piano</p>
    </div>
  </div>
</div>
<br>
<div class="container ">
  <div class="row">
    <div class="col-lg-2">
      <img src="./images/rec/blum-commit.jpg" style="float: left" width= "150px" height="150px";>
    </div>
    <div class="col-lg-4">
      <strong>Commitment</strong>     
      <p>Michael Blum<br>
      DOWNBEAT MAGAZINE <br>
      2015 “RISING STAR”<br>
      Recorded at Jon Chase Studio Jan 2015</p>
    </div>
    <div class="col-lg-4">
      <p>Michael Blum (guitar), Jim Stinnett (bass), Dom Moio (drums), Brad Smith (piano</p>
    </div>
  </div>
</div>
<br>
<div class="container ">
  <div class="row">
    <div class="col-lg-2">
      <img src="./images/rec/blum-init.jpg" style="float: left" width= "150px" height="150px";>
      </div>
    <div class="col-lg-4">
      <strong>Initiation</strong>     
      <p>Michael Blum Quartet<br>
        Recorded at Jon Chase Studio 2014<br> 
        See review of this album in the November 2014 issue of DownBeat </p>
    </div>
    <div class="col-lg-4">
      <p>Michael Blum (guitar), Jim Stinnett (bass), Dom Moio (drums), Brad Smith (piano)</p>
    </div>
  </div>
</div>
<br>
<div class="container ">
  <div class="row">
    <div class="col-lg-2">
      <img src="./images/rec/chris.jpg" style="float: left" width= "150px" height="150px";>
      </div>
    <div class="col-lg-4">
      <strong>Chris Plays Ray</strong>     
      <p>Chris Mewhinney Quartet/Quintet/Trio<br>
        Recorded at Jon Chase Studio 2013</p>
    </div>
    <div class="col-lg-4">
      <p>Chris Mewhinney (bass), Jim Stinnett (bass), Michael Blum (Guitar), Dom Moio (drums), Brad Smith (piano)</p>
    </div>
  </div>
</div>
<br>
<div class="container ">
  <div class="row">
    <div class="col-lg-2">
      <img src="./images/rec/bees.jpg" style="float: left" width= "150px" height="150px";>
      </div>
    <div class="col-lg-4">
      <strong>Live Evil</strong>     
      <p>Bees Deluxe<br>
      Recorded live at “The Grog” Newburyport, MA 2013</p>
    </div>
    <div class="col-lg-4">
      <p>Conrad Warre, (guitar, vocal), Brad Smith (keys/bass),P(atrick Sanders (drums)</p>
    </div>
  </div>
</div>
<br>
<div class="container ">
  <div class="row">
    <div class="col-lg-2">
      <img src="./images/rec/simone.jpg" style="float: left" width= "150px" height="150px";>
      </div>
    <div class="col-lg-4">
      <strong>Take My Love</strong>     
      <p>Simone Waddel<br>
        Recorded at Blue Jay Studios, Carlisle, MA 1996</p>
    </div>
    <div class="col-lg-4">
      <p>Simone Waddel (vocals, composer), Jim Stinnett (bass, arranger), Tony Fesmire and Dennis Montgomery (vocals), Marco Abreu (guitar), Charles Haynes (drums), Germmain Nelson (piano), Brad Smith (piano and keyboards)</p>
    </div>
  </div>
</div>
<br>
<div class="container ">
  <div class="row">
    <div class="col-lg-2">
      <img src="./images/rec/alphonso.jpg" style="float: left" width= "150px" height="150px";>
      </div>
    <div class="col-lg-4">
      <strong>At The Edge</strong>     
      <p>Alfonso Villalonga and The Cabaret Rose<br>
        Recorded at Blue Jay Studios, Carlisle, MA 1990</p>
    </div>
    <div class="col-lg-4">
      <p>Alfonso Villalonga (vocalist, composer, arranger, conductor), Alan Bern (accordion), Bob Nieske (bass), Matt Wilson (drums), Johaness Ammon (violin), Jeff Warschauer (mandolin), Bryndis Baldursson (cello), Cece Giannotti (guitar), Dr No (drums), Roy Okutani (trumpet), Billy Novick (clarinet), Curtis Hasselbrink (trombone), Bevan Manson and Brad Smith (piano) 
    </div>
  </div>
</div>
 
					</Col>
				</Row>
			</Container> */}
{/* )
	}
} */}
