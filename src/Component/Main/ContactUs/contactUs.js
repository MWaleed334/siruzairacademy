import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Button from '@mui/material/Button';
import "./contactUs.css"
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container'

import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MetaData from '../../Screens/MetaData'


function ContactUs() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
    return (
        <div>
            <MetaData title="Contact Us" />

            <div id="contact-bg">
            <div >
                <Grid container>
                        <Grid item lg={1} md={1} xs={1} sm={1}></Grid>
                        <Grid item lg={11} sm={11} md={11} xs={11}>
                            <h1 className="head" ></h1>
                        </Grid>
                </Grid>
            </div>
            </div>
            <div>
                <Container width="md" data-aos="fade-right" style={{ marginTop: "-80px", marginBottom: "80px", backgroundColor: "white", transition: "2s", border:"2px solid #b22222" }}>
                    <Grid container>
                        <Grid item lg={8} md={8} sm={8} xs={12}>
                            <div style={{ textAlign: "center" }}>
                                <h1 style={{ marginTop: '20px', display: "inline-block", textAlign: "center", color: '#ecebf0', border: '2px solid black', backgroundColor: "black" }} >Contact us</h1>
                            </div>
                            <div color="black" className='div_contact'>
                                <h1 >Get In Touch</h1>
                            </div>
                            
                            <div className='div_contact'>
                                <Grid container>
                                    <Grid item lg={12} md={12} sm={12} xs={12} >
                                        <TextField label='First Name' placeholder="First Name" variant="outlined"  />
                                    </Grid>
                                </Grid>
                            </div>
                            <br />
                            <div className='div_contact'>
                                <Grid container>
                                    <Grid item lg={12} md={12} sm={12} xs={12}>
                                        <TextField label='Last Name' placeholder="Last Name" variant="outlined"  />
                                    </Grid>
                                </Grid>
                            </div>
                            <br />
                            <div className='div_contact'>
                                <Grid container>
                                    <Grid item lg={12} md={12} sm={12} xs={12} >
                                        <TextField label='Your Email' placeholder="Your Email" variant="outlined"  />
                                    </Grid>
                                </Grid>
                            </div>
                            <br />
                            <div className='div_contact'>
                                <Grid container>
                                    <Grid item lg={12} md={12} sm={12} xs={12} >
                                        <TextField label='Your Phone' placeholder="Your Phone" variant="outlined"  />
                                    </Grid>
                                </Grid>
                            </div>
                            <br />
                           
                            <div className='div_contact'>
                                <Grid container>
                                    <Grid item lg={12} md={12} sm={12} xs={12} style={{ textAlign: "center" }}>
                                        <TextField label='Subject' placeholder="Subject" variant="outlined"  />
                                    </Grid>
                                </Grid>
                            </div>
                            <br />
                            <div className='div_contact'>
                                <Grid container>
                                    <Grid item lg={12} md={12} sm={12} xs={12} style={{ textAlign: "center" }}>
                                        <TextField label='Message' placeholder="Message" variant="outlined"  />
                                    </Grid>
                                </Grid>
                            </div>
                            <br />
                            <div className='div_contact_btn'>
                                <Grid container>
                                    <Grid item lg={12} md={12} sm={12} xs={12} >
                                        <Button  label="submit" variant="contained" style={{ color: "white", backgroundColor: "black"}}>Submit Now</Button>
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>

                        <Grid lg={4} md={4} sm={4} xs={12} style={{ backgroundColor: "rgb(43, 27, 27)", textAlign: "center" }}>
                            <h1 style={{ color: "#b22222" }}>Our Campus</h1>
                            <h3 style={{ color: "#b22222" }}>Pakistan</h3>
                            <p ><HomeIcon style={{ color: "#b22222" }} />R-586, Sector 9,</p>
                            <p >Near Disco More,</p>
                            <p >North-Karachi,Karachi..</p>
                            <p ><PhoneIcon style={{ color: "#b22222" }} />Phone:(033)-2345-5452</p>
                            <p ><EmailOutlinedIcon style={{ color: "#b22222" }} />Email: info@suaofficial.com</p>
                        </Grid>

                    </Grid>

                </Container>
            </div>
        </div>
    )
}

export default ContactUs;