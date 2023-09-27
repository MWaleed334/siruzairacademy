import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import "./ourCEO.css"

function OurCEO() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div>
            <Grid container style={{ marginBottom: "50px", marginTop: "10px" }}>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <div className="ourCeo">
                        <div>
                            <div style={{ textAlign: "center" }}>
                                <h1 style={{ paddingTop: "20px", textShadow: "2px 2px gray" }}>Our Founder's Vision</h1>
                            </div>
                            <Container className="ceo-container">
                                <Grid container>
                                    <Grid item lg={0.5}></Grid>
                                    <Grid item lg={0.5} md={2}></Grid>
                                    <Grid item lg={10} md={10} sm={10} xs={12}>
                                        <Typography style={{ color: "black", textAlign: "justify" }}>
                                            <p>
                                            Sir Muhammad Uzair Siddiqui's vision is rooted in a profound belief in the transformative power of education. With a career spanning 15 years, his vision is clear and unwavering: to provide students with a holistic and nurturing learning environment that fosters not only academic excellence but also personal growth and character development. He envisions a world where every student can access high-quality education tailored to their individual needs, guided by caring and dedicated educators. Sir Muhammad Uzair Siddiqui aims to inspire a lifelong love for learning, equipping students with the skills and knowledge they need to thrive in an ever-evolving world, while also instilling in them values of integrity, resilience, and compassion. His vision is a beacon of hope, guiding both educators and students on a path towards a brighter and more enlightened future.
                                            </p>
                                            <p><h2 style={{ textAlign: "center" }}>SIR MUHAMMAD UZAIR SIDDIQUI</h2></p>
                                        </Typography>
                                    </Grid>
                                    <Grid item lg={1}></Grid>
                                </Grid>
                            </Container>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
export default OurCEO;
