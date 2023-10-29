import logo from './logo.svg';
import './App.css';


const Card = ({ img, title, text, text2 }) =>
  <div class="card col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-6 overflow-hidden">
    <div class="row card-row">
      <div class="col-md-6 photo">
        <img src={img} class="img-fluid w-100 h-100" alt="..." />
      </div>
      <div class="col-md-6 card-content">
        <div class="card-body ">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">{text}</p>
          <p class="card-text"><small class="text-body-secondary">{text2}</small></p>
        </div>
      </div>
    </div>
  </div>

const CardPhoto = ({ img }) =>
  <div class="col-xs-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 photo photohover">
    <input type="checkbox" class="check" />
    <img src={img} class="img-fluid w-100 h-100" alt="..." />
    <div class="overlay">
      <span class="icon-search search"></span>
    </div>
  </div>


const App = () =>
  <>
    <header class="header" id="header">
      <div class="main-header">
        <nav class="navbar navbar-expand-md">
          <div class="container">
            <a class="navbar-brand" href="#">
              <img src="images/logo.png" alt="yoga"></img>
            </a>
            <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
              <ul class="navbar-nav ">
                <li class="nav-item menu__item">
                  <a class="nav-link active link" aria-current="page" href="#about">About us</a>
                </li>
                <li class="nav-item menu__item">
                  <a class="nav-link active link" aria-current="page" href="#revervation">Revervation</a>
                </li>
                <li class="nav-item menu__item">
                  <a class="nav-link link" aria-current="page" href="#gallery">Gallery</a>
                </li>
                <li class="nav-item menu__item">
                  <a class="nav-link link" aria-current="page" href="#blog">Blog</a>
                </li>
                <li class="nav-item menu__item">
                  <a class="nav-link link" aria-current="page" href="#elements">Elements</a>
                </li>
                <li class="nav-item menu__item">
                  <a class="nav-link link" aria-current="page" href="#shop">Shop</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <nav class="mobile-menu">
          <input id="menu__toggle" type="checkbox" />
          <label class="menu__btn" for="menu__toggle">
            <span></span>
          </label>
          <div class="menu__box">
            <ul>
              <li class="nav-item  menu__item"><a href="#about">About us</a></li>
              <li class="menu__item"><a href="#revervation">Revervation</a></li>
              <li class="menu__item"><a href="#gallery">Gallery</a></li>
              <li class="menu__item"><a href="#blog">Blog</a></li>
              <li class="menu__item"><a href="#elements">Elements</a></li>
              <li class="menu__item"><a href="#shop">Shop</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </header>

    <main>
      <section class="blok1" id="revervation">
        <div class="container-fluid container1">
          <div class="row">
            <div class="d-md-flex justify-content-center d-sm-flex justify-content-center d-xs-flex justify-content-center col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-left">
              <form class="form">
                <h4>Trial Class</h4>
                <div class="input-group mb-3">
                  <input type="text" class="form-control" aria-label="Sizing example input" placeholder="Enter your name" />
                </div>
                <div class="input-group mb-3">
                  <input type="text" class="form-control" aria-label="Sizing example input" placeholder="Enter your phone" />
                </div>
                <div class="input-group mb-3">
                  <select class="form-control" aria-label="Default select example">
                    <option selected>Chose your class</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <button type="submit" class="btn-baner">Try it</button>
              </form>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-6 text">
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
      <section class="blok2" id="blog">
        <h3 class="program-title">
          YOGA FEATURE PROGRAM
        </h3>
        <h2 class="program-subtitle">
          Our Classes
        </h2>
        <div class="container">
          <div class="row row-cols-2 cardGroup ">
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
      <section class="blok3" id="gallery">
        <div class="container-fluid photoGroup">
          <div class="row ">
            <CardPhoto img="images/img-05.jpg"></CardPhoto>
            <CardPhoto img="images/img-06.jpg"></CardPhoto>
            <CardPhoto img="images/img-07.jpg"></CardPhoto>
            <CardPhoto img="images/img-08.jpg"></CardPhoto>
          </div>
          <div class="row ">
            <CardPhoto img="images/img-09.jpg"></CardPhoto>
            <CardPhoto img="images/img-10.jpg"></CardPhoto>
            <CardPhoto img="images/img-11.jpg"></CardPhoto>
            <CardPhoto img="images/img-12.jpg"></CardPhoto>
          </div>
        </div>
      </section>
      <section class="blok4" id="about">
        <div class="container about">
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <h3 class="about-title">About us</h3>
              <p class="about-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation toui ullamcomi laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor it in lorei voluptate velit esse cillum dolore eu fugiat nulla pariatur lorem ispum loting sokui.
              </p>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">

              <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="images/img-13.jpg" class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src="images/img-13.jpg" class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src="images/img-13.jpg" class="d-block w-100" alt="..." />
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
                  <span class="icon-circle-left" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
                  <span class="icon-circle-right" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="blok5" id="elements">
        <div class="container-fluid ico">
          <div class="container">
            <div class="row ">
              <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 block5-img">
                <div class="block5-img1"></div>
                <h6>IMPROVED OVERALL HEALTH</h6>
                <p class="ico-text">Enim ad minim veniam, quis nostrud exercitation toui ullamcomi laboris nisi ut aliquip ex ea com.</p>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 block5-img">
                <div class="block5-img2"></div>
                <h6>INCREASED CONCENTRATION</h6>
                <p class="ico-text">Enim ad minim veniam, quis nostrud exercitation toui ullamcomi laboris nisi ut aliquip ex ea com.</p>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 block5-img">
                <div class="block5-img3"></div>
                <h6>BLANCE YOUR MIND</h6>
                <p class="ico-text">Enim ad minim veniam, quis nostrud exercitation toui ullamcomi laboris nisi ut aliquip ex ea com.</p>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 block5-img">
                <div class="block5-img4"></div>
                <h6>SLEEP BETTER</h6>
                <p class="ico-text">Enim ad minim veniam, quis nostrud exercitation toui ullamcomi laboris nisi ut aliquip ex ea com.</p>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 block5-img">
                <div class="block5-img5"></div>
                <h6>WEIGHT LOSS</h6>
                <p class="ico-text" >Enim ad minim veniam, quis nostrud exercitation toui ullamcomi laboris nisi ut aliquip ex ea com.</p>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 block5-img">
                <div class="block5-img6"></div>
                <h6>STRENGTHENS YOUR BONES</h6>
                <p class="ico-text">Enim ad minim veniam, quis nostrud exercitation toui ullamcomi laboris nisi ut aliquip ex ea com.</p>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 block5-img">
                <div class="block5-img7"></div>
                <h6>INCREASED FLEXIBILITY</h6>
                <p class="ico-text">Enim ad minim veniam, quis nostrud exercitation toui ullamcomi laboris nisi ut aliquip ex ea com.</p>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 block5-img">
                <div class="block5-img8"></div>
                <h6>LOWER BLOOD PRESSURE</h6>
                <p class="ico-text" >Enim ad minim veniam, quis nostrud exercitation toui ullamcomi laboris nisi ut aliquip ex ea com.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="blok6" id="shop">
        <div class="container-fluid bg ">
          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 block6-card card1">
                <div class="card block6-box">
                  <div class="card-header">
                    <span class="cardtitle1">$ </span>
                    <span class="cardtitle">49 </span>
                    <span class="cardtitle2">/ MONTH</span>
                  </div>
                  <div class="card-body">
                    <p class="cardtext">ENTRY DATE: MON – FRI</p>
                    <p class="cardtext">ENTRY TIME: 8A.M – 8P.M</p>
                    <p class="cardtext">NUTRITION ADVICER: NO</p>
                    <a href="#" class="btn btn-primary">Buy now</a>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 block6-card card2">
                <div class="card block6-box">
                  <div class="card-header">
                    <span class="cardtitle1">$ </span>
                    <span class="cardtitle">69 </span>
                    <span class="cardtitle2">/  MONTH</span>
                  </div>
                  <div class="card-body">
                    <p class="cardtext">ENTRY DATE: MON – FRI</p>
                    <p class="cardtext">ENTRY TIME: 8A.M – 8P.M</p>
                    <p class="cardtext">NUTRITION ADVICER: YES</p>
                    <a href="#" class="btn btn-primary ">Buy now</a>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 block6-card card3">
                <div class="card block6-box">
                  <div class="card-header">
                    <span class="cardtitle1">$ </span>
                    <span class="cardtitle">99 </span>
                    <span class="cardtitle2">/  MONTH</span>
                  </div>
                  <div class="card-body">
                    <p class="cardtext">ENTRY DATE: MON – FRI</p>
                    <p class="cardtext">ENTRY TIME: 8A.M – 8P.M</p>
                    <p class="cardtext">NUTRITION ADVICER: YES</p>
                    <a href="#" class="btn btn-primary">Buy now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer class="footer">
      <div class="container ">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <h4 class="footer-title">
              ABOUT
            </h4>
            <p class=" sub footer-subtitle" >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad m inim veniam, quis nostrud exercitation toui ullamcomi
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <a href="https://pinterest.com/" class="icon-group icon-pinterest"></a>
            <a href="https://twitter.com/" class="icon-group icon-twitter"></a>
            <a href="https://www.facebook.com/" class="icon-group icon-facebook"></a>
            <a href="https://www.google.com/" class="icon-group icon-google-plus3"></a>
            <a href="https://www.linkedin.com/" class="icon-group icon-linkedin"></a>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 center">
            <h4 class="footer-title">
              CONTACT US
            </h4>
            <p class="footer-subtitle">
              <span class="icon-group icon-location2"></span>
              5419 Joseph Mountains
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Apt. 716
            </p>
            <p class="footer-subtitle">
              <span class="icon-group icon-phone"></span>
              +1 234 567 89
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+1 234 678 90</p>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 right ">
            <p class="footer-subtitle"> <span class=" icon-group icon-envelop"></span> joga.info@example.com</p>
            <p class="footer-subtitle"> <span class="icon-group icon-dribbble"></span>  www.example.com</p>
          </div>
          <div class="col-12">
            <p class=" footer-text footer-subtitle">
              Copyright  ©  2016-2017 Yoga classes
            </p>
          </div>
        </div>
      </div>
    </footer>
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
      integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
      crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
      integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
      crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
      integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
      crossorigin="anonymous"></script>
  </>

export default App;
