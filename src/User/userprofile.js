import React, { Component } from 'react';
import { TopNav } from '../LandingPage/TopNav/TopNav';
import { SubNav } from '../NavBar/SubNav/SubNav';
import { SearchBar } from '../SearchBar/SearchBar';
//import { NavBar } from '../NavBar/NavBar';
import { useAuth0 } from '@auth0/auth0-react';
import stylos from './userprofile.module.css';
import { NavLink,Link } from "react-router-dom";
import { BrowseContent } from "../LandingPage/BrowseContent/BrowseContent";
import styles from '../LandingPage/LandingPage.module.css';
import { SubNavItem } from '../NavBar/SubNav/SubNavItem/SubNavItem';

export function userprofile() {
     //const { isAuthenticated, user } = useAuth0();
      return(
        <>
        <div style={{ display: 'flex', displayDirection: 'row', maxWidth: '1800px', paddingLeft: '300px', paddingTop:'40px' }}>
          <SearchBar/><TopNav/>
        </div>
        <SubNav/>
        <br/>
        <div style={{backgroundColor: '#F5F5F5', height: '250px'}}>
          <div style={{display: 'flex', displayDirection: 'row', maxWidth: '1800px', paddingLeft: '300px'}}>

            <img src="" className={stylos.userImage}/>

            <div className={stylos.styleinfo_userinfo}>
              <ul className={stylos.styleinfo_username}>Fahim Fayaz </ul>
              <ul className={stylos.styleinfo_userlocation}>Manhattan, New York, NY </ul>
              <ul className={stylos.styleinfo_usercred}>20 Review 10 Photo </ul>
            </div>

            <div className={stylos.info_update}>
              <div style={{display: 'flex', flexDirection: 'row'}}>
                <Link>
                  <SubNavItem icon='fas fa-camera'></SubNavItem>
                  <ul>Update Profile Photo </ul>
                </Link>
              </div>
              <div style={{display: 'flex', flexDirection: 'row'}}>
                <Link>
                  <SubNavItem icon='fas fa-edit'></SubNavItem>
                  <ul>Update Your Profile </ul>
                </Link>
              </div>
            </div>
            
          </div>
        </div>

        <div className={stylos.super_container}>

          <div className={stylos.nav_menu_sidebar}>
            <div className={stylos.menu_header}>Fahim's Profile</div>
          <ul className={stylos.menu_itemlist}>
            <li className={stylos.menuitem}>Profile Overview</li>
            <li className={stylos.menuitem}>Reviews</li>
            <li className={stylos.menuitem}>Uploads</li>
            <li className={stylos.menuitem}>Events</li>
            <li className={stylos.menuitem}>Order History</li>
          </ul>
          </div>

          <div className={stylos.NotAct_panel}>
            <div className={stylos.notification_panel}>
              <div className={stylos.notification_header}>Notifications</div>
            </div>
            <div className={stylos.activity_panel}>
              <div className={stylos.activity_header}>Recent Activity</div>
            </div>
          </div>

          <div className={stylos.aboutuser_panel}>
            
            <div className={stylos.aboutuser_container}>
              <div className={stylos.about_header}>About Fahim Fayaz</div>
              <ul className={stylos.aboutdetail_header}> Location
                <li className={stylos.aboutdetail_style}>Manhattan</li>
              </ul>  
              <ul className={stylos.aboutdetail_header}> User Since
                <li className={stylos.aboutdetail_style}>September, 2019</li>
              </ul> 
              <ul className={stylos.aboutdetail_header}> About Yourself
                <li className={stylos.aboutdetail_style}>
                    A hundred days have made me older
                    Since the last time that
                    I saw your pretty face.
                    A thousand lies have made me colder
                    And I don't think I can 
                    look at this the same.
                    All the miles that separate
                    Disappear now when 
                    I'm dreamin' of your face.</li>
              </ul>   
            </div>

          </div>

        </div>

        <div className={styles.landing3}>
                        <div className={styles['font']}>
                            <p>Browse By Content</p>
                        </div>

                        <div className={styles.landing1}>
                            <BrowseContent/>
                        </div>
        </div>

        <div className={styles.landing4}>
                        <div className={styles['font']}>
                            <p>Footer</p>
                        </div>
        </div>

        {/* {isAuthenticated && (
              <>
               <h1> {user.nickname}'s profile </h1>
              </>
            )} */}
        </>
      );
  }
  export default userprofile