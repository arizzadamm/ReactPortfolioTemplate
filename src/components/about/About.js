import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {Box} from "@mui/material";
import {info} from "../../info/Info";


export default function About() {
    const firstName = info.firstName.toLowerCase()

    function aboutMeText() {
        return <>
            <p><span style={{color: '#0b5993'}}> using </span> <span style={{color: '#008a00'}}> {firstName}{info.lastName.toLowerCase()}</span> 
            <span style={{color: '#ffc66a'}}> about{firstName} </span> </p>
            <p>
                {info.bio}
            </p>
        </>;
    }

    function experiencesText() {
        return <>
            <p><span style={{color: '#0b5993'}}> using </span> <span style={{color: '#008a00'}}> {firstName}{info.lastName.toLowerCase()}</span> 
            <span style={{color: '#ffc66a'}}> Experiences</span> </p>
            <p style={{color: '#0b5993'}}>Experiences </p>
            <ul className={Style.experiences}>
                {info.experiences.map((experience, index) => (
                    <li key={index}>
                        <h3>{experience.title}</h3>
                        <p>{experience.info}</p>
                        <p>{experience.JobDesc}</p>
                    </li>
                ))}
            </ul>
        </>;
    }

    function skillsText() {
        return <>
            <p><span style={{color: '#0b5993' }}>using {firstName}{info.lastName.toLowerCase()}</span> Public class
            </p>
            <p><span style={{color: '#ffc66a'}}>skills/tools </span></p>
            <p style={{color: '#0b5993'}}> Proficient With</p>
            <ul className={Style.skills}>
                {info.skills.proficientWith.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
            </ul>
            <p style={{color: '#0b5993'}}> Exposed To</p>
            <ul className={Style.skills}>
                {info.skills.exposedTo.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
        </>;
    }

    function miscText() {
        return <>
            <p><span style={{color: '#0b5993'}}> using </span> <span style={{color: '#ffc66a'}}>{firstName}{info.lastName.toLowerCase()}</span>
            <span style={{color: '#ffc66a'}}>hobbies/interests </span></p>
            <ul>
                {info.hobbies.map((hobby, index) => (
                    <li key={index}><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
                ))}
            </ul>
        </>;
    }

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
            <div className={Style['fade-in']} style={{animationDelay: '0.1s'}}><Terminal text={aboutMeText()}/></div>
            <div className={Style['fade-in']} style={{animationDelay: '0.3s'}}><Terminal text={experiencesText()}/></div>
            <div className={Style['fade-in']} style={{animationDelay: '0.5s'}}><Terminal text={skillsText()}/></div>
            <div className={Style['fade-in']} style={{animationDelay: '0.7s'}}><Terminal text={miscText()}/></div>
        </Box>
    )
}