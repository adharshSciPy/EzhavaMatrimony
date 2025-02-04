import React, { useEffect, useState } from "react";
import DashStyles from "./dashboard.module.css";
import {
  Pen,
  Heart,
  Gear,
  Question,
  ShieldCheck,
  Shield,
  HeartStraight,
  Headset,
  Users,
  Crown,
  User,
} from "phosphor-react";
import { Link } from "react-router-dom";
import image from "../../assets/free-photo-of-couple-in-green-grass-field.jpeg";
import Nav from "../../component/Navbar/Nav";
import Footer from "../../component/Footer/Footer"
import { useSelector ,useDispatch} from "react-redux";

  function Dashboard() {
    const dispatch = useDispatch();
    const { id } = useSelector((state) => state.user);
    console.log("hey kitty",  id);
    
    const [liked, setLiked] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    // const[showHamburger,setShowHamburger]=useState(true);

    const likedProfile = () => {
      setLiked(!liked);
    };

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    useEffect(() => {
      const handleScrollHam = () => {
        document
          .querySelectorAll(
            `.${DashStyles.ham1}, .${DashStyles.ham2}, .${DashStyles.ham3}`
          )
          .forEach((el) => {
            if (
              window.scrollY > 159 &&
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
    <div>
      <div className={DashStyles.mainContainer}>
        <Nav />
        <div className={DashStyles.SubContainer}>
          <div className={DashStyles.ProfileDiv}>
            <div className={DashStyles.ProfileCard}>
              <div className={DashStyles.ProfileImage}></div>
              <div className={DashStyles.ProfileDetails}>
                <p className={DashStyles.Greeting}>Good Morning!</p>
                <h2 className={DashStyles.UserName}>Sanju</h2>
                {/* <p className={DashStyles.UserId}>Sanju@007</p> */}
                <p className={DashStyles.MemberId}>IDB 6142154</p>
                <p className={DashStyles.MembershipStatus}>Membership: Free</p>
                <button className={DashStyles.UpgradeButton}>Upgrade</button>
              </div>
            </div>
            <div className={DashStyles.ProfileCompletion}>
              <p style={{ fontWeight: "600", fontSize: "14px" }}>
                Complete your profile
              </p>
              <p style={{ fontSize: "10px" }}>Your Profile Strength: 30%</p>
              <div className={DashStyles.LinkIcon}>
                <div className={DashStyles.Icon}>
                  <Pen
                    size={20}
                    weight="duotone"
                    className={DashStyles.penIcon}
                  />
                </div>
                <div className={DashStyles.link}>
                  <Link to="/formpage1">Edit Profile</Link>
                </div>
              </div>
              <div className={DashStyles.LinkIcon}>
                <div className={DashStyles.Icon}>
                  <Heart size={20} weight="duotone" />
                </div>
                <div className={DashStyles.link}>
                  <Link to="/">Liked Profiles</Link>
                </div>
              </div>
              <div className={DashStyles.LinkIcon}>
                <div className={DashStyles.Icon}>
                  <User size={20} weight="duotone" />
                </div>
                <div className={DashStyles.link}>
                  <div
                    className={DashStyles.DropdownSecond}
                    onClick={() =>
                      document
                        .querySelector(`.${DashStyles.DropdownMenuSecond}`)
                        .classList.toggle(DashStyles.show)
                    }
                  >
                    Profile Verification
                    <div className={DashStyles.DropdownMenuSecond}>
                      <div
                        className={DashStyles.DropdownItemSecond}
                        onClick={() =>
                          document.getElementById("fileUpload").click()
                        }
                      >
                        Upload document
                        <input
                          type="file"
                          id="fileUpload"
                          style={{ display: "none" }}
                        />
                      </div>
                      
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={DashStyles.SettingsMain}>
              <div className={DashStyles.LinkIcon}>
                <div className={DashStyles.Icon}>
                  <Gear size={20} weight="duotone" />
                </div>
                <div className={DashStyles.link}>
                  <Link to="/">Settings</Link>
                </div>
              </div>
              <div className={DashStyles.LinkIcon}>
                <div className={DashStyles.Icon}>
                  <Question size={20} weight="duotone" />
                </div>
                <div className={DashStyles.link}>
                  <div
                    className={DashStyles.HelpButton}
                    onClick={() =>
                      window.open(
                        "https://mail.google.com/mail/?view=cm&fs=1&to=support@example.com&su=Help%20Request",
                        "_blank"
                      )
                    }
                  >
                    Help
                  </div>
                </div>
              </div>

              <div className={DashStyles.LinkIcon}>
                <div className={DashStyles.Icon}>
                  <ShieldCheck size={20} weight="duotone" />
                </div>
                <div className={DashStyles.link}>
                  <Link to="/">Safe Matrimony</Link>
                </div>
              </div>
            </div>
          </div>
          {/* Profile details div for smalle screens start */}
          <div
            className={isOpen ? "overlay overlayActive" : "overlay"}
            // onClick={toggleMenu}
          >
            <div className={DashStyles.HamburgerMain}>
              {/* {showHamburger&&( */}
              <div
                className={DashStyles.Hamburger}
                onClick={() => toggleMenu()}
              >
                <div
                  className={`${DashStyles.ham1} ${
                    isOpen ? DashStyles.open1 : ""
                  }`}
                ></div>
                <div
                  className={`${DashStyles.ham2} ${
                    isOpen ? DashStyles.open2 : ""
                  }`}
                ></div>
                <div
                  className={`${DashStyles.ham3} ${
                    isOpen ? DashStyles.open3 : ""
                  }`}
                ></div>
              </div>
              {/* )} */}
              {/* profile div for smaller screens */}
              <div
                className={`${DashStyles.drawer} ${
                  isOpen ? DashStyles.drawerOpen : DashStyles.drawerClosed
                }`}
              >
                <div className={DashStyles.ProfileCard}>
                  <div className={DashStyles.ProfileImage}></div>
                  <div className={DashStyles.ProfileDetails}>
                    <p className={DashStyles.Greeting}>Good Morning!</p>
                    <h2 className={DashStyles.UserName}>Sanju</h2>
                    {/* <p className={DashStyles.UserId}>Sanju@007</p> */}
                    <p className={DashStyles.MemberId}>IDB 6142154</p>
                    <p className={DashStyles.MembershipStatus}>
                      Membership: Free
                    </p>
                    <button className={DashStyles.UpgradeButton}>
                      Upgrade
                    </button>
                  </div>
                </div>
                <div className={DashStyles.ProfileCompletion}>
                  <p style={{ fontWeight: "600", fontSize: "14px" }}>
                    Complete your profile
                  </p>
                  <p style={{ fontSize: "10px" }}>Your Profile Strength: 30%</p>
                  <div className={DashStyles.LinkIcon}>
                    <div className={DashStyles.Icon}>
                      <Pen
                        size={20}
                        weight="duotone"
                        className={DashStyles.penIcon}
                      />
                    </div>
                    <div className={DashStyles.link}>
                      <Link to="/formpage1">Edit Profile</Link>
                    </div>
                  </div>
                  <div className={DashStyles.LinkIcon}>
                    <div className={DashStyles.Icon}>
                      <Heart size={20} weight="duotone" />
                    </div>
                    <div className={DashStyles.link}>
                      <Link to="/">Liked Profiles</Link>
                    </div>
                  </div>
                  <div className={DashStyles.LinkIcon}>
                    <div className={DashStyles.Icon}>
                      <User size={20} weight="duotone" />
                    </div>
                    <div className={DashStyles.link}>
                      <div
                        className={DashStyles.DropdownSecond}
                        onClick={() => {
                          console.log("Dropdown toggled");
                          document
                            .querySelector(
                              `.${DashStyles.DropdownMenuSecondSmall}`
                            )
                            .classList.toggle(DashStyles.show2);
                        }}
                      >
                        Profile Verification
                        <div className={DashStyles.DropdownMenuSecondSmall}>
                          <div
                            className={DashStyles.DropdownItemSecond}
                            onClick={() =>
                              document.getElementById("fileUpload").click()
                            }
                          >
                            Upload document
                            <input
                              type="file"
                              id="fileUpload"
                              style={{ display: "none" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={DashStyles.SettingsMain}>
                  <div className={DashStyles.LinkIcon}>
                    <div className={DashStyles.Icon}>
                      <Gear size={20} weight="duotone" />
                    </div>
                    <div className={DashStyles.link}>
                      <Link to="/">Settings</Link>
                    </div>
                  </div>
                  <div className={DashStyles.LinkIcon}>
                    <div className={DashStyles.Icon}>
                      <Question size={20} weight="duotone" />
                    </div>
                    <div className={DashStyles.link}>
                      <div
                        className={DashStyles.HelpButton}
                        onClick={() =>
                          window.open(
                            "https://mail.google.com/mail/?view=cm&fs=1&to=support@example.com&su=Help%20Request",
                            "_blank"
                          )
                        }
                      >
                        Help
                      </div>
                    </div>
                  </div>

                  <div className={DashStyles.LinkIcon}>
                    <div className={DashStyles.Icon}>
                      <ShieldCheck size={20} weight="duotone" />
                    </div>
                    <div className={DashStyles.link}>
                      <Link to="/">Safe Matrimony</Link>
                    </div>
                  </div>
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
              <div className={DashStyles.SmallBox}></div>
              <div className={DashStyles.BigBox}></div>
            </div>

            {/* Top recommendation start */}
            <div className={DashStyles.TopRecommendation}>
              <div className={DashStyles.trHeading}>
                <h2 className={DashStyles.TrHead}>Top Recommendations</h2>
                <h4 className={DashStyles.TrContent}>
                  Members who match your partner preference
                </h4>
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
                <Link to="/toprecommendations">
                  See All <span className={DashStyles.SpanArrow}>{">"}</span>
                </Link>
              </div>
            </div>
            {/* Top recommendation end */}
            {/* All Matches start */}
            <div className={DashStyles.TopRecommendation}>
              <div className={DashStyles.trHeading}>
                <h2 className={DashStyles.TrHead}>All Matches (1309)</h2>
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
            {/* All Matches end */}

            {/* Discover Matches start */}
            <div className={DashStyles.PreferenceDiv}>
              <div className={DashStyles.trHeading}>
                <h2 className={DashStyles.TrHead}>Discover Matches</h2>
                <h4 className={DashStyles.TrContent}>
                  Explore profiles by matching your preferences
                </h4>
              </div>

              <div className={DashStyles.preferenceContent}>
                <div className={DashStyles.preferenceContentCard}>
                  <div className={DashStyles.PreferenceNameDiv}>
                    <h3 className={DashStyles.PreferenceName}>
                      Education (31)
                    </h3>
                  </div>
                </div>
                <div className={DashStyles.preferenceContentCard}>
                  <div className={DashStyles.PreferenceNameDiv}>
                    <h3 className={DashStyles.PreferenceName}>
                      Profession (31)
                    </h3>
                  </div>
                </div>
                <div className={DashStyles.preferenceContentCard}>
                  <div className={DashStyles.PreferenceNameDiv}>
                    <h3 className={DashStyles.PreferenceName}>
                      Profile With Photos (31)
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            {/* Discover Matches end */}
            {/* Nearby Matches start*/}
            <div className={DashStyles.TopRecommendation}>
              <div className={DashStyles.trHeading}>
                <h2 className={DashStyles.TrHead}>Nearby Matches (20)</h2>
                <h4 className={DashStyles.TrContent}>
                  Explore matches by location
                </h4>
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
              </div>
              <div className={DashStyles.SeeAll}>
                {/* <h4 className={DashStyles.saHead}>See All</h4> */}
                <Link to="/">
                  See All <span className={DashStyles.SpanArrow}>{">"}</span>
                </Link>
              </div>
            </div>
            {/* Nearby Matches end*/}
            {/* Explore Matrimony start */}
            <div className={DashStyles.ExploreMatrimonyDiv}>
              <div className={DashStyles.trHeading}>
                <h2 className={DashStyles.TrHead}>Explore Matrimony</h2>
              </div>
              <div className={DashStyles.ExploreContent}>
                <div className={DashStyles.ExploreContentIcons}>
                  <div className={DashStyles.ExploreIcons}>
                    <Shield size={76} color="#f0c040" weight="light" />
                    <h6 className={DashStyles.ExplorePara}>Saftey & Privacy</h6>
                  </div>
                  <div className={DashStyles.ExploreIcons}>
                    <Headset size={76} color="#f0c040" weight="light" />
                    <h6 className={DashStyles.ExplorePara}>Help & Support</h6>
                  </div>
                  <div className={DashStyles.ExploreIcons}>
                    <Users size={76} color="#f0c040" weight="light" />
                    <h6 className={DashStyles.ExplorePara}>
                      100% Matched Profiles
                    </h6>
                  </div>
                  <div className={DashStyles.ExploreIcons}>
                    <Crown size={76} color="#f0c040" weight="light" />{" "}
                    <h6 className={DashStyles.ExplorePara}>
                      Premium Membership
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            {/* Explore Matrimony end */}
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  );
}

export default Dashboard;
