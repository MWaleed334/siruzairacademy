import * as React from 'react';
import Img3 from "../../Images/steel4.jpg";
import { useEffect } from 'react';
import "./aboutMain.css"
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ourmission from "../../Images/ourmission.jpg"
import ourvission from "../../Images/ourvission.jpg"
import MetaData from '../../Screens/MetaData'
import WhoWeAre from '../../Screens/WhoWeAre/whoWeAre'
import OurManagement from "../../Screens/OurManagement/ourManage"

function About() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <MetaData title="About Us" />
      <div id="about-bg">
        <Grid container>
          <Grid item lg={1} md={1} xs={1} sm={1}>/</Grid>
          <Grid item lg={11} sm={11} md={11} xs={11}>
            <h1 className="About__h1" ></h1>
          </Grid>
        </Grid>

      </div>

      <WhoWeAre />
      <div style={{ marginBottom: "20px" }}>
        <Container fluid>
          <Grid container data-aos="fade-right" id="aboutus-content" marginTop="-4%" marginBottom="30px" paddingTop="40px" paddingBottom="40px" >
            <Grid item lg={0.2}></Grid>
            <Grid item lg={4} md={4} sm={4} xs={12} id="aboutus-logo3"  data-aos="fade-right" style={{transition:"2s"}}>

              <div >
                <img src={Img3} />
              </div>
            </Grid>
            <Grid item lg={2} md={1} sm={2} xs={0}></Grid>
            <Grid item lg={5} md={6} sm={6} xs={12}  data-aos="fade-left" style={{transition:"2s"}}>
              <Typography >
                <h1 style={{ justifyContent:"center", color: "black" }}>OUR EDUCATIONAL APPROACH</h1>
              </Typography>
              <Typography style={{ textAlign: "justify", color: "black" }}>
                "At SIR UZAIR'S ACADEMY, our educational approach is rooted in innovation and a deep understanding of diverse learning needs. We believe that education should be a transformative experience, inspiring a lifelong love for learning. Our approach goes beyond conventional methods, emphasizing creativity, critical thinking, and holistic development. With a dedicated team of educators, cutting-edge resources, and a passion for excellence, we are shaping the future of education one student at a time. Explore our unique educational approach and join us in redefining learning for the modern world..
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </div>

      <div>
        <OurManagement />
      </div>
      <Container>
        <Grid container data-aos="fade-up" marginBottom="30px" marginTop="30px">
          <Grid item lg={1} md={1} sm={1}></Grid>
          <Grid item lg={6} md={7} sm={7} xs={12}  >
            <h1 style={{ paddingLeft: "30px", paddingTop: "40px" }}><b>OUR VISSION</b></h1>
            <hr style={{ width: "220px", marginLeft: "22px", marginTop: "-15px", color: "white" }}></hr>
            <p style={{ color: "black", paddingLeft: "30px", paddingBottom: "30px", textAlign: "justify" }}>
              At our institution, our vision is to cultivate a learning environment where knowledge knows no bounds. We envision a world where education transcends conventional boundaries, empowering individuals to explore, discover, and innovate. Our commitment is to provide accessible and inclusive learning opportunities that nurture intellectual curiosity and foster personal growth. .
            </p>
          </Grid>
          <Grid item lg={1} md={1} sm={1}></Grid>
          <Grid item lg={4} md={4} sm={4} xs={12} id="ourmission" style={{ transition: "1s" }}>
            <img src={ourvission} alt="image" />
          </Grid>
        </Grid>
      </Container>

      <div style={{ backgroundColor: "rgb(43, 27, 27)" }}>
      <Container>
        <Grid container data-aos="fade-down" marginBottom="30px" marginTop="30px" >

          <Grid item lg={4} md={4} sm={4} xs={12} id="ourmission">
            <img src={ourmission} alt="Image" />
          </Grid>
          <Grid item lg={8} md={8} sm={8} xs={12} >
            <h1 style={{ paddingLeft: "30px", paddingTop: "20px", color: "#b22222" }}><b>OUR MISSION</b></h1>
            <p style={{ color: "white", paddingLeft: "30px", paddingBottom: "30px", textAlign: "justify" }}>
              Our mission is simple yet profound: to guide every learner on their path to success. We believe in the transformative power of education, and our dedicated team of educators is committed to providing the best possible learning experience. Through personalized guidance, innovative teaching methods, and unwavering support, we aim to empower our students with the knowledge and skills they need to excel in their academic journey and beyond. Our mission is to be the catalyst for their success stories, one lesson at a time.
            </p>
          </Grid>
        </Grid>
      </Container>
      </div>
    </>
  )
}
export default About;
