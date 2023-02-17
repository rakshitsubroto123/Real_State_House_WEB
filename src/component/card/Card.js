import React from 'react'
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import CropLandscapeIcon from '@mui/icons-material/CropLandscape';
import IconButton from '@mui/material/IconButton';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import "./card.css"

const Card = ({data}) => {
    return (
        <div className='out' >
            <div className='fir'>
                <img src={data.imgUrl} className="imag hs-1" alt="img.png"/>
            </div>

            <span className="popular_span">popular</span>
            <div className='sec'>
                <div className='rate'>
                    <span className="rate_span"><strong>${data.price}</strong>/month</span>
                    <span className="rate_heart_icon">
                        <IconButton>
                            <FavoriteBorderIcon className='icon heart'/>
                        </IconButton>
                    </span>
                </div>
                <div className='firhead'>
                    <h2>{data.name}r</h2>
                    <h4>{data.location}</h4>
                </div>
                <div className='line2'></div>
                <div className='accessory'>
                    <IconButton>
                        <BedIcon className='icon'/>
                    </IconButton>
                    <div className='icontext'>{data.noOfBeds}Beds</div>
                    <IconButton>
                        <BathtubIcon className='icon'/>
                    </IconButton>
                    <div className='icontext'>{data.noOfBathroom}Bathrooms</div>
                    <IconButton>
                        <CropLandscapeIcon className='icon'/>
                    </IconButton>
                    <div className='icontext'>{data.area.length}x{data.area.breadth}m<sup>2</sup></div>
                </div>
            </div>
        </div>
    )
}

export default Card