import "./Home.css";
import Img13 from "../Images/logo.png";
import ImgA from "../Images/new.png";
import ImgB from "../Images/new1.png";

export default function Detail() {
  return (
    <div>
      <div className="Background">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container">
            <a class="navbar-brand" href="#">
              <img className="logo" src={Img13} />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="#">
                    NFTartLINK AUCTIONS
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="#">
                    COMMUNITY ACTIONS
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="#">
                    DASHBOARD
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="Background">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img className="w-100" src={ImgA} />
            </div>
            <div className="col-md-6">
              <img className="w-100" src={ImgB} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
