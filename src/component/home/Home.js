import React from 'react'
import Card from '../card/Card'
import dummyData from '../../assets/dummyData.js';
import "./home.css"

const Home = () => {
    return (
     
            <div className='main'>
                <div className='outer'>
                    <div className='headsearch'>
                        <h2>Search properties to rent</h2>
                        <input type="text" placeholder="Search with Search Bar" className='searchbar'></input>
                    </div>
                    <div className='property'>
                        <ul className='prope'>
                            <li>
                                <h4 className='text'>Location</h4>
                                <input type="text" placeholder="New York, USA" className='location pro'></input>
                            </li>
                            <div className='line'></div>
                            <li>
                                <h4 className='text'>When</h4>
                                <select className='drop p1'>
                                    <option className='text'>Select Move-in Date</option>
                                    <option className='text'>hii1</option>
                                    <option className='text'>hii2</option>
                                </select>
                            </li>
                            <div className='line'></div>
                            <li>
                                <h4 className='text'>Price</h4>
                                <select className='drop p1'>
                                    <option className='text'>$500-$2,500</option>
                                    <option className='text'>$2,500-$3,500</option>
                                    <option className='text'>$3,500-$5,000</option>
                                </select>
                            </li>
                            <div className='line'></div>
                            <li>
                                <h4 className='text'>Property Type</h4>
                                <select className='drop p1'>
                                    <option className='text'>Houses</option>
                                    <option className='text'>Banglows</option>
                                    <option className='text'>Flats</option>
                                    <option className='text'>Huts</option>
                                </select>
                            </li>
                            <div className='line'></div>
                            <li>
                                <div id="wrapper">
                                    <div className="btn">Search</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    {
                        dummyData.map((data,index) => (
                            <Card data={data} key={index}/>
                        ))
                    }
                </div>
            </div>
    )
}

export default Home