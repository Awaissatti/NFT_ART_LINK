import "./Home.css";

import Img1 from "../Images/Right Hero.png";
import Img2 from "../Images/right section.png";
import Img3 from "../Images/Group 5.png";
import Img4 from "../Images/Group 6.png";
import Img5 from "../Images/Group 7.png";
import Img6 from "../Images/Group 8.png";
import Img7 from "../Images/Group 13.png";
import Img8 from "../Images/Group 14.png";
import Img9 from "../Images/Group 15.png";
import Img10 from "../Images/section.png";
import Img11 from "../Images/nft.png";
import Img12 from "../Images/Seven Section.png";

export default function Home() {
  return (
    <div>
      <div className=" Background">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <h1 className="nft">
                WELCOME TO
                <br />
                NFTartLINK
              </h1>
              <h2 className="sub-head">For Creators and Collectors Alike</h2>
              <div className="row gap">
                <div className="col-md-3">
                  <button className="btn1">DISCOVER</button>
                </div>
                <div className="col-md-3">
                  <button className="btn2">CREATE</button>
                </div>
                <div className="col-6"></div>
              </div>
            </div>
            <div className="col-md-5">
              <img className="hero" src={Img1} />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row pt-5">
            <div className="col-md-7">
              <h1 className="nft1">Set Sail</h1>
              <p className="text text-white">
                Taking a trip on a boat is a great way to unwind, refocus, and
                <br />
                reconnect with nature. It has a meditative quality as it creates
                solace
                <br /> from the hustle and bustle of daily life. This painting
                was made on a<br /> 50x70 cm canvas, and a percentage of the
                sales will be given to a<br /> charity.
              </p>
              <div className="row pt-4">
                <div className="col-md-12">
                  <button className="btn1">READ MORE</button>
                </div>
              </div>
            </div>
            <div className="col-md-5 text-center">
              <img className="w-100" src={Img2} />
            </div>
          </div>
        </div>
      </div>
      <div className="background-1">
        <div className="container">
          <div className="row gap1">
            <div className="col-md-3 text-center">
              {" "}
              <img className="w-100 group" src={Img3} />
            </div>
            <div className="col-md-3 text-center">
              {" "}
              <img className="w-100 group" src={Img4} />
            </div>
            <div className="col-md-3 text-center">
              {" "}
              <img className="w-100 group" src={Img5} />
            </div>
            <div className="col-md-3 text-center">
              {" "}
              <img className="w-100 group" src={Img6} />
            </div>
          </div>
        </div>
      </div>
      <div className="background-2">
        <div className="container">
          <div className="row gap2 pb-5">
            <div className="col-md-4">
              {" "}
              <img className="w-100 grp1" src={Img7} />
            </div>
            <div className="col-md-4">
              <img className="w-100 grp1" src={Img8} />
            </div>
            <div className="col-md-4">
              <img className="w-100 grp1" src={Img9} />
            </div>
          </div>
        </div>
      </div>
      <div className="background-1">
        <div className="container">
          <h1 className="nft-1">Buy Original Art Online</h1>
          <div className="row">
            <div className="col-md-6 bg ">
              <p className="text-1 text-white">
                NFTs are universally investable assets that everyone can gain
                access to. Whether you are interested in owning an asset because
                you perceive value in it or you are buying it for pleasure
                because it brings you joy, they are one of the future kinds of
                monetization and they are here to stay. Art is an expression of
                one's thought and emotion, and for many, a reflection of their
                personality. It expresses feelings that cannot be described with
                words and in relation to NFTs, its value extends well beyond its
                ability to merely enhance the aesthetics of a room, its market
                is a popular place where investors put their money. CargoLink is
                a hybrid NFT platform. It is a combination of NFT and art. Every
                buyer will have both a digital certificate and something that
                has value in the real world.
              </p>
              <div className="next pt-5">
                <button className="btn1">READ MORE</button>
              </div>
            </div>
            <div className="col-md-6">
              <img className="w-100" src={Img10} />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row align-items-center gap1">
            <div className="col-md-7 bg3 ">
              <p className="text-1 text-white">
                Art is a universal language that allows people to express
                themselves and share their feelings with the rest of the world.
                It is a key means through which to connect with others. Art
                helps you better understand how you feel about particular
                things, and those who truly love and value the pieces will want
                to live with them and admire them on a regular basis.
                <br />
                <br />
                CargoLink's mission to connect the digital blockchain-based NFT
                world with real art created by real artists is a wonderful
                opportunity for both NFT and art enthusiasts to further express
                their passions. They have established a safe haven where these
                creations can be accessed and owned in the most convenient
                manner.Every NFT is backed by tangible assets. Once a purchase
                is completed, the artwork will be delivered to your home.
                <br />
                <br />
                Feel free to browse through our exquisite collections, we're
                fairly certain that you will find something to your heart’s
                content.
              </p>
            </div>
            <div className="col-md-5">
              <h1 className="nft-3 pl-5">
                Remarkable NFTs
                <br /> And Pure Artworks.
              </h1>
              <img className="w-100 nfta" src={Img11} />
            </div>
                  </div>
                  <div className="row">
                      <div className="col-md-12 text-center">
                      <img className="w-100 seven" src={Img12} />
                      </div>
                  </div>
        </div>
      </div>
    </div>
  );
}
