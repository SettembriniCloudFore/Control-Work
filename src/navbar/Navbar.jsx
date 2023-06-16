import React from 'react';
import './navstyles.css';
import { Link } from 'react-router-dom';
import Switch from './Switch/Switch';



const Navbar = (props) => {





    return (
        <div className='nav__wrapper'>
            <div className='pic__wrapper'>
                <img className='nav__pic' src="https://ltdfoto.ru/images/2023/06/12/favpng_atom-nanotechnology-physics.png" alt="an atom"
               
                style={{
                   
                    height:"30px",
                    width:"30px",
                    
                }}/>
                
            </div>
            <div className='nav__theme'>
                <Switch />
                
            </div>
            <div className='nav__search'>
                Search
            </div>
           
            <div className='link__section'>
                <ul>
                <li><Link to='/' class='home'>Home</Link></li>
                <li><Link to='/pomodoro' class='home'>Pomodoro</Link></li>
                <li><Link to='/nutrition' class='home'>Nutrition</Link></li>
                <li><Link to='/body' class='home'>Body</Link></li>
                </ul>
            </div>
           

            <div className='nav__login'>
                Login
                
            </div>

            
        </div>
    );
};

export default Navbar;

