import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom'
import Container from '@mui/material/Container';
import whoWe from "../../Images/whoWe.jpg";
import "./whoWeAre.css"; // Import the external CSS file

function WhoWeAre() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  
  return (
    <div>
      <div id="content">
        <Container>
          <Grid container data-aos="fade-down" style={{ transition: "1.5s" }}>
            <Grid item lg={6} md={6} sm={5} xs={12} className="h1__whoWeAre">
              <Typography>
                <h1 className="h1__whoWeAre">WHO WE ARE</h1>
              </Typography>
              <Typography className="p__whoWeAre">
              At Sir Uzair's Academy, we are more than just educators; we are mentors, motivators, and partners in your educational journey. Our team is driven by a shared passion for fostering quality education and empowering students to reach their full potential. With years of experience and a commitment to excellence, we provide personalized learning experiences that not only enhance academic performance but also nurture character and critical thinking. Discover a world of opportunities with us, where learning knows no bounds.
              </Typography>
              <br />
              <div style={{ textAlign: "center", marginBottom: "10px" }}>
                <Button onClick={() => navigate('/ourManagement')} style={{backgroundColor:"#b22222", color:"white", }} className="WhoWeAre_button">
                  Want to Know More?
                </Button>
              </div>
            </Grid>
            <Grid item lg={1.5} md={1} xs={2}></Grid>
            <Grid item lg={4} md={4} sm={5} xs={12} id="logo3">
              <div>
                <img src={whoWe} alt="Image" />
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default WhoWeAre;
