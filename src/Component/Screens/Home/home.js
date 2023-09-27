import Grid from '@mui/material/Grid';
import PlaceIcon from '@mui/icons-material/Place';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import logo from '../../Images/logo1.jpeg';
import Container from '@mui/material/Container';
import "./home.css";
import { useEffect } from "react";
import MetaData from "../MetaData";
// import { useNavigate } from 'react-router-dom';
import WhoWeAre from "../WhoWeAre/whoWeAre";
import OurStrategy from '../OurStrategy/ourStrategy';
import OurCEO from "../OurCEO/ourCEO";
import OurManagement from "../OurManagement/ourManage";
import WhyChooseUs from "../WhyChooseUs/whyChooseUs"

function Home() {
    // const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <MetaData title="Home" />
            <div id="bg1" >
                <Grid container>
                    <Grid item lg={5} md={5} sm={5} xs={3}></Grid>
                    <Grid item lg={3} md={3} sm={3} xs={7} id="logo12">
                        <img src={logo} alt="Image" />
                    </Grid>
                </Grid>
                <div id="text" style={{ paddingTop: "-20px", transition: "2s" }} data-aos="fade-down">
                    <h1>Committed to Quality<br />Committed to You</h1>
                </div>
            </div>
            <div>
                <Container>
                    <Grid container style={{ marginTop: "-40px" }} className="rotate1">
                        <Grid item lg={3.5} md={3.5} sm={5} xs={10} className="rotate2">
                            <PlaceIcon style={{ fontSize: "50px", padding: "10px" }} />
                            <h3 >Location</h3>
                            <p >R-586, Sector 9,<br />
                                Near Disco More,<br />
                                North-Karachi,Karachi.<br />
                            </p>
                        </Grid>
                        <Grid item lg={3.5} md={3.5} sm={5} xs={10} className="rotate2">
                            <ContactPhoneIcon style={{ fontSize: "50px", padding: "14px" }} />
                            <h3 >Call Now</h3>
                            <p >(033)-2345-5452</p>
                        </Grid>
                        <Grid item lg={3.5} md={3.5} sm={5} xs={10} className="rotate2">
                            <QuestionAnswerIcon style={{ fontSize: "50px", padding: "10px" }} />
                            <h3 >Have Queries?</h3>
                            <p >Contact Us Now!</p>
                            <p >info@suaofficial.com</p>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <WhoWeAre />
            <OurStrategy />
            <OurManagement />
            <OurCEO />
            <WhyChooseUs />
        </div>
    );
}

export default Home;
