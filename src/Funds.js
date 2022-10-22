import React from "react";
import { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import { ref, set } from "firebase/database";
import { firebaseDB } from "./firebase";
import {
    getStorage,
    ref as firebaseStorageRef,
    uploadBytes,
    getDownloadURL,
} from "firebase/storage";
import "./form.scss";
import Header from './components/header';
import Navbar from './components/navbar';
import Footer  from "./components/footer";

function Funds() {
    const [formDetails, setFormDetails] = useState({
        email: "",
        name: "",
        PhoneNumber: "",
        LinkedIn_Profile: "",
        company_name: "",
        batch_year: "",
        fow: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [file, setFile] = useState(null);

    const handleSubmit = (e) => {
        setIsSubmitting(true);
        e.preventDefault();
        if ((formDetails.pdf_file = "")) {
            alert("Please Upload Your Abstract");
            return;
        }
        console.log(formDetails);

        const db = firebaseDB;
        set(
            ref(
                db,
                `funds/${formDetails.name}_${formDetails.company_name}`
            ),
            {
                email: formDetails.email,
                name: formDetails.name,
                PhoneNumber: formDetails.PhoneNumber,
                LinkedIn_Profile: formDetails.LinkedIn_Profile,
                company_name: formDetails.company_name,
                batch_year: formDetails.batch_year,
                fow: formDetails.fow,
            }
        )
            .then(() => {
                setIsSubmitting(false);
                setFormDetails({
                    email: "",
                    name: "",
                    PhoneNumber: "",
                    LinkedIn_Profile: "",
                    company_name: "",
                });
                alert("Form Submitted Successfully");
            })
            .catch((e) => {
                setIsSubmitting(false);
                //console.log(e);
                alert(e.message);
            });
    };

    return (
        <>
            <Navbar />
            <Header />
            <form
                id="raise_funding"
                className="cf teamExpansion-form"
                style={{ width: "95%", maxWidth: "800px" }}
                onSubmit={handleSubmit}
                autoComplete="on"
            >
                <h2 className="formHeading"> ALUMNUS FUND </h2>
                <Row className="form-item">
                    <label>
                        <h5>
                            Email <span style={{ color: "red" }}>*</span>
                        </h5>
                    </label>
                    <input
                        type="email"
                        style={{ borderBottom: "2px solid grey" }}
                        required
                        value={formDetails.email}
                        placeholder="abc@company.com"
                        onChange={(e) => {
                            setFormDetails({ ...formDetails, email: e.target.value });
                        }}
                    />
                </Row>
                <Row className="form-item">
                    <label>
                        <h5>
                            Name <span style={{ color: "red" }}>*</span>
                        </h5>
                    </label>
                    <input
                        type="text"
                        style={{ borderBottom: "2px solid grey" }}
                        required
                        value={formDetails.name}
                        placeholder="Ethan Hunt"
                        onChange={(e) => {
                            setFormDetails({ ...formDetails, name: e.target.value });
                        }}
                    />
                </Row>
                <Row className="form-item">
                    <label htmlFor="linkedIn">
                        <h5>
                            Batch <span style={{ color: "red" }}>*</span>
                        </h5>
                    </label>
                    <input
                        type="text"
                        style={{ borderBottom: "2px solid grey" }}
                        required
                        value={formDetails.batch_year}
                        placeholder="eg: 2000"
                        onChange={(e) => {
                            setFormDetails({ ...formDetails, batch_year: e.target.value });
                        }}
                    />
                </Row>
                <Row className="form-item">
                    <label htmlFor="linkedIn">
                        <h5>
                            LinkedIn Profile <span style={{ color: "red" }}>*</span>
                        </h5>
                    </label>
                    <input
                        type="url"
                        style={{ borderBottom: "2px solid grey" }}
                        required
                        value={formDetails.LinkedIn_Profile}
                        placeholder="https://linkedin.com/in/accountname"
                        onChange={(e) => {
                            setFormDetails({
                                ...formDetails,
                                LinkedIn_Profile: e.target.value,
                            });
                        }}
                    />
                </Row>
                <Row className="form-item">
                    <label htmlFor="linkedIn">
                        <h5>
                            Contact Number <span style={{ color: "red" }}>*</span>
                        </h5>
                    </label>
                    <input
                        type="text"
                        style={{ borderBottom: "2px solid grey" }}
                        required
                        value={formDetails.PhoneNumber}
                        placeholder="8765741289"
                        onChange={(e) => {
                            setFormDetails({ ...formDetails, PhoneNumber: e.target.value });
                        }}
                    />
                </Row>
                {/* <Row className="form-item">
                    <label htmlFor="linkedIn">
                        <h5>
                            No. of Co-founders <span style={{ color: "red" }}>*</span>
                        </h5>
                    </label>
                    <input
                        type="number"
                        style={{ borderBottom: "2px solid grey" }}
                        required
                        value={formDetails.No_of_Cofounder}
                        placeholder="No. of Co-founders"
                        onChange={(e) => {
                            setFormDetails({
                                ...formDetails,
                                No_of_Cofounder: e.target.value,
                            });
                        }}
                    />
                </Row> */}
                {/* <Row
                    className="form-item"
                    value={formDetails.part_or_full_time}
                    onChange={(e) => {
                        setFormDetails({
                            ...formDetails,
                            part_or_full_time: e.target.value,
                        });
                    }}
                >
                    <label>
                        <h5>
                            Working on Startup Full/Part Time{" "}
                            <span style={{ color: "red" }}>*</span>
                        </h5>
                    </label>
                    <Row className="checkbox-option">
                        <input type="radio" value="Part Time" name="Part/Full" />
                        <span>Part Time</span>
                    </Row>
                    <Row className="checkbox-option">
                        <input type="radio" value="Full Time" name="Part/Full" />
                        <span> Full Time</span>
                    </Row>
                </Row> */}
                <Row className="form-item">
                    <label htmlFor="linkedIn">
                        <h5>
                            Field of Work <span style={{ color: "red" }}>*</span>
                        </h5>
                    </label>
                    <input
                        type="text"
                        style={{ borderBottom: "2px solid grey" }}
                        required
                        value={formDetails.fow}
                        placeholder="eg: accounting"
                        onChange={(e) => {
                            setFormDetails({ ...formDetails, fow: e.target.value });
                        }}
                    />
                </Row>
                <Row className="form-item">
                    <label htmlFor="linkedIn">
                        <h5>
                            Current Company <span style={{ color: "red" }}>*</span>
                        </h5>
                    </label>
                    <input
                        type="text"
                        style={{ borderBottom: "2px solid grey" }}
                        required
                        value={formDetails.company_name}
                        placeholder="eg: Apple Inc."
                        onChange={(e) => {
                            setFormDetails({ ...formDetails, company_name: e.target.value });
                        }}
                    />
                </Row>
                <Row className="form-item">
                    <label htmlFor="linkedIn">
                        <h5>
                            Account Details <span style={{ color: "red" }}>*</span>
                        </h5>
                    </label>
                    
                    <br /><br /> UPI Id: 9026663689@paytm
                </Row>

                {/* <Row className="form-item">
                    <label htmlFor="linkedIn">
                        <h5>
                            Startup Name <span style={{ color: "red" }}>*</span>
                        </h5>
                    </label>
                    <input
                        type="text"
                        style={{ borderBottom: "2px solid grey" }}
                        required
                        placeholder="Your StartUp Name"
                        value={formDetails.startUp_name}
                        onChange={(e) => {
                            setFormDetails({ ...formDetails, startUp_name: e.target.value });
                        }}
                    />
                </Row>
                <Row className="form-item">
                    <label htmlFor="linkedIn">
                        <h5>
                            Company Website/LinkedIn Profile{" "}
                            <span style={{ color: "red" }}>*</span>
                        </h5>
                    </label>
                    <input
                        type="url"
                        style={{ borderBottom: "2px solid grey" }}
                        required
                        value={formDetails.company_name}
                        placeholder="https://linkedin.com/company/name"
                        onChange={(e) => {
                            setFormDetails({
                                ...formDetails,
                                company_name: e.target.value,
                            });
                        }}
                    />
                </Row>
                <Row className="form-item">
                    <label htmlFor="linkedIn">
                        <h5>
                            Sector of Startup <span style={{ color: "red" }}>*</span>
                        </h5>
                    </label>
                    <input
                        type="text"
                        style={{ borderBottom: "2px solid grey" }}
                        required
                        placeholder="Edtech/ Fintech/ Agritech/ etc.."
                        value={formDetails.sector}
                        onChange={(e) => {
                            setFormDetails({ ...formDetails, sector: e.target.value });
                        }}
                    />
                </Row>
                <Row className="form-item">
                    <label htmlFor="linkedIn">
                        <h5>
                            Stage of Startup <span style={{ color: "red" }}>*</span>
                        </h5>
                    </label>
                    <input
                        type="text"
                        style={{ borderBottom: "2px solid grey" }}
                        required
                        placeholder="Pre-Seed/ Seed/ SeriesA/ etc.."
                        value={formDetails.stage_of_startup}
                        onChange={(e) => {
                            setFormDetails({
                                ...formDetails,
                                stage_of_startup: e.target.value,
                            });
                        }}
                    />
                </Row>
                <Row className="form-item">
                    <label htmlFor="linkedIn">
                        <h5>
                            Idea Description <span style={{ color: "red" }}>*</span>
                        </h5>
                    </label>
                    <input
                        type="text"
                        style={{ borderBottom: "2px solid grey" }}
                        required
                        value={formDetails.ides_description}
                        placeholder="What problem you are solving and How are you solving it?"
                        onChange={(e) => {
                            setFormDetails({
                                ...formDetails,
                                ides_description: e.target.value,
                            });
                        }}
                    />
                </Row>
                <Row className="form-item">
                    <label htmlFor="linkedIn">
                        <h5>
                            Have you raised any amount so far ?{" "}
                            <span style={{ color: "red" }}>*</span>
                        </h5>
                    </label>
                    <input
                        type="text"
                        style={{ borderBottom: "2px solid grey" }}
                        required
                        value={formDetails.Previous_funding}
                        placeholder="INR 30 Lacs "
                        onChange={(e) => {
                            setFormDetails({
                                ...formDetails,
                                Previous_funding: e.target.value,
                            });
                        }}
                    />
                </Row>
                <Row className="form-item">
                    <label htmlFor="linkedIn">
                        <h5>
                            How much amount are you looking to raise? (in INR){" "}
                            <span style={{ color: "red" }}>*</span>
                        </h5>
                    </label>
                    <input
                        type="text"
                        style={{ borderBottom: "2px solid grey" }}
                        required
                        placeholder="INR 30 Lacs"
                        value={formDetails.Funding_to_raise}
                        onChange={(e) => {
                            setFormDetails({
                                ...formDetails,
                                Funding_to_raise: e.target.value,
                            });
                        }}
                    />
                </Row>
                <Row className="form-item file">
                    <label>
                        <h5>
                            Upload Your Pitch-deck <span style={{ color: "red" }}>*</span>
                        </h5>
                    </label>
                    <input
                        type="file"
                        accept="application/pdf"
                        required
                        onChange={(e) => {
                            setFile(e.target.files[0]);
                        }}
                    />
                    <button
                        id="upload"
                        onClick={upload}
                        disabled={uploading ? true : false}
                        style={uploading ? { background: "grey" } : {}}
                    >
                        Upload{" "}
                    </button>
                </Row>
                <Row className="form-item">
                    <label>
                        <h5>Any Suggestion</h5>
                    </label>
                    <textarea
                        name="fck"
                        id="ff"
                        cols="30"
                        rows="10"
                        style={{ border: "2px solid grey" }}
                        value={formDetails.suggestion}
                        placeholder="Any suggestion you want to give us"
                        onChange={(e) => {
                            setFormDetails({ ...formDetails, suggestion: e.target.value });
                        }}
                    ></textarea>
                </Row> */}
                <span>
                    Please fill out all the fields before submiting that are marked with{" "}
                    <span style={{ color: "red" }}>*</span>{" "}
                </span>
                <input
                    type={isSubmitting ? "button" : "submit"}
                    value={isSubmitting ? "Submitting..." : "Submit"}
                    style={isSubmitting ? { background: "grey" } : {}}
                    id="input-submit"
                />
            </form>
            <Footer />
        </>
    );
}

export default Funds;