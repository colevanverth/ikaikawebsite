import React, { Component } from "react";
import Image from 'next/image'
//<div id='footer-background'> </div> 
const Footer = () => {
    return (
        <div className='footer__container'> 
            <footer> 
                <div> 
                    <Image src="/logomono.png" width='200' height='50'/> 
                    <br/> 
                    <a> IKAIKA RECORDS </a> 
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        t enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit ess 
                    </p> <br/> 
                    <p> 
                        e cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qu
                        i officia deserunt mollit anim id est laborum.
                    </p> 
                </div> 
                <ul>
                    <a className='footer__label'> SOCIALS </a>
                    <li key='1'> <a> Email </a> </li>
                    <li key='2'> <a> Twitter </a> </li>
                    <li key='3'> <a> Instagram </a> </li>
                    <li key='4'> <a> Youtube </a> </li>
                    <li key='5'> <a> Discord </a> </li>
                    <li key='6'> <a> </a> </li>
                </ul>
                <ul>
                    <a className='footer__label'> LEGAL </a>
                    <li key='1'> <a> Terms and Conditions </a> </li>
                    <li key='2'> <a> Privacy Policy </a> </li>
                    <li key='3'> <a> Cookies Policy </a> </li>
                </ul>
                <ul>
                    <a className='footer__label'> IKAIKA RECORDS </a>
                    <li key='1'> <a> business@ikaikarecords.us </a> </li>
                    <li key='2'> <a> Website Designed by Cole Van Verth </a> </li>
                    <li key='3'> <a> Copyright © Ikaika Records 2023 </a> </li>
                </ul>
            </footer> 
        </div> 
    )
}

export default Footer; 