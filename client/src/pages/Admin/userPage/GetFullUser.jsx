import React, { useState ,useEffect} from 'react'
import axios from 'axios';
import Profilebox from '../components/Profilebox';
import "./userpage.css"
import Pagination from "../components/PaginationAdmin"

function GetFullUser() {
    const [userData, setUserData] = useState([]);
    const [currentPage,setCurrentPage]=useState(1)
    const [itemsPerPage,setItemsPerPage]=useState(4)

    let lastIndex=currentPage*itemsPerPage;
    let indexOfFirstItem=lastIndex-itemsPerPage;
    let showItem=userData.slice(indexOfFirstItem,lastIndex)
  console.log(userData);
  
  useEffect(() => {
    fetchUserData();
  }, []);
  const fetchUserData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/v1/user/userdetails"
      );
      setUserData(response.data.data);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };
  return (
    <div>
      <div className="user-page-main">
        <h1>All Users</h1>
        {userData.length >0 ?(
          showItem.map((user)=>{
            return <Profilebox key={user._id} data={user}/>
          })
        ):(<p>Loading...</p>)}
      </div>
      <div className="pageination-container">
          <Pagination
            userData={userData}
            itemsPerPage={itemsPerPage}
            setCurrentPage={setCurrentPage}
          />
        </div> 
    </div>
  )
}

export default GetFullUser
