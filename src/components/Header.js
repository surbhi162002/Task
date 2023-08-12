import "./Header.css";
import Button from '@mui/material/Button';

const Header = () => {
  return (
    <div className="nav-bar">
      <div className="container">
        <div className="left-content">
          <div className="logo">
            <div className="edyoda">EDYODA</div>
          </div>
          <div className="courses">
            <div className="text3">Courses</div>
            <img
              className="icon-chevron-down"
              alt=""
              src="/icon-chevron-down.svg"
            />
          </div>
          <div className="courses">
            <div className="text3">Programs</div>
            <img
              className="icon-chevron-down"
              alt=""
              src="/icon-chevron-down.svg"
            />
          </div>
        </div>
        <div className="left-content">
          <img className="icon-chevron-down" alt="" src="/search-icon.svg" />
          <div className="log-in">
          <Button className="text" variant="text color:white">Log in</Button>
          </div>
          <div className="primary-button1">
          <Button  className="text3" variant="text color:white">Join Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
