import React from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography, Button } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';

import ServiceImage from './Images/service.png';
import PdfImage from './Images/pdfDown.png';




const StaffManagementDashboard = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3} justify="center">
        <Grid item xs={12}>
          <Typography variant="h1" align="center" component="div">
            <span className="badge bg-warning text-dark opacity-90 fs-1">Service Management Dashboard</span>
          </Typography>
        </Grid>


        <Grid item xs={12} sm={6}>
          <Card style={{ width: "78%", height: "80%", marginBlockStart: "20%", marginLeft: "12%" }}>
            <CardMedia component="img" src={ServiceImage} alt="Create new Service" />
            <CardContent>
              <Typography variant="h5" component="h2">
                Service Provider List
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Registered Service Provider details in our web site.
              </Typography>
              <Button href="/serviceDash" variant="contained" color="primary" style={{ marginBlockStart: "4%" }}>
                See More
              </Button>
            </CardContent>
          </Card>
        </Grid>


        <Grid item xs={12} sm={6} >
          <Card style={{ width: "78%", height: "80%", marginBlockStart: "20%", marginLeft: "9%" }}>
            <CardMedia component="img" src={PdfImage} alt="Service Report" />
            <CardContent>
              <Typography variant="h5" component="h2">
                Service Report
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                These Reports are helping to get data about Service Providers as PDF.
              </Typography>
              <Button href="/serviceReport" variant="contained" color="primary">
                Generate Report
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid style={{marginBlockStart:"5%", borderStyle:'solid', borderBlockColor:'black'}}>
        <iframe class="gmap_iframe" width="1200" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=1000&amp;height=400&amp;hl=en&amp;q=child and women protection departments in sri lanka &amp;t=k&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </Grid>




      </Grid>
    </Container>
  );
};

export default StaffManagementDashboard;
