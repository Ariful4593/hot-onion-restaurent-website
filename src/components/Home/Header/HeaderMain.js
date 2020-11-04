import React from 'react';
import './HeaderMain.css'
const HeaderMain = () => {
    return (
        <div className="main-header d-flex align-items-center">
            
            <div className="container">
                <h1 className="">Best Food Waiting For Your Belly</h1>
                <form>
                    <div className="row d-flex justify-content-center">
                        <div className="col-6 col-sm-6 col-md-5 col-lg-4 col-xl-3 m-0 p-0">
                            <input type="search" className=" w-100 form-control" style={{ borderRadius: '5px 0px 0px 5px' }} name="" id="" />
                        </div>
                        <div className="col-3 col-sm-2 col-md-2 col-lg-1 col-xl-1 p-0">
                            <input type="submit" value="Search" className="btn btn-primary m-0 w-100" style={{ borderRadius: '0px 5px 5px 0px' }} />
                        </div>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default HeaderMain;