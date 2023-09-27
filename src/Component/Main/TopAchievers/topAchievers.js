import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import MetaData from '../../Screens/MetaData';
import "./topAchievers.css";

function TopAchievers() {
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
                                <TableCell className="student-header" align="center">Student Name</TableCell>
                                <TableCell className="percentage-header" align="center">Percentage</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* Sample data, you can replace it with your data */}
                            <TableRow>
                                <TableCell className="student-cell">Osama Ali</TableCell>
                                <TableCell className="percentage-cell">89.3%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell">Zunair Waris</TableCell>
                                <TableCell className="percentage-cell">88.7%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell">Fahad Shakoor</TableCell>
                                <TableCell className="percentage-cell">88.4%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell">Muhammad Ali</TableCell>
                                <TableCell className="percentage-cell">86.5%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell">Asra Nadeem</TableCell>
                                <TableCell className="percentage-cell">85.9%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell">Anas Nizami</TableCell>
                                <TableCell className="percentage-cell">85.6%</TableCell>
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
                                <TableCell className="student-header" align="center">Student Name</TableCell>
                                <TableCell className="percentage-header" align="center">Percentage</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* Sample data, you can replace it with your data */}
                            <TableRow>
                                <TableCell className="student-cell">Sheeza Raza</TableCell>
                                <TableCell className="percentage-cell">90.3%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell">Muhammad Haris</TableCell>
                                <TableCell className="percentage-cell">87.2%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell">Anoosha Ahmed</TableCell>
                                <TableCell className="percentage-cell">86.4%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell">Muhammad Anas Siddqui</TableCell>
                                <TableCell className="percentage-cell">85.6%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell">Owais Zakir</TableCell>
                                <TableCell className="percentage-cell">83.7%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell">Dua Zeeshan</TableCell>
                                <TableCell className="percentage-cell">83.2%</TableCell>
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
                                <TableCell className="student-header" align="center">Student Name</TableCell>
                                <TableCell className="percentage-header" align="center">Percentage</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* Sample data, you can replace it with your data */}
                            <TableRow>
                                <TableCell className="student-cell">Sheeza Raza</TableCell>
                                <TableCell className="percentage-cell">90.3%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell">Muhammad Haris</TableCell>
                                <TableCell className="percentage-cell">87.2%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell">Anoosha Ahmed</TableCell>
                                <TableCell className="percentage-cell">86.4%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell">Muhammad Anas Siddqui</TableCell>
                                <TableCell className="percentage-cell">85.6%</TableCell>
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
                                <TableCell className="student-header" align="center">Student Name</TableCell>
                                <TableCell className="percentage-header" align="center">Percentage</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* Sample data, you can replace it with your data */}
                            <TableRow>
                                <TableCell className="student-cell">Sheeza Raza</TableCell>
                                <TableCell className="percentage-cell">90.3%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell">Muhammad Haris</TableCell>
                                <TableCell className="percentage-cell">87.2%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell">Anoosha Ahmed</TableCell>
                                <TableCell className="percentage-cell">86.4%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell">Muhammad Anas Siddqui</TableCell>
                                <TableCell className="percentage-cell">85.6%</TableCell>
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
                                <TableCell className="student-header" align="center">Student Name</TableCell>
                                <TableCell className="percentage-header" align="center">Percentage</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* Sample data, you can replace it with your data */}
                            <TableRow>
                                <TableCell className="student-cell">Anas Shahid</TableCell>
                                <TableCell className="percentage-cell">89.8%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell">Sidra Tul Muntaha</TableCell>
                                <TableCell className="percentage-cell">87.6%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell">Neha Khan</TableCell>
                                <TableCell className="percentage-cell">87.1%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell">Sharjeel Ikram</TableCell>
                                <TableCell className="percentage-cell">84.6%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell">Syeda Zehra Naqvi</TableCell>
                                <TableCell className="percentage-cell">83.6%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell">Muhammad Waleed Ahsan</TableCell>
                                <TableCell className="percentage-cell">82.5%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell">Asharib Ahmed</TableCell>
                                <TableCell className="percentage-cell">82.3%</TableCell>
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
                                <TableCell className="student-header" align="center">Student Name</TableCell>
                                <TableCell className="percentage-header" align="center">Percentage</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* Sample data, you can replace it with your data */}
                            <TableRow>
                                <TableCell className="student-cell">Shehzeen Fakhar</TableCell>
                                <TableCell className="percentage-cell">88.6%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell">Rimsha Anwar</TableCell>
                                <TableCell className="percentage-cell">87.5%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell">Sumair Siddqui</TableCell>
                                <TableCell className="percentage-cell">84.6%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell">Hassam Qasim</TableCell>
                                <TableCell className="percentage-cell">84.63%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell">Faiza Kalam</TableCell>
                                <TableCell className="percentage-cell">83.4%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell">Ali Mustaqeem</TableCell>
                                <TableCell className="percentage-cell">83.4%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell">Ayan Siddqui</TableCell>
                                <TableCell className="percentage-cell">82.6%</TableCell>
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
                                <TableCell className="student-header" align="center">Student Name</TableCell>
                                <TableCell className="percentage-header" align="center">Percentage</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* Sample data, you can replace it with your data */}
                            <TableRow>
                                <TableCell className="student-cell">Ushba Nadeem</TableCell>
                                <TableCell className="percentage-cell">89.8%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell">Bushra Mehmood</TableCell>
                                <TableCell className="percentage-cell">82.8%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell">Haseeb Maliik</TableCell>
                                <TableCell className="percentage-cell">81.6%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell">Osama Aslam</TableCell>
                                <TableCell className="percentage-cell">81.3%</TableCell>
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
                                <TableCell className="student-header" align="center">Student Name</TableCell>
                                <TableCell className="percentage-header" align="center">Percentage</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* Sample data, you can replace it with your data */}
                            <TableRow>
                                <TableCell className="student-cell">Mahad Husaain</TableCell>
                                <TableCell className="percentage-cell">86.8%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell">Shafaq Shafiqullah</TableCell>
                                <TableCell className="percentage-cell">85.6%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell">M.Hammad</TableCell>
                                <TableCell className="percentage-cell">84.5%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell">M.Huzaifa</TableCell>
                                <TableCell className="percentage-cell">84.3%</TableCell>
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
                                <TableCell className="student-header" align="center">Student Name</TableCell>
                                <TableCell className="percentage-header" align="center">Percentage</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* Sample data, you can replace it with your data */}
                            <TableRow>
                                <TableCell className="student-cell">M. Hasnain Shahid</TableCell>
                                <TableCell className="percentage-cell">94.6%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell">Areesha Naseem</TableCell>
                                <TableCell className="percentage-cell">88.29%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell">Iqra Akbar</TableCell>
                                <TableCell className="percentage-cell">88.18%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell">Umais Shamsi</TableCell>
                                <TableCell className="percentage-cell">86.36%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell">Abdullah Taufeeq</TableCell>
                                <TableCell className="percentage-cell">85.18%</TableCell>
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
                                <TableCell className="student-header" align="center">Student Name</TableCell>
                                <TableCell className="percentage-header" align="center">Percentage</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* Sample data, you can replace it with your data */}
                            <TableRow>
                                <TableCell className="student-cell">Alina Khan</TableCell>
                                <TableCell className="percentage-cell">92.63%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell">Mahad Hasan</TableCell>
                                <TableCell className="percentage-cell">85.59%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell">Ali Shahid</TableCell>
                                <TableCell className="percentage-cell">85%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell">Armeen Arif</TableCell>
                                <TableCell className="percentage-cell">85.09%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="student-cell">Abdullah Khan</TableCell>
                                <TableCell className="percentage-cell">83.36%</TableCell>
                            </TableRow>
                            {/* Add more rows as needed */}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
        </>
    );
}

export default TopAchievers;
