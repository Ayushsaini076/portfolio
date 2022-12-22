import React from 'react'
import './Resume.css'
import SchoolIcon from '@mui/icons-material/School';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import TerminalIcon from '@mui/icons-material/Terminal';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import HistoryIcon from '@mui/icons-material/History';

function Resume() {
    return (
        <div className="resume-container">
          <div className="resumehd">
            <h3>Resume</h3>
            <p>My formal Bio Details</p>
          </div>
          <div className="resume-parent">
            <div class="d-flex align-items-start ">
              <div
                class="nav flex-column nav-pills me-3 btn-box"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <button
                  class="nav-link active btn-styling"
                  id="v-pills-education-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-education"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-education"
                  aria-selected="true"
                >
                  <SchoolIcon/>                 
                  Education                  
                </button>
                <button
                  class="nav-link btn-styling"
                  id="v-pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-profile"
                  aria-selected="false"
                >
                  <HistoryIcon/>
                  
                  Societies and Activities
                </button>
                
                <button
                  class="nav-link btn-styling"
                  id="v-pills-messages-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-messages"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-messages"
                  aria-selected="false"
                >
                  <TerminalIcon/>
                  Programming skills
                </button>
                <button
                  class="nav-link btn-styling"
                  id="v-pills-settings-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-settings"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-settings"
                  aria-selected="false"
                >
                  <AssessmentOutlinedIcon/>
                  Projects
                </button>
                <button
                  class="nav-link btn-styling "
                  id="v-pills-Interests-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-Interests"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-Interests"
                  aria-selected="false"
                >
                  <ColorLensIcon/>
                  Hobbies and Interests
                </button>
              </div>
              <div class="tab-content" id="v-pills-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="v-pills-education"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                  tabindex="0"
                >
                  <div id="list-item-1">
                  
                  <h5>DAV Public School <span className="badge rounded-pill text-bg-warning">
                    2006-2021
                  </span> </h5>
                  
                  
                  <span>10+2 </span>
                  
                  <h5>Indian Institute of Technology,Roorkee <span className="badge rounded-pill text-bg-warning">
                    2021-2025
                  </span></h5>
                  <span>Biosciences and Bioengineering</span>
                  
                </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="v-pills-profile"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-tab"
                  tabindex="0"
                >
                   <div id="list-item-2">
                  <h5>IIT Roorkee Model United Nations <span className="badge rounded-pill text-bg-warning">
                    May 2022-present
                  </span></h5>
                  <span>Public Relations</span>
                  

                  <h5>Cinema iitr <span className="badge rounded-pill text-bg-warning">
                    May 2022-present
                  </span></h5>
                  <span>Web developer</span>
                  

                  <h5>Placement and Internship Cell <span className="badge rounded-pill time-badge text-bg-warning">
                    Jun 2022-present
                  </span></h5>
                  <span>Associate Cordinator</span>
                  

                  <h5>National Social Service <span className="badge rounded-pill text-bg-warning">
                    Aug 2022-present
                  </span></h5>
                  <span>Web developer</span>

                  <h5>Spic Macay <span className="badge rounded-pill text-bg-warning">
                    Nov 2022-present
                  </span></h5>
                  <span>Volunteer</span>
                  
                </div>
                </div>
                
                <div
                  class="tab-pane fade"
                  id="v-pills-messages"
                  role="tabpanel"
                  aria-labelledby="v-pills-messages-tab"
                  tabindex="0"
                >
                  <div id="list-item-3">
                  <h5>C++</h5>
                  <h5>Javascrip</h5>
                  <h5>HTML</h5>
                  <h5>Css</h5>
                  <h5>Bootstrap</h5>
                  <h5>React Js</h5>
                  <h5>Express</h5>
                  <h5>Node js</h5>
                  <h5>Mongoodb</h5>
                </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="v-pills-settings"
                  role="tabpanel"
                  aria-labelledby="v-pills-settings-tab"
                  tabindex="0"
                >
                  <div id="list-item-4">
                  <h5>Text-Utils</h5>
                  <span>
                    A website to check typing speed, also containing other
                    functionalities.
                  </span>
                  <h5>personal portfolio</h5>
                  <span>A website to showcase all my details and projects</span>
                  <h5>News website</h5>
                  <span>A website using APIs to show news</span>
                  <h5>Personal Notes</h5>
                  <span>A website made using MERN to keep personal notes</span>
                  <h5>Cinema Club Website</h5>
                  <span>A website to showcase what does our club do</span>
                  <h5>Social summit website</h5>
                  <span>A website to show about our annual event i.e social summit</span>
                </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="v-pills-Interests"
                  role="tabpanel"
                  aria-labelledby="v-pills-Interests-tab"
                  tabindex="0"
                >
                  <div id="list-item-5">
                  <h5>Table Tennis</h5>
                  <span>
                    I love to play table tennis with my friends in spare time
                  </span>
                  <h5>Music</h5>
                  <span>I like listening songs while doing other stuffs</span>
                </div>
                </div>
              </div>    
              
            </div>
          </div>
        </div>
      );
}

export default Resume
