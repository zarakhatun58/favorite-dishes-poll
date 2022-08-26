import React, { useEffect, useState } from 'react';
import SingleDish from './../SingleDish/index';



const AllDishes = () => {
    const [services, setServices] = useState([]);
    const slice = services.slice(0, 30);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json')
            .then(res => res.json())
            //.then(data => console.log(data,"datatttttt"));
            .then(data => setServices(data));

    }, [])


    return (
        <div>
            <div className="add-Booking py-5 text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title mb-4">
                                <h4 className="text-danger"> All My Favorite Dishes</h4>                              
                            </div>
                        </div>
                    </div>
                    {
                        services.length === 0 ?
                            <div> No data available</div>
                            :
                            <div className="row">
                                {
                                    slice.map(service => <SingleDish
                                         key={service.id}
                                       //key={service.dishName}
                                        service={service}
                                    ></SingleDish>)
                                }
                            </div>
                    }
                </div>
            </div>

        </div>
    );
};

export default AllDishes;