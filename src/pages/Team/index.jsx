import React from "react";
import BlocSoc from "../../resources/Bloc.png";
import AshitoshSable from "../../resources/Ashitosh_Sable_21bcs096.png";
import Ajay from "../../resources/Ajay.jpg";
import Priyesh from "../../resources/Priyesh.jpg";
import Shreyansh from "../../resources/Shreyansh.jpg";
import Krishna from "../../resources/Krishna.jpg"

import "./teams.css";
const Team = () => {
  const profiles = [{
    name: 'Ajay Bhakar',
    img: Ajay,
    post: "President",
    key: 1,
  }, {
    name: 'Ashitosh Sable',
    img: AshitoshSable,
    post: "Content Lead",
    key: 2,
  },{
    name: 'Priyesh Gupta',
    img: Priyesh,
    post: "Frontend Lead",
    key: 3,
  },{
    name: 'Shreyansh Tiwari',
    img: Shreyansh,
    post: "Backend Lead",
    key: 4,
  },{
    name: 'Nupur Sangwai',
    img: Priyesh,
    post: "Research Lead",
    key: 5,
  },{
    name: 'Krishna Jaiswal',
    img: Krishna,
    post: "Frontend Member",
    key: 6,
  },{
    name: 'Krishna Jaiswal',
    img: Krishna,
    post: "Frontend Member",
    key: 6,
  },{
    name: 'Krishna Jaiswal',
    img: Krishna,
    post: "Frontend Member",
    key: 6,
  },{
    name: 'Krishna Jaiswal',
    img: Krishna,
    post: "Frontend Member",
    key: 6,
  }]
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
          {profiles.map((profile) => {
            return (
              <div className="individual_profiles">
                <img src={profile.img} alt="profile-pic" className="profile_images" />
                <p className="header3">{profile.name} </p>
                <p className="color_blue header4">{profile.post}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Team;
