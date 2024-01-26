import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';
import OperationsBlock from './OperationsBlock';
import JobDesc from './JobDesc';
import {info} from "../../info/Info";


export default function operations() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedJobDesc, setSelectedJobDesc] = useState('');

  const handleJobDescClick = (JobDesc) => {
    setSelectedJobDesc(JobDesc);
    setModalOpen(true);
  };

    return (
        <Box>
            <Grid container display={'flex'} justifyContent={'center'}>
                {info.operation.map((project, index) => (
                   <Grid item xs={12} md={6} key={index}>
                       <OperationsBlock 
                       image={project.image} 
                       JobDesc={project.info} 
                       title={project.title}
                       onJobDescClick={handleJobDescClick} />
                   </Grid>
                   
                ))}
            </Grid>
          {/* Modal Component */}
          <JobDesc trigger={isModalOpen}>
            <h2>Job Description</h2>
            <p>{selectedJobDesc}</p>
          </JobDesc>
        </Box>
    );
};