import React from 'react';
import Style from "./OperationsBlock.module.scss";
import classNames from "classnames";
import IconLink from "./IconLink";
import {Box} from "@mui/material";


function OperationsBlock(props) {
   const { image, JobDesc, title, onJobDescClick } = props;

   const handleClick = (e) => {
      e.preventDefault();
      onJobDescClick(JobDesc);
    };
  
 
   return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
      <Box component={'img'} src={image} alt={'mockup'} />
      <h1 style={{ fontSize: '2rem' }}>{title}</h1>
      <Box
        className={'operations'}
        display={'flex'}
        flexDirection={'column'}
        gap={'0.5rem'}
        alignItems={'center'}
        fontSize={'1.5rem'}
        py={'2rem'}
      >
        <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
          <IconLink link={JobDesc} title={'Job Desk'} icon={'fa fa-info'} onClick={handleClick} />
        </Box>
      </Box>
    </Box>
   );
 }
 
 export default OperationsBlock;