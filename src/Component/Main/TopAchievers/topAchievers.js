import { useEffect, React } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import MetaData from '../../Screens/MetaData';
import "./topAchievers.css";

function TopAchievers() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        
        <>
        <MetaData title="Top Achievers" />
        <div className="image-container">
            <div className='head'>
                <h1>OUR TOP ACHIEVERS<p>CLASS X SCIENCE</p></h1>
            </div>
            <div className="table-row">
                <TableContainer component={Paper} className="table-container">
                    <h1>Year 2013</h1>
                    <Table aria-label="Aesthetic Table" className="table">
                        <TableHead>
                            <TableRow>
                                <TableCell className="student-header" align="center" style={{color:"white", fontWeight: "bold"}}>Student Name</TableCell>
                                <TableCell className="percentage-header" align="center" style={{color:"white", fontWeight: "bold", fontSize:"16px"}}>Percentage</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* Sample data, you can replace it with your data */}
                            <TableRow>
                                <TableCell className="student-cell" style={{color:"white"}}>Osama Ali</TableCell>
                                <TableCell className="percentage-cell" style={{color:"white"}}>89.3%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell" style={{color:"white"}}>Zunair Waris</TableCell>
                                <TableCell className="percentage-cell" style={{color:"white"}}>88.7%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell" style={{color:"white"}}>Fahad Shakoor</TableCell>
                                <TableCell className="percentage-cell" style={{color:"white"}}>88.4%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell" style={{color:"white"}}>Muhammad Ali</TableCell>
                                <TableCell className="percentage-cell" style={{color:"white"}}>86.5%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell" style={{color:"white"}}>Asra Nadeem</TableCell>
                                <TableCell className="percentage-cell" style={{color:"white"}}>85.9%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell" style={{color:"white"}}>Anas Nizami</TableCell>
                                <TableCell className="percentage-cell" style={{color:"white"}}>85.6%</TableCell>
                            </TableRow>
                            {/* Add more rows as needed */}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TableContainer component={Paper} className="table-container">
                    <h1>Year 2014</h1>
                    <Table aria-label="Aesthetic Table" className="table">
                        <TableHead>
                            <TableRow>
                                <TableCell className="student-header" align="center" style={{color:"white", fontWeight: "bold"}}>Student Name</TableCell>
                                <TableCell className="percentage-header" align="center" style={{color:"white", fontWeight: "bold", fontSize:"16px"}}>Percentage</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* Sample data, you can replace it with your data */}
                            <TableRow>
                                <TableCell className="student-cell" style={{color:"white"}}>Sheeza Raza</TableCell>
                                <TableCell className="percentage-cell" style={{color:"white"}}>90.3%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell" style={{color:"white"}}>Muhammad Haris</TableCell>
                                <TableCell className="percentage-cell" style={{color:"white"}}>87.2%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell" style={{color:"white"}}>Anoosha Ahmed</TableCell>
                                <TableCell className="percentage-cell" style={{color:"white"}}>86.4%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell" style={{color:"white"}}>Muhammad Anas Siddqui</TableCell>
                                <TableCell className="percentage-cell" style={{color:"white"}}>85.6%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell" style={{color:"white"}}>Owais Zakir</TableCell>
                                <TableCell className="percentage-cell" style={{color:"white"}}>83.7%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell" style={{color:"white"}}>Dua Zeeshan</TableCell>
                                <TableCell className="percentage-cell" style={{color:"white"}}>83.2%</TableCell>
                            </TableRow>
                            {/* Add more rows as needed */}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TableContainer component={Paper} className="table-container">
                    <h1>Year 2015</h1>
                    <Table aria-label="Aesthetic Table" className="table">
                        <TableHead>
                            <TableRow>
                                <TableCell className="student-header" align="center" style={{color:"white", fontWeight: "bold"}}>Student Name</TableCell>
                                <TableCell className="percentage-header" align="center" style={{color:"white", fontWeight: "bold", fontSize:"16px"}}>Percentage</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* Sample data, you can replace it with your data */}
                            <TableRow>
                                <TableCell className="student-cell" style={{color:"white"}}>Sheeza Raza</TableCell>
                                <TableCell className="percentage-cell" style={{color:"white"}}>90.3%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell" style={{color:"white"}}>Muhammad Haris</TableCell>
                                <TableCell className="percentage-cell" style={{color:"white"}}>87.2%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell" style={{color:"white"}}>Anoosha Ahmed</TableCell>
                                <TableCell className="percentage-cell" style={{color:"white"}}>86.4%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell" style={{color:"white"}}>Muhammad Anas Siddqui</TableCell>
                                <TableCell className="percentage-cell" style={{color:"white"}}>85.6%</TableCell>
                            </TableRow>
                            {/* Add more rows as needed */}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TableContainer component={Paper} className="table-container">
                    <h1>Year 2016</h1>
                    <Table aria-label="Aesthetic Table" className="table">
                        <TableHead>
                            <TableRow>
                                <TableCell className="student-header" align="center" style={{color:"white", fontWeight: "bold"}}>Student Name</TableCell>
                                <TableCell className="percentage-header" align="center" style={{color:"white", fontWeight: "bold", fontSize:"16px"}}>Percentage</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* Sample data, you can replace it with your data */}
                            <TableRow>
                                <TableCell className="student-cell" style={{color:"white"}}>Sheeza Raza</TableCell>
                                <TableCell className="percentage-cell" style={{color:"white"}}>90.3%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell" style={{color:"white"}}>Muhammad Haris</TableCell>
                                <TableCell className="percentage-cell" style={{color:"white"}}>87.2%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell" style={{color:"white"}}>Anoosha Ahmed</TableCell>
                                <TableCell className="percentage-cell" style={{color:"white"}}>86.4%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell" style={{color:"white"}}>Muhammad Anas Siddqui</TableCell>
                                <TableCell className="percentage-cell" style={{color:"white"}}>85.6%</TableCell>
                            </TableRow>
                            {/* Add more rows as needed */}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TableContainer component={Paper} className="table-container">
                    <h1>Year 2017</h1>
                    <Table aria-label="Aesthetic Table" className="table">
                        <TableHead>
                            <TableRow>
                                <TableCell className="student-header" align="center" style={{color:"white", fontWeight: "bold"}}>Student Name</TableCell>
                                <TableCell className="percentage-header" align="center" style={{color:"white", fontWeight: "bold", fontSize:"16px"}}>Percentage</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* Sample data, you can replace it with your data */}
                            <TableRow>
                                <TableCell className="student-cell" style={{color:"white"}}>Anas Shahid</TableCell>
                                <TableCell className="percentage-cell" style={{color:"white"}}>89.8%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell" style={{color:"white"}}>Sidra Tul Muntaha</TableCell>
                                <TableCell className="percentage-cell" style={{color:"white"}}>87.6%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell" style={{color:"white"}}>Neha Khan</TableCell>
                                <TableCell className="percentage-cell" style={{color:"white"}}>87.1%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell" style={{color:"white"}}>Sharjeel Ikram</TableCell>
                                <TableCell className="percentage-cell" style={{color:"white"}}>84.6%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell" style={{color:"white"}}>Syeda Zehra Naqvi</TableCell>
                                <TableCell className="percentage-cell" style={{color:"white"}}>83.6%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell" style={{color:"white"}}>Muhammad Waleed Ahsan</TableCell>
                                <TableCell className="percentage-cell" style={{color:"white"}}>82.5%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell" style={{color:"white"}}>Asharib Ahmed</TableCell>
                                <TableCell className="percentage-cell" style={{color:"white"}}>82.3%</TableCell>
                            </TableRow>
                            {/* Add more rows as needed */}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TableContainer component={Paper} className="table-container">
                    <h1>Year 2018</h1>
                    <Table aria-label="Aesthetic Table" className="table">
                        <TableHead>
                            <TableRow>
                                <TableCell className="student-header" align="center" style={{color:"white", fontWeight: "bold"}}>Student Name</TableCell>
                                <TableCell className="percentage-header" align="center" style={{color:"white", fontWeight: "bold", fontSize:"16px"}}>Percentage</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* Sample data, you can replace it with your data */}
                            <TableRow>
                                <TableCell className="student-cell" style={{color:"white"}}>Shehzeen Fakhar</TableCell>
                                <TableCell className="percentage-cell" style={{color:"white"}}>88.6%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell" style={{color:"white"}}>Rimsha Anwar</TableCell>
                                <TableCell className="percentage-cell" style={{color:"white"}}>87.5%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell" style={{color:"white"}}>Sumair Siddqui</TableCell>
                                <TableCell className="percentage-cell" style={{color:"white"}}>84.6%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell" style={{color:"white"}}>Hassam Qasim</TableCell>
                                <TableCell className="percentage-cell" style={{color:"white"}}>84.63%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell" style={{color:"white"}}>Faiza Kalam</TableCell>
                                <TableCell className="percentage-cell" style={{color:"white"}}>83.4%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell" style={{color:"white"}}>Ali Mustaqeem</TableCell>
                                <TableCell className="percentage-cell" style={{color:"white"}}>83.4%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell" style={{color:"white"}}>Ayan Siddqui</TableCell>
                                <TableCell className="percentage-cell" style={{color:"white"}}>82.6%</TableCell>
                            </TableRow>
                            {/* Add more rows as needed */}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TableContainer component={Paper} className="table-container">
                    <h1>Year 2019</h1>
                    <Table aria-label="Aesthetic Table" className="table">
                        <TableHead>
                            <TableRow>
                                <TableCell className="student-header" align="center" style={{color:"white", fontWeight: "bold"}}>Student Name</TableCell>
                                <TableCell className="percentage-header" align="center" style={{color:"white", fontWeight: "bold", fontSize:"16px"}}>Percentage</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* Sample data, you can replace it with your data */}
                            <TableRow>
                                <TableCell className="student-cell" style={{color:"white"}}>Ushba Nadeem</TableCell>
                                <TableCell className="percentage-cell" style={{color:"white"}}>89.8%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell" style={{color:"white"}}>Bushra Mehmood</TableCell>
                                <TableCell className="percentage-cell" style={{color:"white"}}>82.8%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell" style={{color:"white"}}>Haseeb Maliik</TableCell>
                                <TableCell className="percentage-cell" style={{color:"white"}}>81.6%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell" style={{color:"white"}}>Osama Aslam</TableCell>
                                <TableCell className="percentage-cell" style={{color:"white"}}>81.3%</TableCell>
                            </TableRow>
                            {/* Add more rows as needed */}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TableContainer component={Paper} className="table-container">
                    <h1>Year 2020</h1>
                    <Table aria-label="Aesthetic Table" className="table">
                        <TableHead>
                            <TableRow>
                                <TableCell className="student-header" align="center" style={{color:"white", fontWeight: "bold"}}>Student Name</TableCell>
                                <TableCell className="percentage-header" align="center" style={{color:"white", fontWeight: "bold", fontSize:"16px"}}>Percentage</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* Sample data, you can replace it with your data */}
                            <TableRow>
                                <TableCell className="student-cell" style={{color:"white"}}>Mahad Husaain</TableCell>
                                <TableCell className="percentage-cell" style={{color:"white"}}>86.8%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell" style={{color:"white"}}>Shafaq Shafiqullah</TableCell>
                                <TableCell className="percentage-cell" style={{color:"white"}}>85.6%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell" style={{color:"white"}}>M.Hammad</TableCell>
                                <TableCell className="percentage-cell" style={{color:"white"}}>84.5%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell" style={{color:"white"}}>M.Huzaifa</TableCell>
                                <TableCell className="percentage-cell" style={{color:"white"}}>84.3%</TableCell>
                            </TableRow>
                            {/* Add more rows as needed */}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TableContainer component={Paper} className="table-container">
                    <h1>Year 2021</h1>
                    <Table aria-label="Aesthetic Table" className="table">
                        <TableHead>
                            <TableRow>
                                <TableCell className="student-header" align="center" style={{color:"white", fontWeight: "bold"}}>Student Name</TableCell>
                                <TableCell className="percentage-header" align="center" style={{color:"white", fontWeight: "bold", fontSize:"16px"}}>Percentage</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* Sample data, you can replace it with your data */}
                            <TableRow>
                                <TableCell className="student-cell" style={{color:"white"}}>M. Hasnain Shahid</TableCell>
                                <TableCell className="percentage-cell" style={{color:"white"}}>94.6%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell" style={{color:"white"}}>Areesha Naseem</TableCell>
                                <TableCell className="percentage-cell" style={{color:"white"}}>88.29%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell" style={{color:"white"}}>Iqra Akbar</TableCell>
                                <TableCell className="percentage-cell" style={{color:"white"}}>88.18%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell" style={{color:"white"}}>Umais Shamsi</TableCell>
                                <TableCell className="percentage-cell" style={{color:"white"}}>86.36%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell" style={{color:"white"}}>Abdullah Taufeeq</TableCell>
                                <TableCell className="percentage-cell" style={{color:"white"}}>85.18%</TableCell>
                            </TableRow>
                            {/* Add more rows as needed */}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TableContainer component={Paper} className="table-container">
                    <h1>Year 2022</h1>
                    <Table aria-label="Aesthetic Table" className="table">
                        <TableHead>
                            <TableRow>
                                <TableCell className="student-header" align="center" style={{color:"white", fontWeight: "bold"}}>Student Name</TableCell>
                                <TableCell className="percentage-header" align="center" style={{color:"white", fontWeight: "bold", fontSize:"16px"}}>Percentage</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* Sample data, you can replace it with your data */}
                            <TableRow>
                                <TableCell className="student-cell" style={{color:"white"}}>Alina Khan</TableCell>
                                <TableCell className="percentage-cell" style={{color:"white"}}>92.63%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell" style={{color:"white"}}>Mahad Hasan</TableCell>
                                <TableCell className="percentage-cell" style={{color:"white"}}>85.59%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell" style={{color:"white"}}>Ali Shahid</TableCell>
                                <TableCell className="percentage-cell" style={{color:"white"}}>85%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell" style={{color:"white"}}>Armeen Arif</TableCell>
                                <TableCell className="percentage-cell" style={{color:"white"}}>85.09%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell" style={{color:"white"}}>Abdullah Khan</TableCell>
                                <TableCell className="percentage-cell" style={{color:"white"}}>83.36%</TableCell>
                            </TableRow>
                            {/* Add more rows as needed */}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TableContainer component={Paper} className="table-container">
                    <h1>Year 2023</h1>
                    <Table aria-label="Aesthetic Table" className="table">
                        <TableHead>
                            <TableRow>
                                <TableCell className="student-header" align="center" style={{color:"white", fontWeight: "bold"}}>Student Name</TableCell>
                                <TableCell className="percentage-header" align="center" style={{color:"white", fontWeight: "bold"}}>Percentage</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* Sample data, you can replace it with your data */}
                            <TableRow>
                                <TableCell className="student-cell" style={{color:"white"}}>Arsalan Adnan</TableCell>
                                <TableCell className="percentage-cell" style={{color:"white"}}>90.00%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell" style={{color:"white"}}>Rahim Uddin</TableCell>
                                <TableCell className="percentage-cell" style={{color:"white"}}>86.54%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell" style={{color:"white"}}>Moiz Raza</TableCell>
                                <TableCell className="percentage-cell" style={{color:"white"}}>85.91%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell" style={{color:"white"}}>Teham</TableCell>
                                <TableCell className="percentage-cell" style={{color:"white"}}>84.73%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell" style={{color:"white"}}>Labiqa</TableCell>
                                <TableCell className="percentage-cell" style={{color:"white"}}>84.45%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell" style={{color:"white"}}>Farjad Hussain</TableCell>
                                <TableCell className="percentage-cell" style={{color:"white"}}>84.09%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell" style={{color:"white"}}>Maham Masood</TableCell>
                                <TableCell className="percentage-cell" style={{color:"white"}}>83.47%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell" style={{color:"white"}}>Sarah Sohail</TableCell>
                                <TableCell className="percentage-cell" style={{color:"white"}}>83.36%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell" style={{color:"white"}}>Asharib Ahmed</TableCell>
                                <TableCell className="percentage-cell" style={{color:"white"}}>82.09%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell" style={{color:"white"}}>Amna Fatima</TableCell>
                                <TableCell className="percentage-cell" style={{color:"white"}}>81.00%</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
        </>
    );
}

export default TopAchievers;
