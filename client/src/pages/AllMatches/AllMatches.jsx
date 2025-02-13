import React, { useEffect, useState, useMemo } from "react";
import DashStyles from "../Dashboard/dashboard.module.css";
import { HeartStraight, SlidersHorizontal, Pencil, X } from "phosphor-react";
import { Link, useNavigate } from "react-router-dom";
import image from "../../assets/free-photo-of-couple-in-green-grass-field.jpeg";
import Nav from "../../component/Navbar/Nav";
import Footer from "../../component/Footer/Footer";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import PaginationAdmin from "../Admin/components/PaginationAdmin";

function AllMatches() {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.id);
  console.log("hey kitty", userId);
  const [getLike, setGetLike] = useState([]);
  const [liked, setLiked] = useState({}); //state to control the likes
  const [isOpen, setIsOpen] = useState(false); //state to control the  opening and closing of filter
  const [activeTab, setActiveTab] = useState("top"); //state to control the active tab on header
  const [allMatches, setAllMatches] = useState([]); // Stores all matches
  const [filteredMatches, setFilteredMatches] = useState([]); // Stores filtered matches
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [filtersApplied, setFiltersApplied] = useState(false);
  const currentData = filtersApplied ? filteredMatches : allMatches;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const paginatedData = currentData.slice(indexOfFirstItem, indexOfLastItem);

  const [filters, setFilters] = useState({
    age: "",
    height: "",
    maritalStatus: "",
    motherTongue: "",
    physicalStatus: "",
    occupation: "",
    annualIncome: "",
    education: "",
  });

  // const lastIndex = currentPage * itemsPerPage;
  // const indexOfFirstItem = lastIndex - itemsPerPage;

  // const showItems = useMemo(() => {
  //   const data =
  //     filteredMatches.length > 0 ? filteredMatches : "No Matches Available";
  //   return data.slice(indexOfFirstItem, lastIndex);
  // }, [allMatches, filteredMatches, currentPage]);

  const navigate = useNavigate();

  // const[showHamburger,setShowHamburger]=useState(true);
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

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScrollHam = () => {
      document.querySelectorAll(`.${DashStyles.FilterIcon}`).forEach((el) => {
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
  const getAllMatches = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/v1/user/getUserById/${userId}`
      );
      let matchedProfiles = response.data.user;
      console.log("response", response.data.user);
      // let matchedLength=matchedProfiles.length;
      // console.log("length",matchedLength);
      setAllMatches(matchedProfiles);
    } catch (error) {
      console.log("Error", error);
    }
  };
  useEffect(() => {
    if (userId) {
      getAllMatches();
    }
  }, [userId]);
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };
  const applyFilters = () => {
    const isFiltersApplied = Object.values(filters).some((val) => val !== "");
    const filteredData = allMatches.filter((item) => {
      const numericHeight = item.height
        ? parseInt(item.height.replace(/[^0-9]/g, ""), 10)
        : null;
      const [minHeight, maxHeight] = filters.height
        ? filters.height.split("-").map((num) => parseInt(num, 10))
        : [null, null];
      const [minAge, maxAge] = filters.age
        ? filters.age.split("-").map((num) => parseInt(num, 10))
        : [null, null];

      return (
        (filters.age === "" || (item.age >= minAge && item.age <= maxAge)) &&
        (filters.height === "" ||
          (numericHeight >= minHeight && numericHeight <= maxHeight)) &&
        (filters.maritalStatus === "" ||
          item.maritalStatus?.toLowerCase() ===
            filters.maritalStatus?.toLowerCase()) &&
        (filters.occupation === "" ||
          item.occupation?.toLowerCase() ===
            filters.occupation?.toLowerCase()) &&
        (filters.annualIncome === "" ||
          item.annualIncome?.toLowerCase() ===
            filters.annualIncome?.toLowerCase()) &&
        (filters.education === "" ||
          item.education?.toLowerCase() === filters.education?.toLowerCase())
      );
    });

    setCurrentPage(1);
    setFilteredMatches(filteredData);
    setFiltersApplied(isFiltersApplied);
  };

  const resetFilters = () => {
    setFilters({
      age: "",
      height: "",
      maritalStatus: "",
      occupation: "",
      annualIncome: "",
      education: "",
    });
    setFilteredMatches(allMatches);
    setFiltersApplied(false);
    setCurrentPage(1);
  };
  const profileView = async (id) => {
    if (!id) {
      console.log("Error fetching id");
      return;
    }
    try {
      const response = await axios.get(
        `http://localhost:8000/api/v1/user/usercarddetails/${id}`
      );
      console.log("single user data", response);
      navigate(`/mainuser/${id}`);
    } catch (error) {
      console.log("Error fetching the data", error);
    }
  };
  return (
    <div className={DashStyles.mainContainer}>
      <Nav />
      <div className={DashStyles.PageSelection}>
        <Link
          to={`/toprecommendations/${userId}`}
          className={`${DashStyles.heading} ${
            activeTab === "all" ? DashStyles.tabSelected : ""
          }`}
          onClick={() => setActiveTab("all")}
        >
          Top Recommendations
        </Link>

        <Link
          to={`/allmatches/${userId}`}
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
              <select
                name="age"
                className={DashStyles.bdSelect}
                onChange={handleFilterChange}
                value={filters.age}
              >
                <option>Age</option>
                <option value="18-25">18-25</option>
                <option value="26-35">26-35</option>
                <option value="36-45">36-45</option>
                <option value="46-55">46-55</option>
                <option value="56-65">56-65</option>
              </select>
              <select
                name="height"
                className={DashStyles.bdSelect}
                onChange={handleFilterChange}
                value={filters.height}
              >
                <option>Height</option>
                <option value="135-145">135-145</option>
                <option value="145-155">145-155</option>
                <option value="155-165">155-165</option>
                <option value="165-175">165-175</option>
                <option value="175-185">175-185</option>
                <option value="185-195">185-195</option>
                <option value="195-200">195-200</option>
              </select>

              <select
                name="maritalStatus"
                className={DashStyles.bdSelect}
                onChange={handleFilterChange}
                value={filters.maritalStatus}
              >
                <option>Marital Status</option>
                <option value="Never Married">Never Married</option>
                <option value="Widowed">Widowed</option>
                <option value="Divorced">Divorced</option>
                <option value="Awaiting Divorce">Awaiting Divorce</option>
              </select>
              {/* <select name="motherTongue" className={DashStyles.bdSelect} onChange={handleFilterChange} value={filters.motherTongue}>
                <option >Mother Tongue</option>
                <option value="malayalam">Malayalam</option>
                <option value="english">English</option>
                <option value="hindi">Hindi</option>
              </select> */}

              {/* <select name="physicalStatus" className={DashStyles.bdSelect}onChange={handleFilterChange} value={filters.physicalStatus}>
                <option >Physical Status</option>
                <option value="none">None</option>
                <option value="physicallyChallenged">
                  Physically Challenged
                </option>
              </select> */}
            </div>
          </div>

          <div className={DashStyles.ProfessionalDetailsMainDiv}>
            <h3 className={DashStyles.ProfessionalDetailsHead}>
              Professional Details
            </h3>
            <div className={DashStyles.ProfessionalDetailsDiv}>
              <select
                name="occupation"
                className={DashStyles.pdSelect}
                onChange={handleFilterChange}
                value={filters.occupation}
              >
                <option>Ocuupation</option>
                <option value="doctor">Doctor</option>
                <option value="nurse">Nurse</option>
                <option value="pharmacist">Pharmacist</option>
                <option value="dentist">Dentist</option>
                <option value="paramedic">Paramedic</option>
                <option value="physiotherapist">Physiotherapist</option>
                <option value="care_worker">Care Worker</option>

                <option value="software_engineer">Software Engineer</option>
                <option value="civil_engineer">Civil Engineer</option>
                <option value="mechanical_engineer">Mechanical Engineer</option>
                <option value="electrical_engineer">Electrical Engineer</option>
                <option value="data_scientist">Data Scientist</option>
                <option value="it_consultant">IT Consultant</option>

                <option value="teacher">Teacher</option>
                <option value="lecturer">University Lecturer</option>
                <option value="teaching_assistant">Teaching Assistant</option>

                <option value="accountant">Accountant</option>
                <option value="banker">Banker</option>
                <option value="financial_analyst">Financial Analyst</option>
                <option value="solicitor">Solicitor</option>
                <option value="barrister">Barrister</option>

                <option value="electrician">Electrician</option>
                <option value="plumber">Plumber</option>
                <option value="carpenter">Carpenter</option>
                <option value="mechanic">Mechanic</option>

                <option value="police_officer">Police Officer</option>
                <option value="firefighter">Firefighter</option>
                <option value="armed_forces">Armed Forces</option>
                <option value="social_worker">Social Worker</option>

                <option value="chef">Chef</option>
                <option value="hotel_manager">Hotel Manager</option>
                <option value="retail_manager">Retail Manager</option>
                <option value="customer_service">
                  Customer Service Representative
                </option>

                <option value="journalist">Journalist</option>
                <option value="graphic_designer">Graphic Designer</option>
                <option value="actor">Actor</option>
                <option value="musician">Musician</option>

                <option value="truck_driver">Truck Driver</option>
                <option value="delivery_driver">Delivery Driver</option>
                <option value="airline_pilot">Airline Pilot</option>

                <option value="self_employed">Self-Employed</option>
                <option value="unemployed">Unemployed</option>
                <option value="student">Student</option>
                <option value="retired">Retired</option>
                <option value="others">Others</option>
              </select>
              <select
                name="annualIncome"
                className={DashStyles.pdSelect}
                onChange={handleFilterChange}
                value={filters.annualIncome}
              >
                <option>Annual Income</option>
                <option value="under_15000">Under £15,000</option>
                <option value="15000_25000">£15,000 - £25,000</option>
                <option value="25000_35000">£25,000 - £35,000</option>
                <option value="35000_50000">£35,000 - £50,000</option>
                <option value="50000_75000">£50,000 - £75,000</option>
                <option value="75000_100000">£75,000 - £100,000</option>
                <option value="100000_150000">£100,000 - £150,000</option>
                <option value="150000_250000">£150,000 - £250,000</option>
                <option value="over_250000">Over £250,000</option>
              </select>
              <select
                name="education"
                className={DashStyles.pdSelect}
                onChange={handleFilterChange}
                value={filters.education}
              >
                <option>Education</option>
                <option value="below_10">Below 10th</option>
                <option value="10th">10th (SSLC/Matriculation)</option>
                <option value="12th_science">12th - Science</option>
                <option value="12th_humanities">12th - Humanities</option>
                <option value="12th_commerce">12th - Commerce</option>
                <option value="diploma">Diploma</option>
                <option value="bsc">BSc (Bachelor of Science)</option>
                <option value="ba">BA (Bachelor of Arts)</option>
                <option value="bcom">BCom (Bachelor of Commerce)</option>
                <option value="btech">BTech (Bachelor of Technology)</option>
                <option value="be">BE (Bachelor of Engineering)</option>
                <option value="bba">
                  BBA (Bachelor of Business Administration)
                </option>
                <option value="bca">
                  BCA (Bachelor of Computer Applications)
                </option>
                <option value="llb">LLB (Bachelor of Law)</option>
                <option value="mbbs">
                  MBBS (Bachelor of Medicine & Surgery)
                </option>
                <option value="bpharm">BPharm (Bachelor of Pharmacy)</option>
                <option value="bds">BDS (Bachelor of Dental Surgery)</option>
                <option value="msc">MSc (Master of Science)</option>
                <option value="ma">MA (Master of Arts)</option>
                <option value="mcom">MCom (Master of Commerce)</option>
                <option value="mtech">MTech (Master of Technology)</option>
                <option value="me">ME (Master of Engineering)</option>
                <option value="mba">
                  MBA (Master of Business Administration)
                </option>
                <option value="mca">
                  MCA (Master of Computer Applications)
                </option>
                <option value="llm">LLM (Master of Law)</option>
                <option value="md">MD (Doctor of Medicine)</option>
                <option value="ms">MS (Master of Surgery)</option>
                <option value="mphil">MPhil (Master of Philosophy)</option>
                <option value="phd">PhD (Doctorate)</option>
              </select>
            </div>
          </div>

          {/* <div className={DashStyles.LocationDetailsMainDiv}>
            <div className={DashStyles.textBox}>
              <h6 className={DashStyles.textBoxHead}>Location Details</h6>
              <h6 className={DashStyles.textBoxPara}>Nearby Profiles</h6>
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
              <h6 className={DashStyles.textBoxPara}>Mutual Hobbies</h6>
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
              <h6 className={DashStyles.textBoxSubPara}>Eating Habits</h6>
            </div>

            <div className={DashStyles.penIconDiv}>
              <Pencil size={16} weight="duotone" />
            </div>
          </div> */}
          <div className={DashStyles.FilterDivButtonsMain}>
            <button
              className={DashStyles.FilterDivButtonOne}
              onClick={applyFilters}
            >
              Apply
            </button>
            <button
              className={DashStyles.FilterDivButtonOne}
              onClick={resetFilters}
            >
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
                <X
                  size={20}
                  weight="bold"
                  className={DashStyles.FilterCloseIcon}
                />
              ) : (
                <SlidersHorizontal
                  size={25}
                  weight="duotone"
                  className={DashStyles.FilterIcon}
                />
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
                  <select
                    name="age"
                    className={DashStyles.bdSelect}
                    value={filters.age}
                    onChange={handleFilterChange}
                  >
                    <option>Age</option>
                    <option value="18-25">18-25</option>
                    <option value="26-35">26-35</option>
                    <option value="36-45">36-45</option>
                    <option value="46-55">46-55</option>
                    <option value="56-65">56-65</option>
                  </select>
                  <select
                    name="height"
                    className={DashStyles.bdSelect}
                    value={filters.height}
                    onChange={handleFilterChange}
                  >
                    <option>Height</option>
                    <option value="135-145">135-145</option>
                    <option value="145-155">145-155</option>
                    <option value="155-165">155-165</option>
                    <option value="165-175">165-175</option>
                    <option value="175-185">175-185</option>
                    <option value="185-195">185-195</option>
                    <option value="195-200">195-200</option>
                  </select>

                  <select
                    name="maritalStatus"
                    className={DashStyles.bdSelect}
                    onChange={handleFilterChange}
                    value={filters.maritalStatus}
                  >
                    <option>Marital Status</option>
                    <option value="Never Married">Never Married</option>
                    <option value="Widowed">Widowed</option>
                    <option value="Divorced">Divorced</option>
                    <option value="Awaiting Divorce">Awaiting Divorce</option>
                  </select>


                </div>
              </div>

              <div className={DashStyles.ProfessionalDetailsMainDiv}>
                <h3 className={DashStyles.ProfessionalDetailsHead}>
                  Professional Details
                </h3>
                <div className={DashStyles.ProfessionalDetailsDiv}>
                  <select name="occupation" className={DashStyles.pdSelect} value={filters.occupation} onChange={handleFilterChange}>
                    <option>Ocuupation</option>
                    <option value="doctor">Doctor</option>
                    <option value="nurse">Nurse</option>
                    <option value="pharmacist">Pharmacist</option>
                    <option value="dentist">Dentist</option>
                    <option value="paramedic">Paramedic</option>
                    <option value="physiotherapist">Physiotherapist</option>
                    <option value="care_worker">Care Worker</option>

                    <option value="software_engineer">Software Engineer</option>
                    <option value="civil_engineer">Civil Engineer</option>
                    <option value="mechanical_engineer">
                      Mechanical Engineer
                    </option>
                    <option value="electrical_engineer">
                      Electrical Engineer
                    </option>
                    <option value="data_scientist">Data Scientist</option>
                    <option value="it_consultant">IT Consultant</option>

                    <option value="teacher">Teacher</option>
                    <option value="lecturer">University Lecturer</option>
                    <option value="teaching_assistant">
                      Teaching Assistant
                    </option>

                    <option value="accountant">Accountant</option>
                    <option value="banker">Banker</option>
                    <option value="financial_analyst">Financial Analyst</option>
                    <option value="solicitor">Solicitor</option>
                    <option value="barrister">Barrister</option>

                    <option value="electrician">Electrician</option>
                    <option value="plumber">Plumber</option>
                    <option value="carpenter">Carpenter</option>
                    <option value="mechanic">Mechanic</option>

                    <option value="police_officer">Police Officer</option>
                    <option value="firefighter">Firefighter</option>
                    <option value="armed_forces">Armed Forces</option>
                    <option value="social_worker">Social Worker</option>

                    <option value="chef">Chef</option>
                    <option value="hotel_manager">Hotel Manager</option>
                    <option value="retail_manager">Retail Manager</option>
                    <option value="customer_service">
                      Customer Service Representative
                    </option>

                    <option value="journalist">Journalist</option>
                    <option value="graphic_designer">Graphic Designer</option>
                    <option value="actor">Actor</option>
                    <option value="musician">Musician</option>

                    <option value="truck_driver">Truck Driver</option>
                    <option value="delivery_driver">Delivery Driver</option>
                    <option value="airline_pilot">Airline Pilot</option>

                    <option value="self_employed">Self-Employed</option>
                    <option value="unemployed">Unemployed</option>
                    <option value="student">Student</option>
                    <option value="retired">Retired</option>
                    <option value="others">Others</option>
                  </select>
                  <select name="annualIncome" className={DashStyles.pdSelect} value={filters.annualIncome} onChange={handleFilterChange}>
                    <option>Annual Income</option>
                    <option value="15000_25000">£15,000 - £25,000</option>
                    <option value="25000_35000">£25,000 - £35,000</option>
                    <option value="35000_50000">£35,000 - £50,000</option>
                    <option value="50000_75000">£50,000 - £75,000</option>
                    <option value="75000_100000">£75,000 - £100,000</option>
                    <option value="100000_150000">£100,000 - £150,000</option>
                    <option value="150000_250000">£150,000 - £250,000</option>
                    <option value="over_250000">Over £250,000</option>
                  </select>
                  <select name="education" className={DashStyles.pdSelect} value={filters.education} onChange={handleFilterChange}>
                    <option>Education</option>
                    <option value="below_10">Below 10th</option>
                    <option value="10th">10th (SSLC/Matriculation)</option>
                    <option value="12th_science">12th - Science</option>
                    <option value="12th_humanities">12th - Humanities</option>
                    <option value="12th_commerce">12th - Commerce</option>
                    <option value="diploma">Diploma</option>
                    <option value="bsc">BSc (Bachelor of Science)</option>
                    <option value="ba">BA (Bachelor of Arts)</option>
                    <option value="bcom">BCom (Bachelor of Commerce)</option>
                    <option value="btech">
                      BTech (Bachelor of Technology)
                    </option>
                    <option value="be">BE (Bachelor of Engineering)</option>
                    <option value="bba">
                      BBA (Bachelor of Business Administration)
                    </option>
                    <option value="bca">
                      BCA (Bachelor of Computer Applications)
                    </option>
                    <option value="llb">LLB (Bachelor of Law)</option>
                    <option value="mbbs">
                      MBBS (Bachelor of Medicine & Surgery)
                    </option>
                    <option value="bpharm">
                      BPharm (Bachelor of Pharmacy)
                    </option>
                    <option value="bds">
                      BDS (Bachelor of Dental Surgery)
                    </option>
                    <option value="msc">MSc (Master of Science)</option>
                    <option value="ma">MA (Master of Arts)</option>
                    <option value="mcom">MCom (Master of Commerce)</option>
                    <option value="mtech">MTech (Master of Technology)</option>
                    <option value="me">ME (Master of Engineering)</option>
                    <option value="mba">
                      MBA (Master of Business Administration)
                    </option>
                    <option value="mca">
                      MCA (Master of Computer Applications)
                    </option>
                    <option value="llm">LLM (Master of Law)</option>
                    <option value="md">MD (Doctor of Medicine)</option>
                    <option value="ms">MS (Master of Surgery)</option>
                    <option value="mphil">MPhil (Master of Philosophy)</option>
                    <option value="phd">PhD (Doctorate)</option>
                  </select>
                </div>
              </div>

              <div className={DashStyles.FilterDivButtonsMain}>
                <button className={DashStyles.FilterDivButtonOne} onClick={applyFilters}>Apply</button>
                <button className={DashStyles.FilterDivButtonOne} onClick={resetFilters}>Reset</button>
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

          {/*  start */}
          <div className={DashStyles.TopRecommendation}>
            <div className={DashStyles.trHeading}>
              <h2 className={DashStyles.TrHead}>
                All Matches({allMatches.length})
              </h2>
            </div>
            <div className={DashStyles.trContentDisplay}>
              {paginatedData.length > 0 ? (
                paginatedData.map((item, index) => (
                  <div className={DashStyles.trCard} key={index}>
                    <div
                      className={DashStyles.trCardImg}
                      onClick={() => profileView(item._id)}
                    >
                      <img
                        src={
                          item.profilePicture
                            ? `http://localhost:8000${item.profilePicture}`
                            : " "
                        }
                        alt="CardImage"
                        className={DashStyles.cardImage}
                      />
                    </div>
                    <div className={DashStyles.trCardDetails}>
                      <div
                        className={DashStyles.trCardDetailSub}
                        onClick={() => profileView(item._id)}
                      >
                        <h5 className={DashStyles.trUserName}>
                          {item.firstName}
                        </h5>
                        <h6 className={DashStyles.trUserDetails}>
                          {`${item.age} Yrs, ${item.height}`}
                        </h6>
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
                ))
              ) : (
                <p>No matches found</p>
              )}
            </div>

            <PaginationAdmin
              itemsPerPage={itemsPerPage}
              userData={currentData}
              setCurrentPage={setCurrentPage}
            />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default AllMatches;
