import React from 'react'
import FbNavbar from '../../components/fbnavbar/FbNavbar'
import { FaHandHoldingHeart ,FaHandHoldingUsd,FaSearch} from 'react-icons/fa';
import Chart from '../../components/chart/Chart';

const Admin = () => {
  return (
    <>
     
     
     <FbNavbar type="admin"/>
     <div id="features" className="text-center mt-5">
      <div className="container">
        <br/>
        
       {/* <div className=" ps-5 ] pe-0 text-center align-content-end col-md-10 col-md-offset-1 section-title pt-5 ">
          <h2 className=" fa-shake">Admin panel</h2>
        </div>  */}
        <h2 className="text-black-50">Admin panel</h2>
        <br/>
        <Chart/>
        <br/>
        <div className=" row justify-content-center text-black justify-content-between pt-2">
              
                <div  className=" shadow col-xs-6 col-md-3 bg-white rounded-3 p-4 text-black z-index-1">
                  {" "}
                  <i className="w-10"><FaHandHoldingHeart/></i>
                  <h3>Add org</h3>
                  <p>help organisation by providing support</p>
                </div>
                <div  className=" shadow col-xs-6 col-md-3 bg-white rounded-3 p-4 z-index-2">
                  {" "}
                  <i className="w-10"><FaSearch/></i>
                  <h3>add sponsor</h3>
                  <p>help to find missing child</p>
                </div>
                <div  className="shadow col-xs-6 col-md-3 bg-white rounded-3 p-4 z-index-1">
                  {" "}
                  <i className="w-10"><FaHandHoldingUsd/></i>
                  <h3>case status</h3>
                  <p>help organisation by providing financial support</p>
                </div>
        </div>
        <br/>
        <div className=" row justify-content-center text-black justify-content-between pt-2">
          
                <div  className=" shadow col-xs-6 col-md-3 bg-white rounded-3 p-4 text-black z-index-1">
                  {" "}
                  <i className="w-10"><FaHandHoldingHeart/></i>
                  <h3>donation details</h3>
                  <p>help organisation by providing support</p>
                </div>
                <div  className=" shadow col-xs-6 col-md-3 bg-white rounded-3 p-4 z-index-2">
                  {" "}
                  <i className="w-10"><FaSearch/></i>
                  <h3>Missing child details</h3>
                  <p>help to find missing child</p>
                </div>
                <div  className="shadow col-xs-6 col-md-3 bg-white rounded-3 p-4 z-index-1">
                  {" "}
                  <i className="w-10"><FaHandHoldingUsd/></i>
                  <h3>Support org</h3>
                  <p>help organisation by providing financial support</p>
                </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default Admin