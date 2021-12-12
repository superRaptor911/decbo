import { css } from '@mui/styled-engine'
import { StyleSheet } from 'aphrodite'
import React from 'react'
import LeftNav from '../components/LeftNav'

const MyBookings = () => {
    return (
        <div className={css(styles.root)}>
            <div className={css(styles.container)}>
                <LeftNav />
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

})

export default MyBookings
