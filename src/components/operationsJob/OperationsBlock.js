import React from 'react';
import Style from "./OperationsBlock.module.scss";
import classNames from "classnames";
import IconLink from "./IconLink";
import {Box} from "@mui/material";

function OperationsBlock(props) {
   const {image, live, source, title,text} = props;
   return (
      <Box component={'section'} className={classNames(Style.OperationsBlock, Style.shadowed)}
           width={{xs: '80%', md: '50%'}} borderRadius={'0.5rem'} mb={'4rem'}>
         <Box sx={{backgroundColor: '#8c8c8c'}} p={'0.5rem'} borderRadius={'0.5rem 0.5rem 0 0'}
              fontSize={'1rem'}>
            <i className={classNames(iconClass, Style.red)}/>
            <i className={classNames(iconClass, Style.amber)}/>
            <i className={classNames(iconClass, Style.green)}/>
         </Box>
         <Box py={{xs: '1rem', md: '2rem'}} px={{xs: '2rem', md: '3rem'}} borderRadius={'0 0 0.5rem 0.5rem'}
              sx={{backgroundColor: '#27242f'}} fontSize={'1.5rem'} fontFamily={'Courier New, Courier, monospace'}>
            {text}
         </Box>
      </Box>
      // <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
      //    <Box component={'img'} src={image} alt={'contoh'}/>
      //    <h1 style={{fontSize: '2rem'}}>{title}</h1>
      //    <Box className={'Operation'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
      //         alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
      //    </Box>
      // </Box>
   );
}

export default OperationsBlock;