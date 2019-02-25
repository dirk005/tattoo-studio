import React, { Component } from 'react';
import artist1 from '../img/artist-1.jpg';
import artist2 from '../img/artist-2.jpg';
import artist3 from '../img/artist-3.jpg';
import artist4 from '../img/artist-4.jpg';
import facebook from "../img/facebook.png";
import instagram from "../img/instagram.png";
import linkedin from "../img/linkedin.png";
import youtube from "../img/youtube.png";



class Artist extends Component {
  constructor(){
    super();
      this.state = {
        artists:[
          {
            name: 'Dario Reeb',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis totam fugiat rem accusantium soluta delectus  repudiandae, ad cum! Fuga corporis debitis maiores laudantium dolorem modi distinctio dolores repudiandae voluptates odio!',
            facebook:'https://www.facbook.com/dario',
            instagram:'https://www.instagram.com/dario',
            linkedin:'https://www.linkin.com/dario',
            youtube:'https://www.youtube.com/dario',
            image:artist1
          },
          {
            name: ' Patric Lark',
            description: 'Curabitur vitae turpis fringilla, aliquet nisl et, consectetur ante. In tempor mauris non vestibulum semper. Duis sed felis ultricies, varius massa a, interdum tortor. Sed fermentum fermentum leo, viverra blandit augue vehicula sit amet. Donec aliquam quam velit, vel vehicula.',
            facebook: 'https://www.facbook.com/patric',
            instagram: 'https://www.instagram.com/patric',
            linkedin: 'https://www.linkin.com/patric',
            youtube: 'https://www.youtube.com/patric',
            image: artist2
          },
          {
            name: 'Billy Prout',
            description: 'Vivamus non mi hendrerit, tincidunt orci vel, rutrum est. Fusce mollis, turpis vehicula ullamcorper varius, erat libero tempus urna, eu tincidunt lacus nisl sit amet felis. Phasellus massa tellus, lacinia vel eleifend sit amet, venenatis. ',
            facebook: 'https://www.facbook.com/billy',
            instagram: 'https://www.instagram.com/billy',
            linkedin: 'https://www.linkin.com/billy',
            youtube: 'https://www.youtube.com/billy',
            image: artist3
          },
          {
            name: 'Junie Moris ',
            description: 'Sed quis sapien quis erat fermentum eleifend. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris quis erat rhoncus, ultrices eros id, viverra nibh. Morbi mi velit, finibus id facilisis sit amet, lobortis nec ante. Pellentesque habitant morbi.',
            facebook: 'https://www.facbook.com/junie',
            instagram: 'https://www.instagram.com/junie',
            linkedin: 'https://www.linkin.com/junie',
            youtube: 'https://www.youtube.com/junie',
            image: artist4
          }
        ],
        artistmain:[]
        };
  }

  componentDidMount() {
    //Set the main artist to display to the first artist in the array
    this.setState({artistmain:this.state.artists[0]});
  }

  changeArtist = (selected) =>{    
      //Get selected artist
      let newArtist = this.state.artists[selected];

      //Set up elemets to fade out and in
      const artistPic = document.getElementById("artist-picture");
      const artistPar = document.getElementById("artist-paragraph");

      //Add fade out to elements
      artistPic.classList.add('fadeOut');
      artistPar.classList.add('fadeOut');

      //Wait a 1 min to change artist 
      setTimeout(() => {       
        this.setState({ artistmain: newArtist }); 
      }, 1000);

      //Wait a 1.1 min to add fade in 
      setTimeout(() => {
        artistPic.classList.add('fadeIn');
        artistPar.classList.add('fadeIn');
      }, 1100);

      //Remove all classes after 2.1 sec
      setTimeout(() => {
        artistPic.classList.remove('fadeOut');
        artistPic.classList.remove('fadeIn');
        artistPar.classList.remove('fadeOut');
        artistPar.classList.remove('fadeIn');
      }, 2100);    
  }

  render(){

    const {artists , artistmain} =this.state;

    return (
      <>
        <section id="artists" className="artist">
          <div className="artist__text">
              <h2 className="heading-secondary">Meet our artists</h2>
              <p id="artist-paragraph" className="paragraph">
                {artistmain.description}
              </p>
              <div className="artist__social">
                <a href={artistmain.facebook} className="artist__icon">
                  <img src={facebook} alt="facebook icon" className="artist__icon--img" />
                </a>
                <a href={artistmain.instagram} className="artist__icon">
                  <img src={instagram} alt="instagram icon" className="artist__icon--img" />
                </a>
                <a href={artistmain.linkedin} className="artist__icon">
                  <img src={linkedin} alt="linkedin icon" className="artist__icon--img" />
                </a>
                <a href={artistmain.youtube} className="artist__icon">
                  <img src={youtube} alt="youtube icon" className="artist__icon--img" />
                </a>
              </div>
            </div>
            <div className="artist__select">
              
            {//Display artists to select
              artists.map((artist , i) =>{
              return(
                <figure className="artist__select--shape" onClick={() => this.changeArtist(i)}>
                  <img src={artist.image} alt={`Artist ${i}`}  className="artist__select--img" />
                  <ficaption className="artist__select--caption">
                    {artist.name}
                  </ficaption>
                </figure>
              );
            })}             
              
            </div>
          
          <div id="artist-picture" className="artist__picture">
            <h3  className="artist__picture--name">{`${artistmain.name}`}</h3>
            <img  src={`${artistmain.image}`} alt="Artist " className="artist__picture--img" />
          </div>
        </section>
      </>
    );
  }
}

export default Artist;