import React, {Component} from 'react';
import Image1 from '../img/gallery/gal-1.jpg';
import Image2 from '../img/gallery/gal-2.jpg';
import Image3 from '../img/gallery/gal-3.jpg';
import Image4 from '../img/gallery/gal-4.jpg';
import Image5 from '../img/gallery/gal-5.jpg';
import Image6 from '../img/gallery/gal-6.jpg';
import Image7 from '../img/gallery/gal-7.jpg';
import Image8 from '../img/gallery/gal-8.jpg';
import Image9 from '../img/gallery/gal-9.jpg';
import Image10 from '../img/gallery/gal-10.jpg';
import Image11 from '../img/gallery/gal-11.jpg';
import Image12 from '../img/gallery/gal-12.jpg';
import Image13 from '../img/gallery/gal-13.jpg';
import Image14 from '../img/gallery/gal-14.jpg';
import Image15 from '../img/gallery/gal-15.jpg';
import Image16 from '../img/gallery/gal-16.jpg';
import Image17 from '../img/gallery/gal-17.jpg';
import Image18 from '../img/gallery/gal-18.jpg';
import Image19 from '../img/gallery/gal-19.jpg';
import Image20 from '../img/gallery/gal-20.jpg';
import Image21 from '../img/gallery/gal-21.jpg';
import Image22 from '../img/gallery/gal-22.jpg';
import Image23 from '../img/gallery/gal-23.jpg';
import Image24 from '../img/gallery/gal-24.jpg';
import Image25 from '../img/gallery/gal-25.jpg';
import Image26 from '../img/gallery/gal-26.jpg';
import Image27 from '../img/gallery/gal-27.jpg';

class Gallery extends Component{
    constructor(){
        super();
        this.state ={
            images: [
                Image1,
                Image2,
                Image3,
                Image4,
                Image5,
                Image6,
                Image7,
                Image8,
                Image9,
                Image10,
                Image11,
                Image12,
                Image13,
                Image14,
                Image15,
                Image16,
                Image17,
                Image18,
                Image19,
                Image20,
                Image21,
                Image22,
                Image23,
                Image24,
                Image25,
                Image26,
                Image27
            ]
        }
    }
    render(){

        const {images} = this.state;

        return(
            <>
                <section id='gallery' class="gallery">

                {//Add all imges to page
                    images.map((image,i) =>{
                        return(
                            <figure class={`gallery_item gallery__item--${i}`}>
                                <img src={image} alt={`Gallery Image ${i}`} class="gallery__img" />
                            </figure>
                        );
                    })
                }
                {/*    <figure class="gallery_item gallery__item--1">
                            <img src="img/gal-1.jpeg" alt="gallery image 1" class="gallery__img" />>
                    </figure>
                
                   <figure class="gallery_item gallery__item--1">
                        <img src="img/gal-1.jpeg" alt="gallery image 1" class="gallery__img"/>>
                </figure>
                <figure class="gallery_item gallery__item--2">
                    <img src="img/gal-2.jpeg" alt="gallery image 2" class="gallery__img"/>
                </figure>
                <figure class="gallery_item gallery__item--3">
                    <img src="img/gal-3.jpeg" alt="gallery image 3" class="gallery__img"/>
                </figure>
                <figure class="gallery_item gallery__item--4">
                    <img src="img/gal-4.jpeg" alt="gallery image 4" class="gallery__img"/>
                </figure>
                <figure class="gallery_item gallery__item--5">
                    <img src="img/gal-5.jpeg" alt="gallery image 5" class="gallery__img"/>
                </figure>
                <figure class="gallery_item gallery__item--6">
                    <img src="img/gal-6.jpeg" alt="gallery image 6" class="gallery__img"/>
                </figure>
                <figure class="gallery_item gallery__item--7">
                    <img src="img/gal-7.jpeg" alt="gallery image 7" class="gallery__img"/>
                </figure>
                <figure class="gallery_item gallery__item--8">
                    <img src="img/gal-8.jpeg" alt="gallery image 8" class="gallery__img"/>>
                </figure>
                <figure class="gallery_item gallery__item--9">
                    <img src="img/gal-9.jpeg" alt="gallery image 9" class="gallery__img"/>
                </figure>
                <figure class="gallery_item gallery__item--10">
                    <img src="img/gal-10.jpeg" alt="gallery image 10" class="gallery__img"/>
                </figure>
                <figure class="gallery_item gallery__item--11">
                    <img src="img/gal-11.jpeg" alt="gallery image 11" class="gallery__img"/>
                </figure>
                <figure class="gallery_item gallery__item--12">
                    <img src="img/gal-12.jpeg" alt="gallery image 12" class="gallery__img"/>
                </figure>
                <figure class="gallery_item gallery__item--13">
                    <img src="img/gal-13.jpeg" alt="gallery image 13" class="gallery__img"/>
                </figure>
                <figure class="gallery_item gallery__item--14">
                    <img src="img/gal-14.jpeg" alt="gallery image 14" class="gallery__img"/>
                </figure> */}
            </section>
            </>
        );
    }
}

export default Gallery;