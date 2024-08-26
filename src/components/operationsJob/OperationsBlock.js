import React, { useState } from 'react';
import Style from "./OperationsBlock.module.scss";
import classNames from "classnames";
import IconLink from "./IconLink";
import {Box,Dialog,DialogTitle,DialogContent,DialogActions,Button,styled } from "@mui/material";


function OperationsBlock(props) {
   const { image, JobDesc, title } = props;
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
        <Box p={1} border={'2px solid black'} borderRadius={'25px'} onClick={handleOpen}>
          <IconLink title={'Job Desk'} icon={'fa fa-info'} />
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
               <p id="dialog-description">{JobDesc || 'Operation Desc'}</p>
            </CustomDialogContent>
            <CustomDialogActions>
               <Button onClick={handleClose} color="primary">Close</Button>
            </CustomDialogActions>
         </Dialog>
    </Box>
   );
 }
 
 export default OperationsBlock;