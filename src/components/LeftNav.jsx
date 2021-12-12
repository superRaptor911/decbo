import { StyleSheet,css } from 'aphrodite'
import React from 'react'
// import {ROUTES} from '../Routes';
import { NavLink } from 'react-router-dom';
import homeIcn from '../media/icons/homeIcn.png';
import tick from "../media/icons/tick.png";
import { ROUTES } from '../Routes';



const LeftNav = () => {
    return (
        <div className={css(styles.root)}>
            <div className={css(styles.leftNav)}>
          <div className={css(styles.logo)}>Decbo</div>

          <div className={css(styles.links)}>

            <NavLink to ="/dashboard" className={css(styles.navlink)} activeClassName={css(styles.active)}>
            
              {/* <img src={homeIcn} alt="dada" /> */}
              <div className={css(styles.text)}> Home </div>
            
            </NavLink>

            <NavLink to ="/dashboard" className={css(styles.navlink)} activeClassName={css(styles.active)}>
            
              {/* <img src={homeIcn} alt="dada" /> */}
              <div className={css(styles.text)}> My Bookings </div>
            
            </NavLink>
            
            <NavLink to ={ROUTES.addRoom.path} className={css(styles.navlink)} activeClassName={css(styles.active)}>
            
              {/* <img src={homeIcn} alt="dada" /> */}
              <div className={css(styles.text)}> Seller </div>
          
            </NavLink>
            
          </div>
        </div>
        </div>
    );
}

const styles = StyleSheet.create({
    leftNav: {
        marginTop: 0,
        width: 374,
        height: '100vh',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
      logo: {
        fontSize: 45,
        fontWeight: 600,
        marginTop: 36,
        marginLeft: 75,
      },
      links: {
        marginTop: 160,
        display: 'flex',
        flexDirection: 'column',
        rowGap: 33,
      },
      link: {
     
      },
      navlink:{
        textDecoration: "none",
        display: 'flex',
        alignItems: 'center',
        marginLeft: 39,
        fontSize: 34,
        fontWeight: 500,
        columnGap: 13,
        color: '#A2A7B2',
        cursor: 'pointer',
      },
      active:{
        color: "#0F8BC0"
      }
});

export default LeftNav;
