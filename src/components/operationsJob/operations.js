import React from 'react';
import Style from './operations.module.scss';
import OperationsBlock from "./OperationsBlock";
import {Box, Grid} from "@mui/material";
import {info} from "../../info/Info";

export default function operations() {


    function aboutMeText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cat
                about{firstName} </p>
            <p><span style={{color: info.baseColor}}>about{firstName} <span
                className={Style.green}>(main)</span> $ </span>
                {info.bio}
            </p>
        </>;
    }
    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
            <OperationsBlock text={aboutMeText()}/>
            <OperationsBlock text={skillsText()}/>
            <OperationsBlock text={miscText()}/>
        </Box>
    )
    // return (
    //     <Box>
    //         <Grid container display={'flex'} justifyContent={'center'}>
    //             {info.operation.map((project, index) => (
    //                <Grid item xs={12} md={6} key={index}>
    //                    <OperationsBlock image={project.image} live={project.live} source={project.source} title={project.title} />
    //                </Grid>
    //             ))}
    //         </Grid>
    //     </Box>
    // );
};