import "../assets/style/MainFooter.scss";
import bscscan from "../assets/img/bscscanWhite.png";
const MainFooter = () => {
  return (
    <div className="main_footer">
      <div className="container-fluid">
        <div className="supports">
          <div className="company">
            <img src={bscscan} alt="bscscan" />
            <span>BscScan</span>
          </div>
          <div className="company">
            <img src={bscscan} alt="bscscan" />
            <span>BscScan</span>
          </div>
          <div className="company">
            <img src={bscscan} alt="bscscan" />
            <span>BscScan</span>
          </div>
          <div className="company">
            <img src={bscscan} alt="bscscan" />
            <span>BscScan</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
