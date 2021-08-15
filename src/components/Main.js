import  '../assets/style/Banner.scss';
import coverlogo from '../assets/img/logo-2x.png';
import { IoIosArrowForward } from 'react-icons/io';
const Main  = () => {

    return (  
        <div>
            <div className="bg-cover">
            <div  className="bg-cover-content-main">
                <div className="bg-cover-content">
                    <div className="bg-cover-logo">
                       <img src={coverlogo} className="cover-logo" alt="logo" />
                    </div>
                <div className="bg-cover-text d-flex flex-column">
                    <div className="bg-cover-text">
                        <h2 className="text-light">Welcome!</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                    </div>
                    <div className="bg-cover-btn">
                        <button className="mybtn primary-btn ">Buy now <IoIosArrowForward /> </button>
                        <button className="mybtn primary-btn">Live chart</button>
                    </div>
                
                    </div>
                </div>

                <div className="d-flex bg-cover-info">
                    <div> <h6>Current Price</h6> <span>000023472</span> </div>
                    <div> <h6>Holders</h6> <span>000023472</span> </div>
                    <div> <h6>Supply</h6> <span>000023472</span> </div>
                    <div> <h6>Market Cap</h6> <span>000023472</span> </div>
                </div>



                </div>
       
            </div>

        </div>

    );
}
 
export default Main;