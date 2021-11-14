/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import products from './databaseModel';
const Body = () => {
    return (
        <div>
            <div className="tags">
            <ul id="tag-names">
                <li id="tags-title">Searches</li>
                <li><a href="">Fashion</a></li>
                <li><a href="">Appliances</a></li>
                <li><a href="">Home</a></li>
                <li><a href="">Electronics</a></li>
                <li><a href="">Gaming</a></li>
                <li><a href="">Whatever</a></li>

            </ul>
            </div>
           <h2>Deals</h2>
            <Slides />
            <h2>Speakers</h2>
            <BrowseDeals />
            <h2>TV's and Monitors</h2>
            <BrowseRandom />
            <div className="browsing-buttons">
             <button>Back</button>
            <button>Browse More</button>   
            </div>
            
            <h2>News</h2>
            <ProductNews />
        </div>
    );
}

const Slides = () => {
    return(
        <>
          <div className="main-carousel"  data-flickity='{ "wrapAround": false , "cellAlign": "left", "contain": true, "pageDots":false, "prevNextButtons": false, "autoPlay": false}'>
              {products.deals.map(deal => {
                  return (
                        <div className="slides">
                     <img src={deal.picture} alt="deal" />
                 <button id="button">{deal.name}</button>
            </div>
                  )
              })}
          
    
          </div>

        </>
    )
}

const BrowseDeals = (props) => {
    return(
        <div>
        <div className="main-carousel"  data-flickity='{ "wrapAround": false , "cellAlign": "left", "contain": true, "pageDots":false}'>
            {
                products.mainProducts.map(prods => {
                    return(
                        <div className="card">
                        <div id="card-link">
                        <img src={prods.image } alt="None"/>
                        </div>
                        <p id="product-name">{prods.name}</p>
                        <div className="details">
                        <p id="price"><span>R</span> {prods.price}</p>
                        <p id="info-btn"><i class="fas fa-info-circle"></i></p>  
                        </div>
                        <p id="ratings">Ratings <span id="stars"><i class="fas fa-star"></i> </span> <span>{prods.rate}</span> ({prods.ratings})</p>
                        </div>
                    )
                })
            }
          
           
        </div>
        </div>
    )
}
const BrowseRandom = (props) => {
    return(
        <div>
            <div className="main-carousel"  data-flickity='{ "wrapAround": false , "cellAlign": "left", "contain": true, "pageDots":false}'>
            {
                products.mainProducts2.map(prods => {
                    return(
                        <div className="card">
                        <div id="card-link">
                        <img src={prods.image } alt="None"/>
                        </div>
                        <p id="product-name">{prods.name}</p>
                        <div className="details">
                        <p id="price"><span>R</span> {prods.price}</p>
                        <p id="info-btn"><i class="fas fa-info-circle"></i></p>  
                        </div>
                        <p id="ratings">Ratings <span id="stars"><i class="fas fa-star"></i></span> <span>{prods.rate}</span> ({prods.ratings})</p>
                        </div>
                    )
                })
            }
        </div>
        </div>
    )
}

const ProductNews = () => {
    return(
        <>
           <div className="product-news"  data-flickity='{ "wrapAround": false , "cellAlign": "left", "contain": true, "pageDots":false, "prevNextButtons": false, "autoPlay": false}'>
        {products.productNews.map(item => {
            return(
                <div className="news-slides carousel-cell">
            <img src={item.image} alt="deal" />
            <div className="news">
                <h3 id="news-title">{item.name}</h3>
                <p>{item.news}</p>
                <button id="news-btn">Learn More</button>
            </div>
            </div>
            )
        })}
            </div>
        </>
    )
}

export default Body;
