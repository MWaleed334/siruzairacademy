import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import "./footer.css"
import { Button } from '@mui/material';
function Footer() {
  return (
    <div>
      <div>
        <Grid container>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <div id="bg4" marginTop="90px">
              <div style={{ color: "white" }}>
                <Container width="md">
                  <Grid container>
                    <Grid lg={6} md={6} sm={6} xs={12}>
                      <h2 style={{ paddingTop: "70px", color: "#B22222" }}>What We Offer</h2>
                      <ul>
                        <li><h3>Personalized Learning</h3></li>
                        <li><h3>One To One Attention</h3></li>
                        <li><h3>Proper Revision</h3></li>
                        <li><h3>Personal & Career Counseling</h3></li>
                        <li><h3>Preparation From Past 25 Year Papers</h3></li>
                        <li><h3>Advanced Strategy & Study Plan</h3></li>
                      </ul>
                    </Grid>
                    <Grid lg={6} md={6} sm={6} xs={12}>
                      <h2 style={{ paddingTop: "70px", color: "#B22222" }}>Contacts</h2>
                      <h3 style={{ text: "bold" }}>
                        <HomeIcon style={{ color: "#B22222", paddingRight: "6px" }} />R-586, Sector 9,</h3>
                      <h3 style={{ text: "bold", marginLeft: "30px" }}>Near Disco More,</h3>
                      <h3 style={{ text: "bold", marginLeft: "30px" }}>North-Karachi,Karachi.</h3>
                      <h3 style={{ text: "bold" }}>
                        <PhoneIcon style={{ color: "#B22222", paddingRight: "6px" }} />Phone: (033)-2345-5452</h3>
                      <h3 style={{ text: "bold" }}>
                        <EmailOutlinedIcon style={{ color: "#B22222", paddingRight: "6px" }} />Email: info@suaofficial.com </h3>
                    </Grid>
                  </Grid>
                </Container>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      {/* Footer */}
      <div style={{ backgroundColor: "black", padding: "8px", marginTop: "1px" }} >
        <Container width="md">
          <Grid container>
            <Grid item lg={8} md={8} sm={8} xs={12} style={{ color: "white", paddingTop: "10px" }}>
              @2023, <a style={{ color: "#B22222", fontWeight: "600" }}>MUHAMMAD WALEED</a><a>. All Rights Reserved.</a>
            </Grid>
            <Grid item lg={4} md={4} sm={4} xs={12}>
              <Grid container>
                <Grid lg={2} md={2} sm={2} xs={2}>
                  <Button >
                    <a href="https://www.facebook.com/siruzairsacademy?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
                      <Avatar style={{ fontSize: "10px", backgroundColor: "white", color: "black", border: "2px solid white" }}>
                        <FacebookIcon />
                      </Avatar>
                    </a>
                  </Button>
                </Grid>
                <Grid lg={2} md={2} sm={2} xs={2}>
                  <Button className="btn_avatar">
                    <a href="https://instagram.com/siruzairsacademy?igshid=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">
                      <Avatar style={{ backgroundColor: "white", color: "black", border: "2px solid white" }}>
                        <InstagramIcon />
                      </Avatar>
                    </a>
                  </Button>
                </Grid>
                <Grid lg={2} md={2} sm={2} xs={2}>
                  <Button className="btn_avatar">
                    <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer">
                      <Avatar style={{ backgroundColor: "white", color: "black", border: "2px solid white" }}>
                        <WhatsAppIcon />
                      </Avatar>
                    </a>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default Footer;
