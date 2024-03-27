import './Pagination.css';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

function Pagination() {
    return ( 
        <div className="pagination-container">
            <div className='prev-container'>
                <FaArrowLeft />
                <h5 className="prev">Prev</h5>
            </div>
            <div className="numbers-container">
            <h5 className="numbers">1</h5>
            <h5 className="numbers">2</h5>
            <h5 className="numbers">3</h5>
            <h5 className="numbers">...</h5>
            <h5 className="numbers">6</h5>
            </div>
            <div className="next-container">
                <h5 className="next">Next</h5>
                <FaArrowRight />
            </div>
        </div>
    );
}

export default Pagination;