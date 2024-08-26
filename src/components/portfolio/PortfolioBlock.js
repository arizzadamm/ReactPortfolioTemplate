import React, { useState } from 'react';
import IconLink from "./IconLink";
import {Box,Dialog,DialogTitle,DialogContent,DialogActions,Button,styled } from "@mui/material";
import './PortofolioStyles.css';  // Import file SCSS

function PortfolioBlock(props) {
   const {image, live, source, title} = props;
   const [open, setOpen] = useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

   const CustomDialogTitle = styled(DialogTitle)({
      fontFamily: 'Segoe UI',
      fontSize: '2rem',
      fontWeight: 'bold',
   });
   
   const CustomDialogContent = styled(DialogContent)({
      fontFamily: 'Segoe UI',
      fontSize: '1rem',
      paddingTop: '16px',
   });
   
   const CustomDialogActions = styled(DialogActions)({
      fontFamily: 'Segoe UI',
      fontSize: '0.875rem',
      paddingTop: '16px',
      paddingBottom: '8px',
   });
   

   return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
         <Box component={'img'} src={image} alt={'mockup'}/>
         <h1 style={{fontSize: '2rem'}}>{title}</h1>
         <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
              alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
            <Box p={1} border={'2px solid black'} borderRadius={'25px'} onClick={handleOpen}>
               <IconLink title={'Details'} icon={'fa fa-safari'}/>
            </Box>
            <Box p={1} border={'2px solid black'} borderRadius={'25px'} onClick={handleOpen}>
               <IconLink title={'Gallery'} icon={'fa fa-code'}/>
            </Box>
         </Box>
        {/* Dialog Section */}
         <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="dialog-title"
            aria-describedby="dialog-description"
         >
            <CustomDialogTitle id="dialog-title">{title || 'Project Title'}</CustomDialogTitle>
            <CustomDialogContent>
               <p id="dialog-description">{live || 'Project Description'}</p>
               <p id="dialog-description">{source || 'Project Description'}</p>
            </CustomDialogContent>
            <CustomDialogActions>
               <Button onClick={handleClose} color="primary">Close</Button>
            </CustomDialogActions>
         </Dialog>
      </Box>
   );
}

export default PortfolioBlock;