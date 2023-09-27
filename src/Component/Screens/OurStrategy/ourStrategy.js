import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import "./ourStrategy.css"

function OurStrategy(){
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return(
        <div>
                <Grid container>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <div id="bg2" style={{ marginTop: "-20px", paddingTop: "60px" }}>
                            <div style={{ color: "white", paddingLeft: "20px" }} data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                                <h1 style={{ textAlign: "center" }}>LEARNING STRATEGY</h1>

                                <Container>
                                    <Typography>
                                    At our institution, our learning strategy is the cornerstone of academic achievement. We firmly believe in personalized learning, ensuring that each student receives one-on-one attention. With a focus on proper revision techniques, we guarantee a comprehensive grasp of the subject matter. Our commitment extends beyond academics – we provide personal and career counseling to empower students for life beyond the classroom. To excel in exams, we prepare students using the wisdom of past 25-year papers. Moreover, our advanced strategy and study plan are tailored to nurture not just knowledge but also critical thinking skills. Join us, and together we'll shape your path to success.
                                    </Typography>
                                </Container>
                                <div style={{ paddingBottom: "200px" }}></div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
    )
}
export default OurStrategy;