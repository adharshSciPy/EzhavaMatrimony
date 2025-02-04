import React, { useEffect, useState } from "react";
import DashStyles from "../Dashboard/dashboard.module.css";
import {
  HeartStraight,
  SlidersHorizontal,
  Pencil,
  X
} from "phosphor-react";
import { Link } from "react-router-dom";
import image from "../../assets/free-photo-of-couple-in-green-grass-field.jpeg";
import Nav from "../../component/Navbar/Nav";
import Footer from "../../component/Footer/Footer";

function AllMatches() {
     const [liked, setLiked] = useState(false);
      const [isOpen, setIsOpen] = useState(false);
      const [activeTab, setActiveTab] = useState("top");
    
      // const[showHamburger,setShowHamburger]=useState(true);
    
      const likedProfile = () => {
        setLiked(!liked);
      };
    
      const toggleMenu = () => {
        setIsOpen((prev)=>!prev);
      };
    
      useEffect(() => {
        const handleScrollHam = () => {
          document
            .querySelectorAll(
              `.${DashStyles.FilterIcon}`
            )
            .forEach((el) => {
              if (
                window.scrollY > 10 &&
                !el.classList.contains(DashStyles.open1) &&
                !el.classList.contains(DashStyles.open2) &&
                !el.classList.contains(DashStyles.open3)
              ) {
                el.style.display = "none";
              } else {
                el.style.display = "block";
              }
            });
        };
    
        window.addEventListener("scroll", handleScrollHam);
        return () => {
          window.removeEventListener("scroll", handleScrollHam);
        };
      }, []);
      return (
        <div className={DashStyles.mainContainer}>
          <Nav />
          <div className={DashStyles.PageSelection}>
            <Link
              to="/toprecommendations"
              className={`${DashStyles.heading} ${
                activeTab === "all" ? DashStyles.tabSelected : ""
              }`}
              onClick={() => setActiveTab("all")}
            >
              Top Recommendations
            </Link>
    
            <Link
              to="/allmatches"
              className={`${DashStyles.heading} ${
                activeTab === "top" ? DashStyles.tabSelected : ""
              }`}
              onClick={() => setActiveTab("top")}
            >
              All Matches
            </Link>
          </div>
    
          <div className={DashStyles.SubContainer}>
        
            {/* Filter div start */}
            <div className={DashStyles.FilterDiv}>
              <div className={DashStyles.FilterProfiles}>
                <h3 className={DashStyles.FilterProfilesHeading}>
                  Filter Profiles
                </h3>
              </div>
              <div className={DashStyles.BasicDetailsMainDiv}>
                <h3 className={DashStyles.BasicDetailsHead}>Basic Details</h3>
                <div className={DashStyles.BasicDetailsDiv}>
                  <select name="age" className={DashStyles.bdSelect}>
                    <option value="">Age</option>
                    <option value="18-25">18-25</option>
                    <option value="26-35">26-35</option>
                  </select>
                  <select name="height" className={DashStyles.bdSelect}>
                    <option value="">Height</option>
                    <option value="135-145">135-145</option>
                    <option value="145-155">145-155</option>
                    <option value="155-165">155-165</option>
                    <option value="165-175">165-175</option>
                    <option value="175-185">175-185</option>
                    <option value="185-195">185-195</option>
                    <option value="195-200">195-200</option>
                  </select>
    
                  <select name="maritialStatus" className={DashStyles.bdSelect}>
                    <option value="">Maritial Status</option>
                    <option value="neverMarried">Never Married</option>
                    <option value="widowed">Widowed</option>
                    <option value="divorced">Divorced</option>
                    <option value="awaitingDivorce">Awaiting Divorce</option>
                  </select>
                  <select name="motherTongue" className={DashStyles.bdSelect}>
                    <option value="">Mother Tongue</option>
                    <option value="malayalam">Malayalam</option>
                    <option value="english">English</option>
                    <option value="hindi">Hindi</option>
                  </select>
    
                  <select name="physicalStatus" className={DashStyles.bdSelect}>
                    <option value="">Physical Status</option>
                    <option value="none">None</option>
                    <option value="physicallyChallenged">
                      Physically Challenged
                    </option>
                  </select>
                </div>
              </div>
    
              <div className={DashStyles.ProfessionalDetailsMainDiv}>
                <h3 className={DashStyles.ProfessionalDetailsHead}>
                  Professional Details
                </h3>
                <div className={DashStyles.ProfessionalDetailsDiv}>
                  <select name="occupation" className={DashStyles.pdSelect}>
                    <option value="">Ocuupation</option>
                    <option value="18-25">dummy</option>
                    <option value="26-35">dummy</option>
                  </select>
                  <select name="annualIncome" className={DashStyles.pdSelect}>
                    <option value="">Annual Income</option>
                    <option value="less_than_1M">Less than $1M</option>
                    <option value="1M_to_5M">$1M to $5M</option>
                    <option value="5M_to_10M">$5M to $10M</option>
                    <option value="10M_to_50M">$10M to $50M</option>
                    <option value="above_50M">Above $50M</option>
                  </select>
                  <select name="education" className={DashStyles.pdSelect}>
                    <option value="">Education</option>
                    <option value="18-25">dummy</option>
                    <option value="26-35">dummy</option>
                  </select>
                </div>
              </div>
    
              <div className={DashStyles.LocationDetailsMainDiv}>
                <div className={DashStyles.textBox}>
                  <h6 className={DashStyles.textBoxHead}>Location Details</h6>
                  <h6 className={DashStyles.textBoxPara}>
                    Nearby Profiles
                  </h6>
                  <h6 className={DashStyles.textBoxSubPara}>
                  Matches near your location
                  </h6>
                </div>
    
                <div className={DashStyles.penIconDiv}>
                  <Pencil size={16} weight="duotone" />
                </div>
              </div>
              <div className={DashStyles.LocationDetailsMainDiv}>
                <div className={DashStyles.textBox}>
                  <h6 className={DashStyles.textBoxHead}>Life Style</h6>
                  <h6 className={DashStyles.textBoxPara}>
                    Mutual Hobbies
                  </h6>
                  <h6 className={DashStyles.textBoxSubPara}>
                    Matches who has similar hobbies as
                  </h6>
                </div>
    
                <div className={DashStyles.penIconDiv}>
                  <Pencil size={16} weight="duotone" />
                </div>
              </div>
              <div className={DashStyles.LocationDetailsMainDiv}>
                <div className={DashStyles.textBox}>
                  <h6 className={DashStyles.textBoxSubPara}>
                    Eating Habits
                  </h6>
    
                </div>
    
                <div className={DashStyles.penIconDiv}>
                  <Pencil size={16} weight="duotone" />
                </div>
              </div>
              <div className={DashStyles.FilterDivButtonsMain}>
                <button className={DashStyles.FilterDivButtonOne}>
                  Apply
                </button>
                <button className={DashStyles.FilterDivButtonOne}>
                  Reset
                </button>
              </div>
            </div>
            {/* filter div end */}
            {/* Profile details div for smalle screens start */}
            <div
              className={isOpen ? "overlay overlayActive" : "overlay"}
              // onClick={toggleMenu}
            >
              <div className={DashStyles.HamburgerMain}>
                {/* {showHamburger&&( */}
                <div className={DashStyles.FilterHam} onClick={() => toggleMenu()}>
                {isOpen ? (
            <X size={20} weight="bold" className={DashStyles.FilterCloseIcon} />
          ) : (
            <SlidersHorizontal size={25} weight="duotone" className={DashStyles.FilterIcon} />
          )}
                </div>
                {/* )} */}
                {/* profile div for smaller screens */}
                <div
                  className={`${DashStyles.drawer} ${
                    isOpen ? DashStyles.drawerOpen : DashStyles.drawerClosed
                  }`}
                >
                  {/* <div className={DashStyles.FilterDiv}> */}
                  <div className={DashStyles.FilterProfiles}>
                    <h3 className={DashStyles.FilterProfilesHeading}>
                      Filter Profiles
                    </h3>
                  </div>
                  <div className={DashStyles.BasicDetailsMainDiv}>
                    <h3 className={DashStyles.BasicDetailsHead}>Basic Details</h3>
                    <div className={DashStyles.BasicDetailsDiv}>
                      <select name="age" className={DashStyles.bdSelect}>
                        <option value="">Age</option>
                        <option value="18-25">18-25</option>
                        <option value="26-35">26-35</option>
                      </select>
                      <select name="height" className={DashStyles.bdSelect}>
                        <option value="">Height</option>
                        <option value="135-145">135-145</option>
                        <option value="145-155">145-155</option>
                        <option value="155-165">155-165</option>
                        <option value="165-175">165-175</option>
                        <option value="175-185">175-185</option>
                        <option value="185-195">185-195</option>
                        <option value="195-200">195-200</option>
                      </select>
    
                      <select name="maritialStatus" className={DashStyles.bdSelect}>
                        <option value="">Maritial Status</option>
                        <option value="neverMarried">Never Married</option>
                        <option value="widowed">Widowed</option>
                        <option value="divorced">Divorced</option>
                        <option value="awaitingDivorce">Awaiting Divorce</option>
                      </select>
                      <select name="motherTongue" className={DashStyles.bdSelect}>
                        <option value="">Mother Tongue</option>
                        <option value="malayalam">Malayalam</option>
                        <option value="english">English</option>
                        <option value="hindi">Hindi</option>
                      </select>
    
                      <select name="physicalStatus" className={DashStyles.bdSelect}>
                        <option value="">Physical Status</option>
                        <option value="none">None</option>
                        <option value="physicallyChallenged">
                          Physically Challenged
                        </option>
                      </select>
                    </div>
                  </div>
    
                  <div className={DashStyles.ProfessionalDetailsMainDiv}>
                    <h3 className={DashStyles.ProfessionalDetailsHead}>
                      Professional Details
                    </h3>
                    <div className={DashStyles.ProfessionalDetailsDiv}>
                      <select name="occupation" className={DashStyles.pdSelect}>
                        <option value="">Ocuupation</option>
                        <option value="18-25">dummy</option>
                        <option value="26-35">dummy</option>
                      </select>
                      <select name="annualIncome" className={DashStyles.pdSelect}>
                        <option value="">Annual Income</option>
                        <option value="less_than_1M">Less than $1M</option>
                        <option value="1M_to_5M">$1M to $5M</option>
                        <option value="5M_to_10M">$5M to $10M</option>
                        <option value="10M_to_50M">$10M to $50M</option>
                        <option value="above_50M">Above $50M</option>
                      </select>
                      <select name="education" className={DashStyles.pdSelect}>
                        <option value="">Education</option>
                        <option value="18-25">dummy</option>
                        <option value="26-35">dummy</option>
                      </select>
                    </div>
                  </div>
    
                  <div className={DashStyles.LocationDetailsMainDiv}>
                <div className={DashStyles.textBox}>
                  <h6 className={DashStyles.textBoxHead}>Location Details</h6>
                  <h6 className={DashStyles.textBoxPara}>
                    Nearby Profiles
                  </h6>
                  <h6 className={DashStyles.textBoxSubPara}>
                  Matches near your location
                  </h6>
                </div>
    
                <div className={DashStyles.penIconDiv}>
                  <Pencil size={16} weight="duotone" />
                </div>
              </div>
              <div className={DashStyles.LocationDetailsMainDiv}>
                <div className={DashStyles.textBox}>
                  <h6 className={DashStyles.textBoxHead}>Life Style</h6>
                  <h6 className={DashStyles.textBoxPara}>
                    Mutual Hobbies
                  </h6>
                  <h6 className={DashStyles.textBoxSubPara}>
                    Matches who has similar hobbies as
                  </h6>
                </div>
    
                <div className={DashStyles.penIconDiv}>
                  <Pencil size={16} weight="duotone" />
                </div>
              </div>
              <div className={DashStyles.LocationDetailsMainDiv}>
                <div className={DashStyles.textBox}>
                  <h6 className={DashStyles.textBoxSubPara}>
                    Eating Habits
                  </h6>
    
                </div>
    
                <div className={DashStyles.penIconDiv}>
                  <Pencil size={16} weight="duotone" />
                </div>
              </div>
              <div className={DashStyles.FilterDivButtonsMain}>
                <button className={DashStyles.FilterDivButtonOne}>
                  Apply
                </button>
                <button className={DashStyles.FilterDivButtonOne}>
                  Reset
                </button>
              </div>
                </div>
              </div>
            </div>
    
            <div
              className={`${DashStyles.Container} ${
                isOpen ? DashStyles.contentDimmed : ""
              }`}
            >
              <div className={DashStyles.OuterBox}>
                <div className={DashStyles.BigBox}></div>
              </div>
    
              {/* Top recommendation start */}
              <div className={DashStyles.TopRecommendation}>
                <div className={DashStyles.trHeading}>
                  <h2 className={DashStyles.TrHead}>All Matches(1390)</h2>
                  {/* <h4 className={DashStyles.TrContent}>
                    Members who match your partner preference
                  </h4> */}
                </div>
                <div className={DashStyles.trContentDisplay}>
                  <div className={DashStyles.trCard}>
                    <div className={DashStyles.trCardImg}>
                      <img
                        src={image}
                        alt="Crad imgae"
                        className={DashStyles.cardImage}
                      />
                    </div>
                    <div className={DashStyles.trCardDetails}>
                      <div className={DashStyles.trCardDetailSub}>
                        <h5 className={DashStyles.trUserName}>Gopika Krishnan</h5>
                        <h6 className={DashStyles.trUserDetails}>25 Yrs ,5'7"</h6>
                      </div>
                      <div
                        className={DashStyles.LikeButton}
                        onClick={() => likedProfile()}
                      >
                        <HeartStraight
                          size={20}
                          weight={liked ? "fill" : "light"}
                          className={`${DashStyles.likedHeartBefore} ${
                            liked ? DashStyles.likedHeart : ""
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={DashStyles.trCard}>
                    <div className={DashStyles.trCardImg}>
                      <img
                        src={image}
                        alt="Crad imgae"
                        className={DashStyles.cardImage}
                      />
                    </div>
                    <div className={DashStyles.trCardDetails}>
                      <div className={DashStyles.trCardDetailSub}>
                        <h5 className={DashStyles.trUserName}>Gopika Krishnan</h5>
                        <h6 className={DashStyles.trUserDetails}>25 Yrs ,5'7"</h6>
                      </div>
                      <div
                        className={DashStyles.LikeButton}
                        onClick={() => likedProfile()}
                      >
                        <HeartStraight
                          size={20}
                          weight={liked ? "fill" : "light"}
                          className={`${DashStyles.likedHeartBefore} ${
                            liked ? DashStyles.likedHeart : ""
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={DashStyles.trCard}>
                    <div className={DashStyles.trCardImg}>
                      <img
                        src={image}
                        alt="Crad imgae"
                        className={DashStyles.cardImage}
                      />
                    </div>
                    <div className={DashStyles.trCardDetails}>
                      <div className={DashStyles.trCardDetailSub}>
                        <h5 className={DashStyles.trUserName}>Gopika Krishnan</h5>
                        <h6 className={DashStyles.trUserDetails}>25 Yrs ,5'7"</h6>
                      </div>
                      <div
                        className={DashStyles.LikeButton}
                        onClick={() => likedProfile()}
                      >
                        <HeartStraight
                          size={20}
                          weight={liked ? "fill" : "light"}
                          className={`${DashStyles.likedHeartBefore} ${
                            liked ? DashStyles.likedHeart : ""
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={DashStyles.trCard}>
                    <div className={DashStyles.trCardImg}>
                      <img
                        src={image}
                        alt="Crad imgae"
                        className={DashStyles.cardImage}
                      />
                    </div>
                    <div className={DashStyles.trCardDetails}>
                      <div className={DashStyles.trCardDetailSub}>
                        <h5 className={DashStyles.trUserName}>Gopika Krishnan</h5>
                        <h6 className={DashStyles.trUserDetails}>25 Yrs ,5'7"</h6>
                      </div>
                      <div
                        className={DashStyles.LikeButton}
                        onClick={() => likedProfile()}
                      >
                        <HeartStraight
                          size={20}
                          weight={liked ? "fill" : "light"}
                          className={`${DashStyles.likedHeartBefore} ${
                            liked ? DashStyles.likedHeart : ""
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={DashStyles.trCard}>
                    <div className={DashStyles.trCardImg}>
                      <img
                        src={image}
                        alt="Crad imgae"
                        className={DashStyles.cardImage}
                      />
                    </div>
                    <div className={DashStyles.trCardDetails}>
                      <div className={DashStyles.trCardDetailSub}>
                        <h5 className={DashStyles.trUserName}>Gopika Krishnan</h5>
                        <h6 className={DashStyles.trUserDetails}>25 Yrs ,5'7"</h6>
                      </div>
                      <div
                        className={DashStyles.LikeButton}
                        onClick={() => likedProfile()}
                      >
                        <HeartStraight
                          size={20}
                          weight={liked ? "fill" : "light"}
                          className={`${DashStyles.likedHeartBefore} ${
                            liked ? DashStyles.likedHeart : ""
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                  {/* <div className={DashStyles.trCard}>
                      <div className={DashStyles.trCardImg}>
                        <img
                          src={image}
                          alt="Crad imgae"
                          className={DashStyles.cardImage}
                        />
                      </div>
                      <div className={DashStyles.trCardDetails}>
                        <div className={DashStyles.trCardDetailSub}>
                          <h5 className={DashStyles.trUserName}>Gopika Krishnan</h5>
                          <h6 className={DashStyles.trUserDetails}>25 Yrs ,5'7"</h6>
                        </div>
                        <div
                          className={DashStyles.LikeButton}
                          onClick={() => likedProfile()}
                        >
                          <HeartStraight
                            size={20}
                            weight={liked ? "fill" : "light"}
                            className={`${DashStyles.likedHeartBefore} ${
                              liked ? DashStyles.likedHeart : ""
                            }`}
                          />
                        </div>
                      </div>
                    </div> */}
                  <div className={DashStyles.trCard}>
                    <div className={DashStyles.trCardImg}>
                      <img
                        src={image}
                        alt="Crad imgae"
                        className={DashStyles.cardImage}
                      />
                    </div>
                    <div className={DashStyles.trCardDetails}>
                      <div className={DashStyles.trCardDetailSub}>
                        <h5 className={DashStyles.trUserName}>Gopika Krishnan</h5>
                        <h6 className={DashStyles.trUserDetails}>25 Yrs ,5'7"</h6>
                      </div>
                      <div
                        className={DashStyles.LikeButton}
                        onClick={() => likedProfile()}
                      >
                        <HeartStraight
                          size={20}
                          weight={liked ? "fill" : "light"}
                          className={`${DashStyles.likedHeartBefore} ${
                            liked ? DashStyles.likedHeart : ""
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={DashStyles.SeeAll}>
                  {/* <h4 className={DashStyles.saHead}>See All</h4> */}
                  <Link to="/">
                    See All <span className={DashStyles.SpanArrow}>{">"}</span>
                  </Link>
                </div>
              </div>
             
            </div>
          </div>
          <Footer />
        </div>
      );
}

export default AllMatches