import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { MovieContext } from '../../context/movieContext';
import { API_URL, API_KEY } from '../../constants/constants';
import './navbar.scss';
import {FaSearch, FaRegBell} from '../icons/icons';


export default function Navbar() {

    return (
        <div className='navbar'>

            <div className='navbar-container'>

                <div className='navbar-menu'>

                    <div className='navbar-logo'>WATCH IT!</div>

                    <a href="">Inicio</a>
                    <a href="">Series</a>
                    <a href="">Peliculas</a>
                    <a href="">Novedades populares</a>
                    <a href="">Mi lista</a>
                    <a href="">Explora por idiomas</a>
                </div>


                <div className='navbar-menu-right'>
                    <a href=""> <FaSearch /> </a>
                    <a href="">NIÑOS</a>
                    <a href=""> <FaRegBell /> </a>
                    <a href="">USER</a>
                </div>

            </div>

            <div className='navbar-extra'>
            </div>
        </div>
    )
}