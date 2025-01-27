import React, { useState } from "react";
import DashStyles from "./dashboard.module.css";
import {
  Pen,
  Heart,
  Gear,
  Question,
  ShieldCheck,
  HeartStraight,
} from "phosphor-react";
import { Link } from "react-router-dom";
import image from "../../assets/free-photo-of-couple-in-green-grass-field.jpeg";

function Dashboard() {
  const [liked, setLiked] = useState(false);
  const likedProfile = () => {
    setLiked(!liked);
  };
  return (
    <div>
      <div className={DashStyles.mainContainer}>
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
                  <Link to="/">Edit Profile</Link>
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
                  {/* <label >Help</label> */}
                  <select className={DashStyles.Dropdown}>
                    <option value="" disabled selected hidden>
                      Help
                    </option>
                    <option value="">
                      <Link to="/">24/7 Support</Link>
                    </option>
                    <option value="">
                      <Link to="/">FAQ</Link>
                    </option>
                  </select>
                  {/* <Link to="/">Help</Link> */}
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
          <div className={DashStyles.Container}>
            <div className={DashStyles.OuterBox}>
              <div className={DashStyles.SmallBox}></div>
              <div className={DashStyles.BigBox}></div>
            </div>

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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

