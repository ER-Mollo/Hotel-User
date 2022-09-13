import React from "react";
import Top from "./top";
import '../css/rooms.css'
import SliderProton from "./slideproton";
import image from '../assets/bedroom1.jpg'

function Booking(){
    return(
        <div className="booking">
            <Top/>
            <div className="top">
            <div className="booking">
                    
                    <div className="book">
                            <h1>Make Memories</h1>
                            <p>Discover the place where you have fun & enjoy a lot</p>

                            <div className="content grid">
                                <div className="box">
                                    <span>ARRIVAL DATE </span> <br/>
                                    <input type="date" placeholder="29/20/2021" className="input"/>
                                </div>

                                <div className="box">
                                    <span>DEPARTURE DATE </span> <br/>
                                    <input type="date" placeholder="29/20/2021" className="input"/>
                                </div>

                                <div className="box">
                                    <span>ADULTS</span> <br/>
                                    <input type="number" placeholder="01" className="input"/>
                                </div>

                                <div className="box">
                                    <span>CHILDREN </span> <br/>
                                    <input type="number" placeholder="01" className="input"/>
                                </div>

                                
                    </div>
                    <div className="price-tag">
                        
                            <h2 className="price">Price</h2>
                            <SliderProton/>  
                        
                    </div>
                    
                   
                      

                </div>     
                </div>
            </div>
            <div className="room-block">
                <h2 className="the-rooms">Price Range</h2>
                    <div className="book-rooms">
                        <div className="down">
                            <img src={image} className="the-image"/>
                            <div className="top-part">
                                <h3>price</h3>
                                <h3>type</h3>
                                
                            </div>
                            <p>ex ea commodo consequat. Duis aute irure 
                                dolor in reprehenderit in voluptate velit esse cillum 
                                dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                                cupidatat non proident,</p>
                            <div className="buttons">
                                <button>view</button>
                                <button>Book Now</button>
                            </div>
                            
                        </div>

                        <div className="down">
                            <img src={image} className="the-image"/>
                            <div className="top-part">
                                <h3>price</h3>
                                <h3>type</h3>
                                
                            </div>
                            <p>ex ea commodo consequat. Duis aute irure 
                                dolor in reprehenderit in voluptate velit esse cillum 
                                dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                                cupidatat non proident,</p>
                            <div className="buttons">
                                <button>view</button>
                                <button>Book Now</button>
                            </div>
                            
                        </div>

                        <div className="down">
                            <img src={image} className="the-image"/>
                            <div className="top-part">
                                <h3>price</h3>
                                <h3>type</h3>
                                
                            </div>
                            <p>ex ea commodo consequat. Duis aute irure 
                                dolor in reprehenderit in voluptate velit esse cillum 
                                dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                                cupidatat non proident,</p>
                            <div className="buttons">
                                <button>view</button>
                                <button>Book Now</button>
                            </div>
                            
                        </div>
                    </div>
                        
            </div>
        </div>
    )
}

export default Booking;