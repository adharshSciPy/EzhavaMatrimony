// import React from 'react'
// import { Avatar, Button,  Typography, IconButton, Divider } from "@mui/material";
// import { Home, Notifications, Person, Chat, Phone } from "@mui/icons-material";
// import "./userprofile.css"
// import padam from "../../assets/serious-man-portrait-real-people-high-definition-grey-background-photo.jpg";
    

// function UserProfle() {
    
//   return (
//     <div className="profile-page">
//       {/* Header */}
//       <header className="header">
//         <div className="header-left">
//           <IconButton>
//             <Home />
//           </IconButton>
//           <Typography variant="h6">Matches</Typography>
//           <IconButton>
//             <Notifications />
//           </IconButton>
//         </div>
//         <IconButton>
//           <Avatar />
//         </IconButton>
//       </header>

//       {/* Matches Section */}
//       <div className="content">
//         <Typography variant="h5" className="all-matches">
//           All Matches 14/112
//         </Typography>
//         <div className="match-buttons">
//           <Button variant="outlined">Regular</Button>
//           <Button variant="outlined">Premium</Button>
//         </div>

//         {/* Profile Section */}
//         <div className="profile-section">
//           <img
//             src={padam}
//             alt="Profile"
//             className="profile-image"
//           />
//           <div className="profile-details">
//             <Typography variant="h6">Gopika Krishnan</Typography>
//             <Typography className="profile-info">25 Yrs, 5'7"</Typography>
//             <Typography className="profile-info">
//               Other Bachelor Degree in Medicine, Student
//             </Typography>
//             <Typography className="profile-info">Kerala, India</Typography>
//           </div>
//           <div className="profile-icons">
//             <IconButton color="primary">
//               <Chat />
//             </IconButton>
//             <IconButton color="primary">
//               <Phone />
//             </IconButton>
//           </div>
//         </div>

//         {/* About Section */}
//         <div className="about-section">
//           <Typography variant="h6">About Gopika Krishnan</Typography>
//           <Typography className="about-text">
//             Lorem Ipsum is simply dummy text of the printing and typesetting
//             industry. Lorem Ipsum has been the industry's standard dummy text
//             ever since the 1500s.
//           </Typography>
//           <Divider className="divider" />
//           <Typography variant="h6">Her Basic Details</Typography>
//           <ul className="basic-details">
//             <li>
//               <strong>Age:</strong> 25 Yrs, 5'7"
//             </li>
//             <li>
//               <strong>Degree:</strong> Other Bachelor Degree in Medicine,
//               Student
//             </li>
//             <li>
//               <strong>Location:</strong> Kerala, India
//             </li>
//             <li>
//               <strong>Spoken Language:</strong> Malayalam, English, Hindi
//             </li>
//             <li>
//               <strong>Profile Created By:</strong> Friend
//             </li>
//             <li>
//               <strong>Marital Status:</strong> Never Married
//             </li>
//             <li>
//               <strong>Citizenship:</strong> India
//             </li>
//           </ul>
//         </div>

//         {/* Similar Profiles Section */}
//         <div className="similar-profiles">
//           <Typography variant="h6">Similar Profiles</Typography>
//           <div className="similar-profile-list">
//             {Array(3)
//               .fill()
//               .map((_, index) => (
//                 <div key={index} className="similar-profile">
//                   <img
//                     src={padam}
//                     alt="Similar Profile"
//                     className="similar-profile-image"
//                   />
//                   <div className="similar-profile-details">
//                     <Typography variant="body1">Gopika Krishnan</Typography>
//                     <Typography className="similar-profile-info">
//                       25 Yrs, 5'7", Kerala, India
//                     </Typography>
//                   </div>
//                   <Button variant="outlined" size="small">
//                     View Profile
//                   </Button>
//                 </div>
//               ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
//     };
    

// export default UserProfle;