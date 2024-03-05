import React from 'react';
import health from '../../assets/HealthCare_doctor.png';
import listPic from '../../assets/Health_List_pic.png';
import color from '../../assets/img/Rectangle 47.png';

const CustomSoftwear = () => {
    const List = [
        {
            one: 'Advanced search',
            two: 'Pharmacy listing & management',
            three: 'Online ordering system'
        },
        {
            one: 'Review system',
            two: 'Order tracking system',
            three: 'Return management'
        },
        {
            one: 'Review system',
            two: 'QA section & blog',
            three: 'Coupon & discount'
        },
        {
            one: 'Bulk medicine upload',
            two: 'Admin access control',
            three: 'Vendor management'
        }
    ]
    return (
        <div className='custom_s'>
            <div className="upr_part">
                <h2>
                    <img className='color' src={color} alt="" />
                    Creationsoul made custom software, website and and app  for health business
                </h2>
            </div>

            <div className="lwr">
                <div className="lft">
                    {List.map((data, index) => {
                        return (
                            <div key={index} className='box'>
                                <p className='box_p'><img src={listPic} alt='' />{data.one}</p>
                                <p className='box_p'><img src={listPic} alt='' />{data.two}</p>
                                <p className='box_p'><img src={listPic} alt='' />{data.three}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="rht">
                    <img className='doctor' src={health} alt="Doctor" />
                </div>
            </div>
        </div>
    );
};

export default CustomSoftwear;
