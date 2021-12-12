
import { StyleSheet, css } from 'aphrodite'
import React from 'react'
import Booked from '../components/Booked'
import LeftNav from '../components/LeftNav'


const MyBookings = () => {
    return (
        <div className={css(styles.root)}>
            <div className={css(styles.container)}>
                <LeftNav />
                <div className={css(styles.rContents)}>
                    <div className={css(styles.heading)}>My Bookings</div>
                    <Booked />
                </div>
            </div>
            
        </div>
    )
}

const styles = StyleSheet.create({
    root:{
        
    },
    container:{
        display: "flex",
        flexDirection: "row"
    },
    rContents: {
        display: "flex",
        flexDirection: "column"
    },

    heading:{
        fontSize: 36,
        fontWeight: 600,
        marginTop: 91,
        marginLeft: 51
    }
})

export default MyBookings
