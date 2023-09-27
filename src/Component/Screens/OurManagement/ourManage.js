import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Img4 from "../../Images/ourManagement.jpeg";
import "./ourManage.css";

function OurManage() {
    return (
        <div>
            <div style={{ backgroundColor: "rgba(43, 27, 27) " }}>
                <Container>
                    <Grid container marginTop="30px" marginBottom="50px" paddingTop="50px" paddingBottom="50px">
                        <Grid item lg={5} md={3} sm={3} xs={12} id="logo4" data-aos="fade-right">
                            {/* <img src={Img4} alt="Image" /> */}
                        </Grid>
                        <Grid item xs={1}></Grid>
                        <Grid item lg={6} md={8} sm={8} xs={10} data-aos="fade-left" style={{ transition: "1s" }}>
                            <Typography>
                                <h1 style={{ color: "#B22222", textAlign: "center" }}>Our Management</h1>
                                <p style={{ textAlign: "justify", color: "white" }}>
                                Our management team is the backbone of our organization, leading us with a wealth of experience, expertise, and a shared commitment to our mission. Comprised of seasoned professionals, our management ensures that every aspect of our operations runs smoothly and efficiently. They are dedicated to fostering an environment of growth and innovation, guiding our organization toward continued success. Their visionary leadership and strategic decision-making are instrumental in shaping our future and delivering excellence in all our endeavors.
                                </p>
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    );
}

export default OurManage;
