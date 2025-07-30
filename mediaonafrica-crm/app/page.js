import Image from "next/image";
import styles from "./page.module.css";
import TopHeader from "./components/TopHeader";
import '@tailwindcss/postcss';
import './globals.css';

export default function Home() {
  return (
    <div className="app">
        <TopHeader />
        <nav className="navbar navbar-expand-xl" id="navbar">
            <div className="container-fluid">
                <a className="navbar-brand" href="index.html">
                    <img src="assets/images/logo.png" alt="logo"/>
                </a>
                <form className="search-form">
                    <input type="text" className="search-field" placeholder="Search property"/>
                    <button type="submit">
                        <i className="ri-search-line"></i>
                    </button>
                </form>
                <button className="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvas">
                    <span className="burger-menu">
                        <span className="top-bar"></span>
                        <span className="middle-bar"></span>
                        <span className="bottom-bar"></span>
                    </span>
                </button>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a href="javascript:void(0)" className="nav-link active">
                                Home
                               
                            </a>
                          
                        </li>
                        <li className="nav-item">
                            <a href="javascript:void(0)" className="nav-link">
                                Pages
                               
                            </a>
                           
                        </li>
                        <li className="nav-item">
                            <a href="javascript:void(0)" className="nav-link">
                                Property
                                
                            </a>
                            
                        </li>
                        <li className="nav-item">
                            <a href="javascript:void(0)" className="nav-link">
                                Blog
                                
                            </a>
                           
                        </li>
                        <li className="nav-item">
                            <a href="javascript:void(0)" className="nav-link">Contact Us</a>
                        </li>
                    </ul>
                    <div className="others-option d-flex align-items-center">
                        <div className="option-item">
                            <div className="user-info">
                                <a href="javascript:void(0)">Log In / Register</a>
                            </div>
                        </div>
                        <div className="option-item">
                            <a href="javascript:void(0)" className="default-btn">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <div className="main-banner-area">
            <div className="container-fluid">
                <div className="row justify-content-center align-items-center">
                    <div className="col-xl-6 col-md-12">
                        <div className="main-banner-content">
                            <span className="sub">Your Pathway to Home Sweet Home.</span>
                            <h1>More than Property, We Offer Possibilities</h1>
                            <div className="search-info-tabs">
                                <ul className="nav nav-tabs" id="search_tab" role="tablist">
                                    <li className="nav-item"><a className="nav-link active" id="sell-tab" data-bs-toggle="tab" href="#sell" role="tab" aria-controls="sell">Sell</a></li>
                                    <li className="nav-item"><a className="nav-link" id="rent-tab" data-bs-toggle="tab" href="#rent" role="tab" aria-controls="rent">Rent</a></li>
                                    <li className="nav-item"><a className="nav-link" id="invest-tab" data-bs-toggle="tab" href="#invest" role="tab" aria-controls="invest">Invest</a></li>
                                </ul>
                                <div className="tab-content" id="search_tab_content">
                                    <div className="tab-pane fade show active" id="sell" role="tabpanel">
                                        <form className="search-form">
                                            <div className="row justify-content-center align-items-end">
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="form-group">
                                                        <label>Looking For</label>
                                                        <select className="form-select form-control">
                                                            <option value="">Property type</option>
                                                            <option value="">Multifamily</option>
                                                            <option value="2">Detached house</option>
                                                            <option value="3">Industrial</option>
                                                            <option value="4">Townhouse</option>
                                                            <option value="5">Apartment</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="form-group">
                                                        <label>Location</label>
                                                        <select className="form-select form-control">
                                                            <option value="">All cities</option>
                                                            <option value="">Liverpool</option>
                                                            <option value="2">Bristol</option>
                                                            <option value="3">Nottingham</option>
                                                            <option value="4">Leicester</option>
                                                            <option value="5">Coventry</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="form-group">
                                                        <label>Your Price</label>
                                                        <input type="text" className="form-control"  placeholder="Max price"/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="form-group">
                                                        <label>Min Lot size</label>
                                                        <input type="text" className="form-control"  placeholder="Property lot size"/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="form-group">
                                                        <label>Status</label>
                                                        <select className="form-select form-control">
                                                            <option value="">Property status</option>
                                                            <option value="">Active (55)</option>
                                                            <option value="2">Open House (65)</option>
                                                            <option value="3">Hot Offer (45)</option>
                                                            <option value="4">Sold (78)</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="form-group">
                                                        <button type="submit" className="default-btn">
                                                            <i className="ri-search-2-line"></i>
                                                            Search Property
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="tab-pane fade" id="rent" role="tabpanel">
                                        <form className="search-form">
                                            <div className="row justify-content-center align-items-end">
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="form-group">
                                                        <label>Looking For</label>
                                                        <select className="form-select form-control">
                                                            <option value="">Property type</option>
                                                            <option value="">Multifamily</option>
                                                            <option value="2">Detached house</option>
                                                            <option value="3">Industrial</option>
                                                            <option value="4">Townhouse</option>
                                                            <option value="5">Apartment</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="form-group">
                                                        <label>Location</label>
                                                        <select className="form-select form-control">
                                                            <option value="">All cities</option>
                                                            <option value="">Liverpool</option>
                                                            <option value="2">Bristol</option>
                                                            <option value="3">Nottingham</option>
                                                            <option value="4">Leicester</option>
                                                            <option value="5">Coventry</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="form-group">
                                                        <label>Your Price</label>
                                                        <input type="text" className="form-control"  placeholder="Max price"/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="form-group">
                                                        <label>Min Lot size</label>
                                                        <input type="text" className="form-control"  placeholder="Property lot size"/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="form-group">
                                                        <label>Status</label>
                                                        <select className="form-select form-control">
                                                            <option value="">Property status</option>
                                                            <option value="">Active (55)</option>
                                                            <option value="2">Open House (65)</option>
                                                            <option value="3">Hot Offer (45)</option>
                                                            <option value="4">Sold (78)</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="form-group">
                                                        <button type="submit" className="default-btn">
                                                            <i className="ri-search-2-line"></i>
                                                            Search Property
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="tab-pane fade" id="invest" role="tabpanel">
                                        <form className="search-form">
                                            <div className="row justify-content-center align-items-end">
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="form-group">
                                                        <label>Looking For</label>
                                                        <select className="form-select form-control">
                                                            <option value="">Property type</option>
                                                            <option value="">Multifamily</option>
                                                            <option value="2">Detached house</option>
                                                            <option value="3">Industrial</option>
                                                            <option value="4">Townhouse</option>
                                                            <option value="5">Apartment</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="form-group">
                                                        <label>Location</label>
                                                        <select className="form-select form-control">
                                                            <option value="">All cities</option>
                                                            <option value="">Liverpool</option>
                                                            <option value="2">Bristol</option>
                                                            <option value="3">Nottingham</option>
                                                            <option value="4">Leicester</option>
                                                            <option value="5">Coventry</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="form-group">
                                                        <label>Your Price</label>
                                                        <input type="text" className="form-control"  placeholder="Max price"/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="form-group">
                                                        <label>Min Lot size</label>
                                                        <input type="text" className="form-control"  placeholder="Property lot size"/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="form-group">
                                                        <label>Status</label>
                                                        <select className="form-select form-control">
                                                            <option value="">Property status</option>
                                                            <option value="">Active (55)</option>
                                                            <option value="2">Open House (65)</option>
                                                            <option value="3">Hot Offer (45)</option>
                                                            <option value="4">Sold (78)</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="form-group">
                                                        <button type="submit" className="default-btn">
                                                            <i className="ri-search-2-line"></i>
                                                            Search Property
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-12">
                        <div className="swiper main-banner-image-slider">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="main-banner-image">
                                        <img src="assets/images/main-banner/banner1.jpg" alt="image"/>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="main-banner-image">
                                        <img src="assets/images/main-banner/banner2.jpg" alt="image"/>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="main-banner-image">
                                        <img src="assets/images/main-banner/banner3.jpg" alt="image"/>
                                    </div>
                                </div>
                            </div>
                            <div className="main-banner-image-pagination"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         <div className="category-area pt-120 pb-95">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-3 col-sm-6">
                        <div className="category-card">
                            <div className="image">
                                <img src="assets/images/category/category1.png" alt="image"/>
                            </div>
                            <div className="content">
                                <h3>
                                    <a href="#">Residential</a>
                                </h3>
                                <span>(26 Properties)</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="category-card">
                            <div className="image">
                                <img src="assets/images/category/category2.png" alt="image"/>
                            </div>
                            <div className="content">
                                <h3>
                                    <a href="#">Commercial</a>
                                </h3>
                                <span>(33 Properties)</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="category-card">
                            <div className="image">
                                <img src="assets/images/category/category3.png" alt="image"/>
                            </div>
                            <div className="content">
                                <h3>
                                    <a href="#">Vacation & Resort</a>
                                </h3>
                                <span>(37 Properties)</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="category-card">
                            <div className="image">
                                <img src="assets/images/category/category4.png" alt="image"/>
                            </div>
                            <div className="content">
                                <h3>
                                    <a href="#">The Land</a>
                                </h3>
                                <span>(54 Properties)</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="category-card">
                            <div className="image">
                                <img src="assets/images/category/category5.png" alt="image"/>
                            </div>
                            <div className="content">
                                <h3>
                                    <a href="#">New Construction</a>
                                </h3>
                                <span>(123 Properties)</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="category-card">
                            <div className="image">
                                <img src="assets/images/category/category6.png" alt="image"/>
                            </div>
                            <div className="content">
                                <h3>
                                    <a href="#">Luxury Estate</a>
                                </h3>
                                <span>(355 Properties)</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="category-card">
                            <div className="image">
                                <img src="assets/images/category/category7.png" alt="image"/>
                            </div>
                            <div className="content">
                                <h3>
                                    <a href="#">Eco-Friendly</a>
                                </h3>
                                <span>(89 Properties)</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="category-card">
                            <div className="image">
                                <img src="assets/images/category/category8.png" alt="image"/>
                            </div>
                            <div className="content">
                                <h3>
                                    <a href="#">Historic Properties</a>
                                </h3>
                                <span>(17 Properties)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         <div className="properties-area pt-120 pb-95">
            <div className="container">
                <div className="section-title text-center">
                    <h2>Properties For Sale</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et mauris eget ornare venenatis, in. Pharetra iaculis consectetur.</p>
                </div>
                <div className="row justify-content-center" >
                    <div className="col-xl-4 col-md-6">
                        <div className="properties-item">
                            <div className="properties-image">
                                <a href="property-details.html">
                                    <img src="assets/images/properties/properties7.jpg" alt="image"/>
                                </a>
                                <ul className="action">
                                    <li>
                                        <a href="#" className="featured-btn">Featured</a>
                                    </li>
                                    <li>
                                        <div className="media">
                                            <span><i className="ri-vidicon-fill"></i></span>
                                            <span><i className="ri-image-line"></i>5</span>
                                        </div>
                                    </li>
                                </ul>
                                <ul className="link-list">
                                    <li>
                                        <a href="#" className="link-btn">Apartment</a>
                                    </li>
                                    <li>
                                        <a href="#" className="link-btn">For Sale</a>
                                    </li>
                                </ul>
                                <ul className="info-list">
                                    <li>
                                        <div className="icon">
                                            <img src="assets/images/properties/bed.svg" alt="bed"/>
                                        </div>
                                        <span>6</span>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <img src="assets/images/properties/bathroom.svg" alt="bathroom"/>
                                        </div>
                                        <span>4</span>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <img src="assets/images/properties/parking.svg" alt="parking"/>
                                        </div>
                                        <span>1</span>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <img src="assets/images/properties/area.svg" alt="area"/>
                                        </div>
                                        <span>3250</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="properties-content">
                                <div className="top">
                                    <div className="title">
                                        <h3>
                                            <a href="property-details.html">Heritage Buildings</a>
                                        </h3>
                                        <span>194 Mercer Street, NY 10012, USA</span>
                                    </div>
                                    <div className="price">$95,000</div>
                                </div>
                                <div className="bottom">
                                    <div className="user">
                                        <img src="assets/images/user/user1.png" alt="image"/>
                                        <a href="agent-profile.html">Thomas Klarck</a>
                                    </div>
                                    <ul className="group-info">
                                        <li>
                                            <div className="dropdown">
                                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="ri-share-line"></i>
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li>
                                                        <a href="https://www.facebook.com/" target="_blank">
                                                            <i className="ri-facebook-fill"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="https://twitter.com/" target="_blank">
                                                            <i className="ri-twitter-x-line"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.instagram.com/" target="_blank">
                                                            <i className="ri-instagram-fill"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="https://bd.linkedin.com/" target="_blank">
                                                            <i className="ri-linkedin-fill"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <button type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Add To Favorites">
                                                <i className="ri-heart-line"></i>
                                            </button>
                                        </li>
                                        <li>
                                            <button type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                                                <i className="ri-arrow-left-right-line"></i>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div className="properties-item">
                            <div className="properties-image">
                                <a href="property-details.html">
                                    <img src="assets/images/properties/properties8.jpg" alt="image"/>
                                </a>
                                <ul className="action">
                                    <li>
                                        <div className="media">
                                            <span><i className="ri-vidicon-fill"></i></span>
                                            <span><i className="ri-image-line"></i>5</span>
                                        </div>
                                    </li>
                                </ul>
                                <ul className="link-list">
                                    <li>
                                        <a href="#" className="link-btn">Apartment</a>
                                    </li>
                                    <li>
                                        <a href="#" className="link-btn">For Sale</a>
                                    </li>
                                </ul>
                                <ul className="info-list">
                                    <li>
                                        <div className="icon">
                                            <img src="assets/images/properties/bed.svg" alt="bed"/>
                                        </div>
                                        <span>6</span>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <img src="assets/images/properties/bathroom.svg" alt="bathroom"/>
                                        </div>
                                        <span>4</span>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <img src="assets/images/properties/parking.svg" alt="parking"/>
                                        </div>
                                        <span>1</span>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <img src="assets/images/properties/area.svg" alt="area"/>
                                        </div>
                                        <span>3250</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="properties-content">
                                <div className="top">
                                    <div className="title">
                                        <h3>
                                            <a href="property-details.html">Beachfront Properties</a>
                                        </h3>
                                        <span>194 Mercer Street, NY 10012, USA</span>
                                    </div>
                                    <div className="price">$55,000</div>
                                </div>
                                <div className="bottom">
                                    <div className="user">
                                        <img src="assets/images/user/user2.png" alt="image"/>
                                        <a href="agent-profile.html">Walter White</a>
                                    </div>
                                    <ul className="group-info">
                                        <li>
                                            <div className="dropdown">
                                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="ri-share-line"></i>
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li>
                                                        <a href="https://www.facebook.com/" target="_blank">
                                                            <i className="ri-facebook-fill"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="https://twitter.com/" target="_blank">
                                                            <i className="ri-twitter-x-line"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.instagram.com/" target="_blank">
                                                            <i className="ri-instagram-fill"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="https://bd.linkedin.com/" target="_blank">
                                                            <i className="ri-linkedin-fill"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <button type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Add To Favorites">
                                                <i className="ri-heart-line"></i>
                                            </button>
                                        </li>
                                        <li>
                                            <button type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                                                <i className="ri-arrow-left-right-line"></i>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div className="properties-item">
                            <div className="properties-image">
                                <a href="property-details.html">
                                    <img src="assets/images/properties/properties9.jpg" alt="image"/>
                                </a>
                                <ul className="action">
                                    <li>
                                        <a href="#" className="featured-btn">Featured</a>
                                    </li>
                                    <li>
                                        <div className="media">
                                            <span><i className="ri-vidicon-fill"></i></span>
                                            <span><i className="ri-image-line"></i>5</span>
                                        </div>
                                    </li>
                                </ul>
                                <ul className="link-list">
                                    <li>
                                        <a href="#" className="link-btn">Apartment</a>
                                    </li>
                                    <li>
                                        <a href="#" className="link-btn">For Sale</a>
                                    </li>
                                </ul>
                                <ul className="info-list">
                                    <li>
                                        <div className="icon">
                                            <img src="assets/images/properties/bed.svg" alt="bed"/>
                                        </div>
                                        <span>6</span>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <img src="assets/images/properties/bathroom.svg" alt="bathroom"/>
                                        </div>
                                        <span>4</span>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <img src="assets/images/properties/parking.svg" alt="parking"/>
                                        </div>
                                        <span>1</span>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <img src="assets/images/properties/area.svg" alt="area"/>
                                        </div>
                                        <span>3250</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="properties-content">
                                <div className="top">
                                    <div className="title">
                                        <h3>
                                            <a href="property-details.html">Luxury Apartments</a>
                                        </h3>
                                        <span>194 Mercer Street, NY 10012, USA</span>
                                    </div>
                                    <div className="price">$77,000</div>
                                </div>
                                <div className="bottom">
                                    <div className="user">
                                        <img src="assets/images/user/user3.png" alt="image"/>
                                        <a href="agent-profile.html">Jane Ronan</a>
                                    </div>
                                    <ul className="group-info">
                                        <li>
                                            <div className="dropdown">
                                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="ri-share-line"></i>
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li>
                                                        <a href="https://www.facebook.com/" target="_blank">
                                                            <i className="ri-facebook-fill"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="https://twitter.com/" target="_blank">
                                                            <i className="ri-twitter-x-line"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.instagram.com/" target="_blank">
                                                            <i className="ri-instagram-fill"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="https://bd.linkedin.com/" target="_blank">
                                                            <i className="ri-linkedin-fill"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <button type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Add To Favorites">
                                                <i className="ri-heart-line"></i>
                                            </button>
                                        </li>
                                        <li>
                                            <button type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                                                <i className="ri-arrow-left-right-line"></i>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="information-area">
            <div className="container">
                <div className="information-inner-area">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-xl-6 col-md-12">
                            <div className="information-content">
                                <span className="sub">
                                    Exploring Unique Homes in the Real Estate Market
                                </span>
                                <h2>Looking To Buy A Property?</h2>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-12">
                            <ul className="information-list">
                                <li>
                                    <div className="phone-info">
                                        <div className="icon">
                                            <i className="ri-phone-line"></i>
                                        </div>
                                        <a href="tel:00201068710594">+(0000) 0000-0000-0000</a>
                                    </div>
                                </li>
                                <li>
                                    <a href="#" className="default-btn">Find Premium Property</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="agents-area pt-120 pb-95">
            <div className="container">
                <div className="section-title text-center">
                    <h2>Real Estate Agents</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et mauris eget ornare venenatis, in. Pharetra iaculis consectetur.</p>
                </div>
                <div className="row justify-content-center">
                    <div className="col-xl-3 col-md-6">
                        <div className="agents-card">
                            <div className="agents-image">
                                <a href="agent-profile.html">
                                    <img src="assets/images/agents/agents1.jpg" alt="image"/>
                                </a>
                            </div>
                            <div className="agents-content">
                                <h3>
                                    <a href="agent-profile.html">Christopher Baker</a>
                                </h3>
                                <span>Residential Property Manager</span>
                                <div className="social-info">
                                    <a href="https://www.facebook.com/" target="_blank">
                                        <i className="ri-facebook-fill"></i>
                                    </a>
                                    <a href="https://twitter.com/" target="_blank">
                                        <i className="ri-twitter-x-line"></i>
                                    </a>
                                    <a href="https://www.instagram.com/" target="_blank">
                                        <i className="ri-instagram-fill"></i>
                                    </a>
                                    <a href="https://bd.linkedin.com/" target="_blank">
                                        <i className="ri-linkedin-fill"></i>
                                    </a>
                                    <a href="https://www.youtube.com/" target="_blank">
                                        <i className="ri-youtube-line"></i>
                                    </a>
                                    <a href="https://www.pinterest.com/" target="_blank">
                                        <i className="ri-pinterest-line"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="agents-card">
                            <div className="agents-image">
                                <a href="agent-profile.html">
                                    <img src="assets/images/agents/agents2.jpg" alt="image"/>
                                </a>
                            </div>
                            <div className="agents-content">
                                <h3>
                                    <a href="agent-profile.html">Ryan Anderson</a>
                                </h3>
                                <span>Residential Appraiser</span>
                                <div className="social-info">
                                    <a href="https://www.facebook.com/" target="_blank">
                                        <i className="ri-facebook-fill"></i>
                                    </a>
                                    <a href="https://twitter.com/" target="_blank">
                                        <i className="ri-twitter-x-line"></i>
                                    </a>
                                    <a href="https://www.instagram.com/" target="_blank">
                                        <i className="ri-instagram-fill"></i>
                                    </a>
                                    <a href="https://bd.linkedin.com/" target="_blank">
                                        <i className="ri-linkedin-fill"></i>
                                    </a>
                                    <a href="https://www.youtube.com/" target="_blank">
                                        <i className="ri-youtube-line"></i>
                                    </a>
                                    <a href="https://www.pinterest.com/" target="_blank">
                                        <i className="ri-pinterest-line"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="agents-card">
                            <div className="agents-image">
                                <a href="agent-profile.html">
                                    <img src="assets/images/agents/agents3.jpg" alt="image"/>
                                </a>
                            </div>
                            <div className="agents-content">
                                <h3>
                                    <a href="agent-profile.html">Ashley Martin</a>
                                </h3>
                                <span>Commercial Consultant</span>
                                <div className="social-info">
                                    <a href="https://www.facebook.com/" target="_blank">
                                        <i className="ri-facebook-fill"></i>
                                    </a>
                                    <a href="https://twitter.com/" target="_blank">
                                        <i className="ri-twitter-x-line"></i>
                                    </a>
                                    <a href="https://www.instagram.com/" target="_blank">
                                        <i className="ri-instagram-fill"></i>
                                    </a>
                                    <a href="https://bd.linkedin.com/" target="_blank">
                                        <i className="ri-linkedin-fill"></i>
                                    </a>
                                    <a href="https://www.youtube.com/" target="_blank">
                                        <i className="ri-youtube-line"></i>
                                    </a>
                                    <a href="https://www.pinterest.com/" target="_blank">
                                        <i className="ri-pinterest-line"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="agents-card">
                            <div className="agents-image">
                                <a href="agent-profile.html">
                                    <img src="assets/images/agents/agents4.jpg" alt="image"/>
                                </a>
                            </div>
                            <div className="agents-content">
                                <h3>
                                    <a href="agent-profile.html">Brandon Mitchell</a>
                                </h3>
                                <span>Construction Superintendent</span>
                                <div className="social-info">
                                    <a href="https://www.facebook.com/" target="_blank">
                                        <i className="ri-facebook-fill"></i>
                                    </a>
                                    <a href="https://twitter.com/" target="_blank">
                                        <i className="ri-twitter-x-line"></i>
                                    </a>
                                    <a href="https://www.instagram.com/" target="_blank">
                                        <i className="ri-instagram-fill"></i>
                                    </a>
                                    <a href="https://bd.linkedin.com/" target="_blank">
                                        <i className="ri-linkedin-fill"></i>
                                    </a>
                                    <a href="https://www.youtube.com/" target="_blank">
                                        <i className="ri-youtube-line"></i>
                                    </a>
                                    <a href="https://www.pinterest.com/" target="_blank">
                                        <i className="ri-pinterest-line"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="blog-area pb-95">
            <div className="container">
                <div className="section-title text-center">
                    <h2>Latest Articles</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et mauris eget ornare venenatis, in. Pharetra iaculis consectetur.</p>
                </div>
                <div className="row justify-content-center">
                    <div className="col-xl-4 col-md-6">
                        <div className="blog-card">
                            <div className="blog-image">
                                <a href="#">
                                    <img src="assets/images/blog/blog1.jpg" alt="image"/>
                                </a>
                                <a href="blog-grid.html" className="tag-btn">Real Estate</a>
                                <a href="author.html" className="author-btn">
                                    <img src="assets/images/user/user1.png" alt="image"/>
                                </a>
                            </div>
                            <div className="blog-content">
                                <ul className="meta">
                                    <li>
                                        <i className="ri-calendar-2-line"></i>
                                        December 21, 2024
                                    </li>
                                    <li>
                                        <i className="ri-message-2-line"></i>
                                        05
                                    </li>
                                </ul>
                                <h3>
                                    <a href="#">Unveiling the Digital Landscape of Real Estate</a>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div className="blog-card">
                            <div className="blog-image">
                                <a href="#">
                                    <img src="assets/images/blog/blog2.jpg" alt="image"/>
                                </a>
                                <a href="blog-grid.html" className="tag-btn">Building</a>
                                <a href="author.html" className="author-btn">
                                    <img src="assets/images/user/user2.png" alt="image"/>
                                </a>
                            </div>
                            <div className="blog-content">
                                <ul className="meta">
                                    <li>
                                        <i className="ri-calendar-2-line"></i>
                                        December 22, 2024
                                    </li>
                                    <li>
                                        <i className="ri-message-2-line"></i>
                                        10
                                    </li>
                                </ul>
                                <h3>
                                    <a href="#">Spaces that Speak, Homes that Hear Your Real Estate Connection</a>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div className="blog-card">
                            <div className="blog-image">
                                <a href="#">
                                    <img src="assets/images/blog/blog3.jpg" alt="image"/>
                                </a>
                                <a href="blog-grid.html" className="tag-btn">Architecture</a>
                                <a href="author.html" className="author-btn">
                                    <img src="assets/images/user/user3.png" alt="image"/>
                                </a>
                            </div>
                            <div className="blog-content">
                                <ul className="meta">
                                    <li>
                                        <i className="ri-calendar-2-line"></i>
                                        December 25, 2024
                                    </li>
                                    <li>
                                        <i className="ri-message-2-line"></i>
                                        12
                                    </li>
                                </ul>
                                <h3>
                                    <a href="#">Stories and Insights from the Real Estate Frontline</a>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer className="footer-area pt-120">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-3 col-md-12">
                        <div className="single-footer-widget pe-3">
                            <div className="#">
                                <a href="index.html">
                                    <img src="assets/images/logo2.png" alt="logo2"/>
                                </a>
                            </div>
                            <p>Lorem ipsum dolor sit amet, elit dollar consectetur adipiscing elit. Diam lectus purus ultricies neque.</p>
                            <div className="widget-social">
                                <a href="https://www.facebook.com/" target="_blank">
                                    <i className="ri-facebook-fill"></i>
                                </a>
                                <a href="https://twitter.com/" target="_blank">
                                    <i className="ri-twitter-x-line"></i>
                                </a>
                                <a href="https://www.instagram.com/" target="_blank">
                                    <i className="ri-instagram-fill"></i>
                                </a>
                                <a href="https://bd.linkedin.com/" target="_blank">
                                    <i className="ri-linkedin-fill"></i>
                                </a>
                                <a href="https://www.youtube.com/" target="_blank">
                                    <i className="ri-youtube-line"></i>
                                </a>
                                <a href="https://www.pinterest.com/" target="_blank">
                                    <i className="ri-pinterest-line"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-9 col-md-12">
                        <div className="row justify-content-center">
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-footer-widget ps-3">
                                    <h3>Company</h3>
                                    <ul className="custom-links">
                                        <li><a href="about-us.html">About Us</a></li>
                                        <li><a href="contact-us.html">Contact Us</a></li>
                                        <li><a href="customers-review.html">Our Reviews</a></li>
                                        <li><a href="terms-conditions.html">Terms & Conditions</a></li>
                                        <li><a href="privacy-policy.html">Privacy Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-footer-widget ps-3">
                                    <h3>Resources</h3>
                                    <ul className="custom-links">
                                        <li><a href="#">Apartments</a></li>
                                        <li><a href="#">Villa</a></li>
                                        <li><a href="#">Sell or Buy</a></li>
                                        <li><a href="#">New Apartment</a></li>
                                        <li><a href="agents.html">Our Agents</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-footer-widget ps-3">
                                    <h3>Quick Links</h3>
                                    <ul className="custom-links">
                                        <li><a href="pricing.html">Pricing</a></li>
                                        <li><a href="what-we-do.html">What We Do</a></li>
                                        <li><a href="customers-review.html">Testimonial</a></li>
                                        <li><a href="blog-grid.html">Blog</a></li>
                                        <li><a href="neighborhood.html">Neighborhood</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-footer-widget">
                                    <h3>Contact Info</h3>
                                    <ul className="info-list">
                                        <li>
                                            <span>Address:</span>
                                            Ludhiana
                                        </li>
                                        <li>
                                            <span>Email:</span>
                                            <a href="#"><span className="__cf_email__" >therichposts@gmail.com</span></a>
                                        </li>
                                        <li>
                                            <span>Phone:</span>
                                            <a href="tel:00201068710594">+(0000) 0000-0000-0000</a>
                                        </li>
                                        <li>
                                            <span>Fax:</span>
                                            <a href="tel:01068710594">+0000-0000-0000</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-area">
                    <p>
                        with <span>love</span> All Rights Reserved by <a href="#" target="_blank">Jassa</a>
                    </p>
                </div>
            </div>
        </footer>
    </div>
  );
}
