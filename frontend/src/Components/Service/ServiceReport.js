import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Swal from 'sweetalert2';
import autoTable from 'jspdf-autotable';



const ServiceDash = () => {
    const [services, setServices] = useState([]);
    const [allServices, setAllServices] = useState([]);
    const [serQuery, setQuery] = useState("")

    useEffect(() => {
        axios.get('http://localhost:8002/service')
            .then(res => {
                setServices(res.data);
                setAllServices(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);


    function searchfun(e) {

        setQuery(e.target.value)
    }

    

    // // create pdf 
    // const createPdf = (pdfBody) => {

    //     var doc = new jsPDF('portrait', 'px', 'a3');
    //     var totalPagesExp = "{total_pages_count_string}"; //placeholder for total number of pages 
    //     doc.autoTable({
    //         didDrawPage: function (data) {

    //             var today = new Date();
    //             var curr_date = today.getDate();
    //             var curr_month = today.getMonth();
    //             var curr_year = today.getFullYear();

    //             today = [curr_month + 1] + "/ " + curr_date + "/ " + curr_year;
    //             var newdat = today;

    //             // Header
    //             doc.setFontSize(15)
    //             doc.text("Smile", 50, 100);
    //             doc.text(newdat, 500, 100);

    //             // doc.setFontSize(18);
    //             var fileTitle = "Service Providers List";
    //             // var img = '#';
    //             doc.text(fileTitle, 25, 100);

    //             // doc.addImage(img, 'JPEG', 2, 2, 628, 200);

    //             //table
    //             doc.autoTable({
    //                 head: [['No', 'First NAme', 'Email', 'Job Title', 'Position', 'Contact No']],
    //                 body: services.filter(e =>
    //                     e.fName.toLowerCase().includes(serQuery) ||
    //                     e.email.toLowerCase().includes(serQuery) ||
    //                     e.job.toLowerCase().includes(serQuery) ||
    //                     e.position.toLowerCase().includes(serQuery) ||
    //                     e.phone.toLowerCase().includes(serQuery)


    //                 ).map(function (e, index) {
    //                     return (
    //                         [index + 1,
    //                         e.fName,
    //                         e.email,
    //                         e.job,
    //                         e.position,
    //                         e.phone.split('T')[0]
    //                         ]


    //                     );
    //                 })

    //             })

    //             // Footer
    //             var pageSize = doc.internal.pageSize;
    //             //jsPDF 1.4+ uses getHeight, <1.4 uses .height
    //             var pageHeight = pageSize.height ? pageSize.height : pageSize.getHeight();
    //             // jsPDF 1.4+ uses getWidth, <1.4 uses .width
    //             var pageWidth = pageSize.width ? pageSize.width : pageSize.getWidth();

    //             doc.autoTable({
    //                 html: '#my-table',
    //                 startY: pageHeight - 630,
    //                 theme: 'grid'
    //             });

    //             var str = "Page " + doc.internal.getNumberOfPages()
    //             // Total page number plugin only available in jspdf v1.0+
    //             if (typeof doc.putTotalPages === 'function') {
    //                 str = str + " of " + totalPagesExp;
    //             }
    //             doc.setFontSize(10);
    //             doc.text(str, data.settings.margin.left, pageHeight - 10);
    //         },
    //         margin: {
    //             bottom: 60, //this decides how big your footer area will be
    //             top: 40 //this decides how big your header area will be.
    //         }
    //     });
    //     // Total page number plugin only available in jspdf v1.0+
    //     if (typeof doc.putTotalPages === 'function') {
    //         doc.putTotalPages(totalPagesExp);
    //     }

    //     doc.save('Service Report.pdf'); //this downloads a copy of the pdf in your local instance.
    // };

     // create pdf
const createPdf = (pdfBody) => {

    var doc = new jsPDF('portrait', 'px', 'a3');
    var totalPagesExp = "{total_pages_count_string}"; //placeholder for total number of pages 

    // Set styles
    var headerStyle = {
        fontSize: 15,
        bold: true,
        textColor: [0, 0, 0], // Black color
        fontStyle: 'italic',
        font: 'helvetica'
    };

    var titleStyle = {
        fontSize: 18,
        bold: true,
        textColor: [255, 0, 0], // Red color
        fontStyle: 'normal',
        font: 'helvetica'
    };

    var tableStyle = {
        theme: 'grid',
        styles: {
            fontSize: 12,
            font: 'helvetica',
            cellPadding: 5,
            lineColor: [0, 0, 0], // Black color
            lineWidth: 0.1,
            textColor: [0, 0, 0], // Black color
            valign: 'middle',
            halign: 'center'
        },
        headStyles: {
            fillColor: [0, 0, 255], // Blue color
            textColor: [255, 255, 255] // White color
        },
        bodyStyles: {
            fillColor: [255, 255, 255] // White color
        }
    };

    doc.autoTable({
        didDrawPage: function (data) {

            var today = new Date();
            var curr_date = today.getDate();
            var curr_month = today.getMonth();
            var curr_year = today.getFullYear();

            today = [curr_month + 1] + "/ " + curr_date + "/ " + curr_year;
            var newdat = today;

            // Header
            doc.setFont(headerStyle.font, headerStyle.fontStyle);
            doc.setFontSize(headerStyle.fontSize);
            doc.setTextColor(headerStyle.textColor[0], headerStyle.textColor[1], headerStyle.textColor[2]);
            doc.text(newdat, 500, 250);

            // Title
            doc.setFont(titleStyle.font, titleStyle.fontStyle);
            doc.setFontSize(titleStyle.fontSize);
            doc.setTextColor(titleStyle.textColor[0], titleStyle.textColor[1], titleStyle.textColor[2]);
            var fileTitle = "Service Providers Report";
            doc.text(fileTitle, 25, 250);

            // Table
            doc.autoTable({
                head: [['No','Service ID', 'First Name', 'Email', 'Job Title', 'Position', 'Contact No']],
                body: services.filter(e =>
                    e.sID && e.sID.toLowerCase().includes(serQuery) ||
                    e.fName.toLowerCase().includes(serQuery) ||
                    e.email.toLowerCase().includes(serQuery) ||
                    e.job.toLowerCase().includes(serQuery) ||
                    e.position.toLowerCase().includes(serQuery) ||
                    e.phone.toLowerCase().includes(serQuery)
                ).map(function (e, index) {
                    return [
                        index + 1,
                        e.sID,
                        e.fName,
                        e.email,
                        e.job,
                        e.position,
                        e.phone.split('T')[0]
                    ];
                }),
                ...tableStyle
            });

            // Footer
            var pageSize = doc.internal.pageSize;
            var pageHeight = pageSize.height ? pageSize.height : pageSize.getHeight();
            var pageWidth = pageSize.width ? pageSize.width : pageSize.getWidth();

            doc.setFontSize(10);
            doc.text("Page " + doc.internal.getNumberOfPages(), data.settings.margin.left, pageHeight - 10);

            // Total page number plugin only available in jspdf v1.0+
            if (typeof doc.putTotalPages === 'function') {
                doc.putTotalPages(totalPagesExp);
            }
        },
        margin: {
            bottom: 60, //this decides how big your footer area will be
            top: 40 //this decides how big your header area will be.
        }
    });

    // Total page number plugin only available in jspdf v1.0+
    if (typeof doc.putTotalPages === 'function') {
        doc.putTotalPages(totalPagesExp);
    }

    doc.save('Service Report.pdf'); //this downloads a copy of the pdf in your local instance.
};



    return (
        <>

            <div>
                <div style={{ width: '20%', marginLeft: '80%', marginBlockStart: '2%' }}>
                    <form className="d-flex">
                        <input className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search" onChange={searchfun}>
                        </input>
                    </form>
                </div>

                <div>
                    <table className="table table-bordered" style={{ width: '100%', marginBlockStart: '2%' }}>
                        <thead className="table-info">
                            <tr>
                                <th scope="col">#</th>
                                <th scope='col'>Service ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Contact Number</th>
                                <th scope="col">Job Title</th>
                                <th scope="col">Position</th>
                            </tr>
                        </thead>
                        <tbody>
                            {services &&
                                services
                                    .filter((e) => {
                                        const lowerCaseSerQuery = serQuery.toLowerCase();
                                        return (
                                            e.sID && e.sID.toLowerCase().includes(lowerCaseSerQuery) ||
                                            e.fName.toLowerCase().includes(lowerCaseSerQuery) ||
                                            e.email.toLowerCase().includes(lowerCaseSerQuery) ||
                                            e.job.toLowerCase().includes(lowerCaseSerQuery) ||
                                            e.position.toLowerCase().includes(lowerCaseSerQuery) ||
                                            e.phone.toLowerCase().includes(lowerCaseSerQuery)
                                        );
                                    })
                                    .map((service, index) => (
                                        <tr key={index}>
                                            <th className="table-light" scope="row">{index + 1} </th>
                                            <td className="table-light">{service.sID}</td>                                            
                                            <td className="table-light">{service.fName}</td>
                                            <td className="table-light">{service.email}</td>
                                            <td className="table-light">{service.phone}</td>
                                            <td className="table-light">{service.job}</td>
                                            <td className="table-light">{service.position}</td>
                                        </tr>
                                    ))}
                        </tbody>
                    </table>
                </div>

                <div>
                    <a className="btn btn-warning text-dark " style={{ marginLeft: '35%' }} onClick={createPdf} >
                        <i className="fa fa-file-pdf-o"></i>&nbsp;Download PDF
                    </a>

                    &nbsp;
                    <a className="btn btn-warning text-dark " style={{ marginLeft: '1%' }} href="/" >
                        Dash Board
                    </a>
                </div>
            </div>
        </>
    )

}

export default ServiceDash;

