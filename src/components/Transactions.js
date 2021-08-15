import "../assets/style/Transactions.scss";
import { IoMdArrowDropright} from "react-icons/io";
const Transactions = () => {
    return (  
        <div className="transactions-sec">
             <div className="container-fluid"> 
             <h4>Marketing Transactions</h4>
             <div className="transactions">
             <div className="viewBscscan">
                 <span>Add logo to TokenPocket</span>
                 <span>0.36 BNB sent to 0x78..E3d8</span>
                 <a>view in bscscan<IoMdArrowDropright /></a>
             </div>
             </div>
             <div className="transactions">
             <div className="viewBscscan">
                 <span>Add logo to TokenPocket</span>
                 <span>0.36 BNB sent to 0x78..E3d8</span>
                 <a>view in bscscan<IoMdArrowDropright /></a>
             </div>
             </div>
             <div className="transactions">
             <div className="viewBscscan">
                 <span>Add logo to TokenPocket</span>
                 <span>0.36 BNB sent to 0x78..E3d8</span>
                 <a>view in bscscan<IoMdArrowDropright /></a>
             </div>
             </div>

            </div>
        </div>
    );
}
 
export default Transactions;