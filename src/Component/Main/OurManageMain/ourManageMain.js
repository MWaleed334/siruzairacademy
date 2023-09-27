import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Grid from '@mui/material/Grid';
import './ourManageMain.css';
import Img1 from '../../Images/img1.jpeg';
import Img2 from '../../Images/img3.jpeg';
import Img3 from '../../Images/img2.jpeg';
import Img4 from '../../Images/img4.jpeg';
import MetaData from '../../Screens/MetaData';

function TopManagement() {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <MetaData title="Top Management" />
      <div id="top-bg">
        <Grid container>
          <Grid item lg={1} md={1} xs={1} sm={1} />
          <Grid item lg={11} sm={11} md={11} xs={11}>
            <h1 className="head"></h1>
          </Grid>
        </Grid>
      </div>

      <div style={{ marginTop: "40px" }}>
        <div style={{ marginTop: "100px", backgroundColor: "rgb(43, 27, 27)", marginBottom: "5px" }}>
          <Grid container style={{ marginTop: "-40px" }} className="top-manage">
            <Grid item lg={1} md={2} sm={12} xs={6}>
              <div data-aos="fade-right" className="img1">
                <img src={Img1} alt='image' />
              </div>
            </Grid>
            <Grid item lg={1.5} md={1.5} xs={12}></Grid>
            <Grid item lg={3} md={2} sm={12} xs={12}>
              <div className='Top_Management_text'>
                <div>
                  <h1 style={{color:"white"}}>FOUNDER/PHYSICS</h1>
                  <h3 style={{ color: "#b22222" }}>SIR MUHAMMAD UZAIR SIDDQUI</h3>
                </div>
                <div style={{ color: "#1a3947" }}>
                  <p>
                    "Sir Muhammad Uzair Siddiqui embarked on his teaching journey 15 years ago, dedicating himself to the noble art of education. Over the years, he has meticulously built a sterling reputation as an exceptional educator in his field. With a rich tapestry of professional experience, Muhammad Uzair Siddiqui is committed to imparting knowledge and fostering academic growth. What sets him apart is not only his extensive experience but also his passion for teaching, ensuring that students receive the best possible guidance."
                  </p>
                </div>
              </div>
            </Grid>
            <Grid item lg={0.3} md={0.3}></Grid>
            <Grid item lg={0.3} md={0.2} className="border"></Grid>
            <Grid item lg={1} md={2} sm={12} xs={6}>
              <div data-aos="fade-left" className="img1">
                <img src={Img2} alt="image2" />
              </div>
            </Grid>
            <Grid item lg={1.5} md={1.5} sm={0}></Grid>
            <Grid item lg={3} md={2} sm={12} xs={12}>
              <div className='Top_Management_text'>
                <div>
                  <h1 style={{color:"white"}}>COMPUTER</h1>
                  <h3 style={{ color: "#b22222" }}>SIR ANAS SHAHID</h3>
                </div>
                <div style={{ color: "#1a3947" }}>
                  <p>
                    "Sir Anas  Shahid, our esteemed computer teacher, brings a wealth of experience and expertise to our institution. With a strong background in the field of computer science, he has been guiding students towards digital literacy and technical proficiency for several years. His dedication to nurturing young minds in the realm of technology is evident through his innovative teaching methods and commitment to staying updated with the ever-evolving world of computers. Under Sir Anas's guidance, students gain not only knowledge but also a passion for the limitless possibilities of the digital world.."
                  </p>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>

        <div style={{ marginTop: "100px", backgroundColor: "rgb(43, 27, 27)", marginBottom: "50px" }}>
          <Grid container style={{ marginTop: "-40px" }} className="top-manage">
            <Grid item lg={1} md={2} sm={12} xs={6}>
              <div data-aos="fade-right" className="img1">
                <img src={Img3} alt="image3" />
              </div>
            </Grid>
            <Grid item lg={1.5} md={1.5} xs={12}></Grid>
            <Grid item lg={3} md={2} sm={12} xs={12}>
              <div className='Top_Management_text'>
                <div>
                  <h1 style={{color:"white"}}>CHEMISTRY</h1>
                  <h3 style={{ color: "#b22222" }}>SIR MAHAD HUSSAIN</h3>
                </div>
                <div style={{ color: "#1a3947" }}>
                  <p>
                    "Sir Mahad Hussain, our esteemed chemistry instructor, possesses extensive experience and expertise in the realm of chemistry education. With a rich teaching history, he has finely tuned his pedagogical approach to captivate and educate students effectively. His dedication to demystifying intricate chemical concepts and cultivating an interactive learning atmosphere distinguishes him. Sir Mahad's seasoned background and profound grasp of the subject empower students to excel in their chemistry studies, fostering a deep fascination with the intricate world of molecules.!"
                  </p>
                </div>
              </div>
            </Grid>
            <Grid item lg={0.3} md={0.3}></Grid>
            <Grid item lg={0.3} md={0.2} className="border"></Grid>
            <Grid item lg={1} md={2} sm={12} xs={6}>
              <div data-aos="fade-left" className="img1">
                <img src={Img4} alt="image4" />
              </div>
            </Grid>
            <Grid item lg={1.5} md={1.5} sm={0}></Grid>
            <Grid item lg={3} md={2} sm={12} xs={12}>
              <div className='Top_Management_text'>
                <div>
                  <h1 style={{color:"white"}}>MATHEMATICS</h1>
                  <h3 style={{ color: "#b22222" }}>SIR HASNAIN SHAHID</h3>
                </div>
                <div style={{ color: "#1a3947" }}>
                  <p>
                    "Sir Hassnain, our proficient mathematics educator, brings a wealth of experience and knowledge to the realm of mathematical learning. With an illustrious teaching career, he has honed his instructional techniques to engage and enlighten students effectively. His commitment to unraveling the mysteries of mathematics and fostering an interactive learning environment is remarkable. Sir Hassnain's extensive background and deep understanding of the subject empower students to excel in their mathematical pursuits, instilling confidence and a profound appreciation for the beauty of numbers and equations.."
                  </p>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  )
}

export default TopManagement;
