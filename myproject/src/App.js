import logo from './logo.svg';
import './App.css';
import Carousel from 'react-bootstrap/Carousel';



const Card = ({ img, title, text, text2 }) =>
  <div className="card col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-6 overflow-hidden">
    <div className="row card-row">
      <div className="col-md-6 photo">
        <img src={img} className="img-fluid w-100 h-100" alt="..." />
      </div>
      <div className="col-md-6 card-content">
        <div className="card-body ">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <p className="card-text"><small className="text-body-secondary">{text2}</small></p>
        </div>
      </div>
    </div>
  </div>


const CardPhoto = ({ img }) =>
  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 photo photohover">
    <input type="checkbox" className="check" />
    <img src={img} className="img-fluid w-100 h-100" alt="..." />
    <div className="overlay">
      <span className="icon-search search"></span>
    </div>
  </div>


const App = () =>
  <>
    <header className="header" id="header">
      <div className="main-header">
        <nav className="navbar navbar-expand-md">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src="images/logo.png" alt="yoga"></img>
            </a>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
              <ul className="navbar-nav ">
                <li className="nav-item menu__item">
                  <a className="nav-link active link" aria-current="page" href="#about">About us</a>
                </li>
                <li className="nav-item menu__item">
                  <a className="nav-link active link" aria-current="page" href="#revervation">Revervation</a>
                </li>
                <li className="nav-item menu__item">
                  <a className="nav-link link" aria-current="page" href="#gallery">Gallery</a>
                </li>
                <li className="nav-item menu__item">
                  <a className="nav-link link" aria-current="page" href="#blog">Blog</a>
                </li>
                <li className="nav-item menu__item">
                  <a className="nav-link link" aria-current="page" href="#elements">Elements</a>
                </li>
                <li className="nav-item menu__item">
                  <a className="nav-link link" aria-current="page" href="#shop">Shop</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <nav className="mobile-menu">
          <input id="menu__toggle" type="checkbox" />
          <label className="menu__btn" htmlFor="menu__toggle">
            <span></span>
          </label>
          <div className="menu__box">
            <ul>
              <li className="nav-item  menu__item"><a href="#about">About us</a></li>
              <li className="menu__item"><a href="#revervation">Revervation</a></li>
              <li className="menu__item"><a href="#gallery">Gallery</a></li>
              <li className="menu__item"><a href="#blog">Blog</a></li>
              <li className="menu__item"><a href="#elements">Elements</a></li>
              <li className="menu__item"><a href="#shop">Shop</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </header>

    <main>
      <section className="blok1" id="revervation">
        <div className="container-fluid container1">
          <div className="row">
            <div className="d-md-flex justify-content-center d-sm-flex justify-content-center d-xs-flex justify-content-center col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-left">
              <form className="form">
                <h4>Trial Class</h4>
                <div className="input-group mb-3">
                  <input type="text" className="form-control" aria-label="Sizing example input" placeholder="Enter your name" />
                </div>
                <div className="input-group mb-3">
                  <input type="text" className="form-control" aria-label="Sizing example input" placeholder="Enter your phone" />
                </div>
                <div className="input-group mb-3">
                  <select className="form-control" aria-label="Default select example">
                    <option value>Chose your class</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <button type="submit" className="btn-baner">Try it</button>
              </form>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-6 text">
              <h1>
                JUST BALANCE <br /> YOUR MIND $ BODY
              </h1>
              <h2>
                Create the healthy living <br /> for yourself
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section className="blok2" id="blog">
        <h3 className="program-title">
          YOGA FEATURE PROGRAM
        </h3>
        <h2 className="program-subtitle">
          Our classNamees
        </h2>
        <div className="container">
          <div className="row row-cols-2 cardGroup ">
            <Card img="images/img-01.jpg" title="Yoga For Health" text="Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
            commodo consequat consectetur adipisicing elit, sed do eiusmod tempor incididunt." text2="Ashtanga - Hatha"></Card>
            <Card img="images/img-02.jpg" title="Yoga For Lose Weight" text="Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
            commodo consequat consectetur adipisicing elit, sed do eiusmod tempor incididunt." text2="Ashtanga - Hatha"></Card>
            <Card img="images/img-03.jpg" title="Yoga For Children" text="Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
            commodo consequat consectetur adipisicing elit, sed do eiusmod tempor incididunt." text2="Ashtanga - Hatha"></Card>
            <Card img="images/img-04.jpg" title="Yoga For Elderly" text="Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
            commodo consequat consectetur adipisicing elit, sed do eiusmod tempor incididunt." text2="Ashtanga - Hatha"></Card>
          </div>
        </div>
      </section>
      <section className="blok3" id="gallery">
        <div className="container-fluid photoGroup">
          <div className="row ">
            <CardPhoto img="images/img-05.jpg"></CardPhoto>
            <CardPhoto img="images/img-06.jpg"></CardPhoto>
            <CardPhoto img="images/img-07.jpg"></CardPhoto>
            <CardPhoto img="images/img-08.jpg"></CardPhoto>
          </div>
          <div className="row ">
            <CardPhoto img="images/img-09.jpg"></CardPhoto>
            <CardPhoto img="images/img-10.jpg"></CardPhoto>
            <CardPhoto img="images/img-11.jpg"></CardPhoto>
            <CardPhoto img="images/img-12.jpg"></CardPhoto>
          </div>
        </div>
      </section>
      <section className="blok4" id="about">
        <div className="container about">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <h3 className="about-title">About us</h3>
              <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation toui ullamcomi laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor it in lorei voluptate velit esse cillum dolore eu fugiat nulla pariatur lorem ispum loting sokui.
              </p>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <Carousel>
                <Carousel.Item>
                  <img src="images/img-13.jpg" alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img src="images/img-13.jpg" alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img src="images/img-13.jpg" alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
      <section className="blok5" id="elements">
        <div className="container-fluid ico">
          <div className="container">
            <div className="row ">
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 block5-img">
                <div className="block5-img1"></div>
                <h6>IMPROVED OVERALL HEALTH</h6>
                <p className="ico-text">Enim ad minim veniam, quis nostrud exercitation toui ullamcomi laboris nisi ut aliquip ex ea com.</p>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 block5-img">
                <div className="block5-img2"></div>
                <h6>INCREASED CONCENTRATION</h6>
                <p className="ico-text">Enim ad minim veniam, quis nostrud exercitation toui ullamcomi laboris nisi ut aliquip ex ea com.</p>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 block5-img">
                <div className="block5-img3"></div>
                <h6>BLANCE YOUR MIND</h6>
                <p className="ico-text">Enim ad minim veniam, quis nostrud exercitation toui ullamcomi laboris nisi ut aliquip ex ea com.</p>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 block5-img">
                <div className="block5-img4"></div>
                <h6>SLEEP BETTER</h6>
                <p className="ico-text">Enim ad minim veniam, quis nostrud exercitation toui ullamcomi laboris nisi ut aliquip ex ea com.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 block5-img">
                <div className="block5-img5"></div>
                <h6>WEIGHT LOSS</h6>
                <p className="ico-text" >Enim ad minim veniam, quis nostrud exercitation toui ullamcomi laboris nisi ut aliquip ex ea com.</p>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 block5-img">
                <div className="block5-img6"></div>
                <h6>STRENGTHENS YOUR BONES</h6>
                <p className="ico-text">Enim ad minim veniam, quis nostrud exercitation toui ullamcomi laboris nisi ut aliquip ex ea com.</p>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 block5-img">
                <div className="block5-img7"></div>
                <h6>INCREASED FLEXIBILITY</h6>
                <p className="ico-text">Enim ad minim veniam, quis nostrud exercitation toui ullamcomi laboris nisi ut aliquip ex ea com.</p>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 block5-img">
                <div className="block5-img8"></div>
                <h6>LOWER BLOOD PRESSURE</h6>
                <p className="ico-text" >Enim ad minim veniam, quis nostrud exercitation toui ullamcomi laboris nisi ut aliquip ex ea com.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blok6" id="shop">
        <div className="container-fluid bg ">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 block6-card card1">
                <div className="card block6-box">
                  <div className="card-header">
                    <span className="cardtitle1">$ </span>
                    <span className="cardtitle">49 </span>
                    <span className="cardtitle2">/ MONTH</span>
                  </div>
                  <div className="card-body">
                    <p className="cardtext">ENTRY DATE: MON – FRI</p>
                    <p className="cardtext">ENTRY TIME: 8A.M – 8P.M</p>
                    <p className="cardtext">NUTRITION ADVICER: NO</p>
                    <a href="#" className="btn btn-primary">Buy now</a>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 block6-card card2">
                <div className="card block6-box">
                  <div className="card-header">
                    <span className="cardtitle1">$ </span>
                    <span className="cardtitle">69 </span>
                    <span className="cardtitle2">/  MONTH</span>
                  </div>
                  <div className="card-body">
                    <p className="cardtext">ENTRY DATE: MON – FRI</p>
                    <p className="cardtext">ENTRY TIME: 8A.M – 8P.M</p>
                    <p className="cardtext">NUTRITION ADVICER: YES</p>
                    <a href="#" className="btn btn-primary ">Buy now</a>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 block6-card card3">
                <div className="card block6-box">
                  <div className="card-header">
                    <span className="cardtitle1">$ </span>
                    <span className="cardtitle">99 </span>
                    <span className="cardtitle2">/  MONTH</span>
                  </div>
                  <div className="card-body">
                    <p className="cardtext">ENTRY DATE: MON – FRI</p>
                    <p className="cardtext">ENTRY TIME: 8A.M – 8P.M</p>
                    <p className="cardtext">NUTRITION ADVICER: YES</p>
                    <a href="#" className="btn btn-primary">Buy now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer className="footer">
      <div className="container ">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <h4 className="footer-title">
              ABOUT
            </h4>
            <p className=" sub footer-subtitle" >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad m inim veniam, quis nostrud exercitation toui ullamcomi
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <a href="https://pinterest.com/" className="icon-group icon-pinterest"></a>
            <a href="https://twitter.com/" className="icon-group icon-twitter"></a>
            <a href="https://www.facebook.com/" className="icon-group icon-facebook"></a>
            <a href="https://www.google.com/" className="icon-group icon-google-plus3"></a>
            <a href="https://www.linkedin.com/" className="icon-group icon-linkedin"></a>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 center">
            <h4 className="footer-title">
              CONTACT US
            </h4>
            <p className="footer-subtitle">
              <span className="icon-group icon-location2"></span>
              5419 Joseph Mountains
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Apt. 716
            </p>
            <p className="footer-subtitle">
              <span className="icon-group icon-phone"></span>
              +1 234 567 89
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+1 234 678 90</p>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 right ">
            <p className="footer-subtitle"> <span className=" icon-group icon-envelop"></span> joga.info@example.com</p>
            <p className="footer-subtitle"> <span className="icon-group icon-dribbble"></span>  www.example.com</p>
          </div>
          <div className="col-12">
            <p className=" footer-text footer-subtitle">
              Copyright  ©  2016-2017 Yoga classes
            </p>
          </div>
        </div>
      </div>
    </footer>

    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
      integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
      crossOrigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
      integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
      crossOrigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
      integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
      crossOrigin="anonymous"></script>
  </>

export default App;
