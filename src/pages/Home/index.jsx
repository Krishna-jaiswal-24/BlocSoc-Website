import BlocSoc from "../../resources/BlocSoc-Transparent.png";
import "./home.css";
import BlocSocLogo from '../../resources/Bloc.png'
import Card1 from "../../components/Cards/Card1";
const Home = () => {
  return (
    <div>
      <div className="hero_section">
        <div className="container">
          <h1 className="header1">
            Your Step to the <span className="color_blue">Future</span>.
          </h1>
          <p>
            Unlocking the powers of{" "}
            <span className="color_blue">Blockchain</span>. Blockchain club of{" "}
            <span className="color_blue"> IIIT Dharwad</span>
          </p>
          <p>Create your Decentralised app today!</p>
          <div className="hero_cta">
            <button className="button_1">Upcoming Events</button>
            <button className="button_2">Explore BlocSoc</button>
          </div>
        </div>
        <div>
          <img className="hero_section_logo" src={BlocSoc} alt="logo" />
        </div>
      </div>
      <div>
          <div className="blog_header">
            <h1 className="header1 color_blue">
              <img className="blog_logo" src={BlocSocLogo} alt="logo" /> Blogs
            </h1>
          </div>
          <div className="blogs_container_row">
            <Card1 className="blogs" />
            <Card1 className="blogs" />
            <Card1 className="blogs" />
            <Card1 className="blogs" />
            <Card1 className="blogs" />
            <Card1 className="blogs" />
          </div>
        </div>
    </div>
  );
};

export default Home;
