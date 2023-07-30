import React from "react";
import BlocSoc from "../../resources/Bloc.png";
import AshitoshSable from "../../resources/Ashitosh_Sable_21bcs096.png";
import "./teams.css";
const Team = () => {
  return (
    <div>
      <div className="teams_container">
        <img className="teams_container_img" src={BlocSoc} alt="logo" />
        <h1 className="header1">Aim</h1>
        <p className="header2">
          Our club at <span className="color_blue">IIIT Dharwad</span> , is to
          foster a thriving <span className="color_blue">community</span> of
          students passionate about blockchain{" "}
          <span className="color_blue">technology</span>,{" "}
          <span className="color_blue">promoting education</span>,
          <span className="color_blue">research</span>,{" "}
          <span className="color_blue">industry connections</span> and{" "}
          <span className="color_blue">social impact</span>in the field.
        </p>

        <h1 className="header1 ">Vision</h1>
        <p className="header2 ">
          To become a leading hub for{" "}
          <span className="color_blue">blockchain innovation</span>, knowledge
          sharing, and collaboration at IIIT Dharwad,{" "}
          <span className="color_blue">empowering students</span> to drive
          <span className="color_blue">technological advancements</span>,
          explore novel applications, and make a
          <span className="color_blue">positive impact</span> on society through
          blockchain technology.
        </p>
      </div>
      <div className="teams_container">
        <h1 className="header1">Team</h1>
        <div className="teams_profile">
          <div className="individual_profiles">
            <img src={AshitoshSable} alt="profile-pic" />
            <p className="header3">Ashitosh Sable</p>
            <p className="color_blue header2">Content Lead</p>
          </div>
          <div className="individual_profiles">
            <img src={AshitoshSable} alt="profile-pic" />
            <p className="header3">Ashitosh Sable</p>
            <p className="color_blue header2">Content Lead</p>
          </div>
          <div className="individual_profiles">
            <img src={AshitoshSable} alt="profile-pic" />
            <p className="header3">Ashitosh Sable</p>
            <p className="color_blue header2">Content Lead</p>
          </div>
          <div className="individual_profiles">
            <img src={AshitoshSable} alt="profile-pic" />
            <p className="header3">Ashitosh Sable</p>
            <p className="color_blue header2">Content Lead</p>
          </div>
          <div className="individual_profiles">
            <img src={AshitoshSable} alt="profile-pic" />
            <p className="header3">Ashitosh Sable</p>
            <p className="color_blue header2">Content Lead</p>
          </div>
          <div className="individual_profiles">
            <img src={AshitoshSable} alt="profile-pic" />
            <p className="header3">Ashitosh Sable</p>
            <p className="color_blue header2">Content Lead</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
