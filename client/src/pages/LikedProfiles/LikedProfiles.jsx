import React, { useEffect, useState } from "react";
import DashStyles from "./likedprofiles.module.css";
import { HeartStraight } from "phosphor-react";
import { Link, useParams } from "react-router-dom";
import image from "../../assets/free-photo-of-couple-in-green-grass-field.jpeg";
import Nav from "../../component/Navbar/Nav";
import Footer from "../../component/Footer/Footer";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import PaginationAdmin from "../Admin/components/PaginationAdmin";

function LikedProfiles() {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.id);
  console.log("hey kitty", userId);
  const [getLike, setGetLike] = useState([]);
  const [liked, setLiked] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("top");
  const [likedProfiles, setLikedProfiles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  
  const lastIndex = currentPage * itemsPerPage;
  const indexOfFirstItem = lastIndex - itemsPerPage;
  const currentLikedProfiles = likedProfiles.slice(indexOfFirstItem, lastIndex);

  // const[showHamburger,setShowHamburger]=useState(true);
  const { id } = useParams();
  console.log("iddddd", id);
  const getLikedProfiles = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/v1/user/likedProfiles/${userId}`
      );
      console.log("liked profiles:", response.data.likedUsers);

      // Convert the array into an object for easy lookups
      const likedProfilesMap = response.data.likedUsers.reduce((acc, user) => {
        acc[user._id] = true;
        return acc;
      }, {});

      setGetLike(response.data.likedUsers); // Keep original array
      setLiked(likedProfilesMap); // Update liked state
    } catch (error) {
      console.log("Error fetching liked profiles", error);
    }
  };
  useEffect(() => {
    if (userId) {
      getLikedProfiles();
    }
  }, [userId]);
  const likedProfile = async (id) => {
    if (!userId || !id) {
      console.error("User ID or Profile ID is undefined");
      return;
    }

    // Optimistically update UI
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));

    try {
      const response = await axios.post(
        `http://localhost:8000/api/v1/user/likeProfile/${userId}`,
        { likedId: id }
      );

      console.log("Liked profile response:", response.data);

      // If successfully liked, refresh liked profiles
      getLikedProfiles();
    } catch (error) {
      console.error("Error liking profile:", error);

      // Revert state if API fails
      setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
    }
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
      const response = await axios.get(
        `http://localhost:8000/api/v1/user/likedProfiles/${id}`
      );
      console.log("vishvaaa", response.data.likedUsers);
      setLikedProfiles(response.data.likedUsers);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    fetchLikedUsers();
  }, [id]);
  return (
    <div className={DashStyles.mainContainer}>
      <Nav />
      <div className={DashStyles.PageSelection}>
        <Link
          to={`/likedprofiles/${id}`}
          className={`${DashStyles.heading} ${
            activeTab === "top" ? DashStyles.tabSelected : ""
          }`}
          onClick={() => setActiveTab("top")}
        >
          Liked Profiles
        </Link>

        {/* <Link
          to="/allmatches"
          className={`${DashStyles.heading} ${
            activeTab === "top" ? DashStyles.tabSelected : ""
          }`}
          onClick={() => setActiveTab("top")}
        >
          All Matches
        </Link> */}
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
              {currentLikedProfiles.map((item, index) => (
                <div className={DashStyles.trCard} key={index}>
                  <div className={DashStyles.trCardImg}>
                    <img
                      src={image}
                      alt="Crad imgae"
                      className={DashStyles.cardImage}
                    />
                  </div>
                  <div className={DashStyles.trCardDetails}>
                    <div className={DashStyles.trCardDetailSub}>
                      <h5 className={DashStyles.trUserName}>
                        {item.firstName}
                      </h5>
                      <h6
                        className={DashStyles.trUserDetails}
                      >{`${item.age} Yrs,${item.height}`}</h6>
                    </div>
                    <div
                      className={DashStyles.LikeButton}
                      onClick={() => likedProfile(item._id)}
                    >
                      <HeartStraight
                        size={20}
                        weight={liked[item._id] ? "fill" : "light"}
                        className={`${DashStyles.likedHeartBefore} ${
                          liked[item._id] ? DashStyles.likedHeart : ""
                        }`}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <PaginationAdmin
      itemsPerPage={itemsPerPage}
      userData={likedProfiles} // Use the full array for pagination logic
      setCurrentPage={setCurrentPage}
    />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LikedProfiles;
