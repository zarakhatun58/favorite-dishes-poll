import React from 'react';
import { Link } from "react-router-dom";
import "./SingleDish.css";



const SingleDish = ({ service }) => {
    const { id, dishName, description, image } = service;
    return (
        <div className="col-lg-4">
            <div className="card text-center mb-3 single-service p-3 shadow p-3 bg-white rounded cardContain"  >
                <img src={image} alt="" className="rounded-circle mx-auto w-50" />
                <div className="text-center" >
                    <h4 className="my-3 text-danger text-center">{dishName}</h4>
                </div>
                <p className="text-justify">{description.slice(0, 100)}</p>
                <div className="text-center">
                    <Link to="/login">
                        <button className="btn btn-primary text-center text-white">Vote</button>
                    </Link>


                </div>
            </div>
        </div>
    );
};

export default SingleDish;