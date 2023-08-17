import React from 'react';
import InstagramIcon from '../assets/instagram.svg';
import TwitterIcon from '../assets/twitter.svg';
import FacebookIcon from '../assets/messenger.svg';
import LocationIcon from '../assets/location.svg';

export const footerData = {
    department: 'Department of Information Technology',
    university:'Anna University, MIT Campus,',
    address:'Chromepet, Chennai',
    pincode:'600044',
    state:'Tamil Nadu.',
    email:'officeitmit@gmail.com',
    phone_number:'044 2251 6021/6472/6020'
}
export const socialMediaLinks = [
    {
        name:'twitter',
        link:'https://twitter.com/annauniversity',
        icon:<TwitterIcon height='28px' width='28px' />
    },
    {
        name:'instagram',
        link:'https://www.instagram.com/anna_university/?hl=en',
        icon:<InstagramIcon height='28px' width='28px' />
    },
    {
        name:'facebook',
        link:'https://www.facebook.com/AnnaUnivOfficial/',
        icon:<FacebookIcon height='28px' width='28px' />
    },
    {
        name:'location',
        link:'https://goo.gl/maps/GgN1i8N4nv2x68UFA',
        icon:<LocationIcon height='28px' width='28px' />
    },
    
]