import React from "react";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container'
import WhyChoose from "../../Images/WhyChoose2.jpg"
import "./whyChooseUs.css"

function WhyChooseUs() {
    return (
        <div className="whyChoose">
            <Container size="md">
                <Grid container>

                    <Grid item lg={4} md={4} sm={5} xs={12} className="whyLogo" data-aos="fade-right" style={{ transition: "1s" }}>
                        <div>
                            <img src={WhyChoose} alt="image" />
                        </div>
                    </Grid>

                    <Grid item lg={1.5} md={1} sm={2} ></Grid>
                    <Grid item lg={6} md={6} sm={5} xs={12} className="WhyContent" data-aos="fade-left" style={{ transition: "1s" }}>
                        <h1>WHY CHOOSE US</h1>
                        <p>Choosing our tutoring organization is an excellent decision for anyone seeking academic support and guidance. We stand out for several compelling reasons. First and foremost, our team comprises highly qualified and experienced educators who are dedicated to nurturing students' potential. We provide personalized learning experiences, tailoring our teaching methods to each student's unique needs and learning style. Our commitment to excellence ensures that students receive top-notch instruction in a supportive and encouraging environment. We offer flexible scheduling and a variety of subjects and courses, making it convenient for learners of all ages and levels. Furthermore, our track record of success, with many students achieving remarkable improvements in their academic performance, speaks volumes about the quality of our services. By choosing us, students are making a choice for academic excellence, personalized attention, and a brighter educational future</p>
                    </Grid>

                </Grid>
            </Container>
        </div>
    )
}

export default WhyChooseUs;