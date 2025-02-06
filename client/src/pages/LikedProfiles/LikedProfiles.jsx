import React, { useEffect, useState } from "react";
import DashStyles from "./likedprofiles.module.css";
import { HeartStraight } from "phosphor-react";
import { Link, useParams } from "react-router-dom";
import image from "../../assets/free-photo-of-couple-in-green-grass-field.jpeg";
import Nav from "../../component/Navbar/Nav";
import Footer from "../../component/Footer/Footer";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";


function LikedProfiles() {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.id);
  console.log("hey kitty", userId);
  const [liked, setLiked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("top");

  // const[showHamburger,setShowHamburger]=useState(true);
    const {id}=useParams();
    console.log("iddddd",id)
  const likedProfile = () => {
    setLiked(!liked);
  };

  //   const toggleMenu = () => {
  //     setIsOpen((prev)=>!prev);
  //   };

  //   useEffect(() => {
  //     const handleScrollHam = () => {
  //       document
  //         .querySelectorAll(
  //           `.${DashStyles.FilterIcon}`
  //         )
  //         .forEach((el) => {
  //           if (
  //             window.scrollY > 10 &&
  //             !el.classList.contains(DashStyles.open1) &&
  //             !el.classList.contains(DashStyles.open2) &&
  //             !el.classList.contains(DashStyles.open3)
  //           ) {
  //             el.style.display = "none";
  //           } else {
  //             el.style.display = "block";
  //           }
  //         });
  //     };

  //     window.addEventListener("scroll", handleScrollHam);
  //     return () => {
  //       window.removeEventListener("scroll", handleScrollHam);
  //     };
  //   }, []);
  const fetchLikedUsers = async () => {
    try {
        const response=await axios.get(`http://localhost:8000/api/v1/user/likedProfiles/${id}`)
        console.log("vishvaaa",response)
    } catch (error) {
        console.log("error",error);
        
    }
  };
  useEffect(()=>{
    fetchLikedUsers()
  },[])
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
              <h2 className={DashStyles.TrHead}>Liked Profiles</h2>
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

export default LikedProfiles;
