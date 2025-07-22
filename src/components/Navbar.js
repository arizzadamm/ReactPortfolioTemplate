import React, {useState} from 'react';
import Style from './Navbar.module.scss';
import Toggler from "./home/Toggler";
import {Link, useLocation} from "react-router-dom";
import {Box} from "@mui/material";
import {info} from "../info/Info";

const links = [
    {
        name: 'Home',
        to: '/',
        active: 'home'
    },
    {
        name: 'About Me',
        to: '/about',
        active: 'about'
    },
     {
        name: 'Portfolio',
        to: '/portfolio',
        active: 'portfolio'
    },
    {
        name: info.initials,
        type: 'initials',
        to: '/',
        active: 'home'
    },

    {
        name: 'Cyber Security',
        to: '/operations',
        active: 'operationsjob'
    },
    {
        name: 'Cyber News',
        to: '/cybernews',
        active: 'cybernews'
    },
    {
        name: 'Mini Tools',
        to: '/minitools',
        active: 'minitools'
    }
]

export default function Navbar({darkMode, handleClick}) {
    const location = useLocation()
    const [active, setActive] = useState(location.pathname === '/' ? 'home' : location.pathname.slice(1, location.pathname.length));

    return (
        <Box component={'nav'} width={'100%'}className={Style.fadeIn}>
            <Box component={'ul'} display={'flex'} justifyContent={'space-around'} alignItems={'center'}
                 gap={{xs: '1rem', md: '4rem'}}
                 textTransform={'lowercase'} fontSize={'1rem'}>
                {links.map((link, index) => (
                    <Box key={index} component={'li'} className={(link.active === active && !link.type) && Style.active}
                         sx={{borderImageSource: info.gradient}}>
                        <Link to={link.to} onClick={() => setActive(link.active)} className={Style.link}>
                        {!link.type && <p style={{ padding: '0.5rem 0', margin: 0 }}>{link.name}</p>}
                        {link.type && <h1 style={{ margin: 0 }}>{link.name}</h1>}
                        </Link>
                    </Box>
                ))}
                <li>
                    <Toggler darkMode={darkMode} handleClick={handleClick}/>
                </li>
            </Box>
        </Box>
    )
}