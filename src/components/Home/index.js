import { Component } from "react";
import Header from "../Header";

import './index.css'

class Home extends Component {
    render(){
        return (
            <>
                <Header />
                <div className="banner-container">
                    <div className="banner-content-container">
                        <h1 className="banner-heading">Book Store</h1>
                        <p className="banner-text">Bookstore was found in 1992 with a simple yet passionate 
                            mission.To positively impact the world through the power of reading and learning.
                            Right from our first store in Mumbai to the 92 store was 32 cities today, we have 
                            continued to serve and nurture to community of readers for over 3 decades.
                        </p>
                        <p className="banner-text">
                            As India's leading bookstore retailer, we champion books and nourish a love for the
                            written word through a rich,handpicked colection convering numerous topics.Our stores 
                            are thoughtfully designed with interiors that inspire and relax, allowing quiet spaces
                            to help you discover great books.
                        </p>
                        <button className="explore-button" type="button">Explore Books</button>
                    </div>
                </div>
                
            </>
        )
    }
}

export default Home