import { StyleSheet, css } from 'aphrodite'
import React from 'react'
import Img from "../media/images/lodge.png"

const Booked = () => {
    return (
        <div className={css(styles.root)}>
            <img src={Img} alt="" className={css(styles.img)}/>
            <div className={css(styles.name)}>SkyLine</div>
            <div className={css(styles.price)}>$44 /day</div>
        </div>
    )
}

const styles = StyleSheet.create({
    root:{
        marginTop: 50,
        marginLeft: 50,
        height: 137,
        width: 500,
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: 20,
        background: "#FFFFFF",
        display: "flex",
        flexDirection: "row",
        columnGap: 20,
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10
    },

    img:{
        height: 100,
        width: 100,
    
    },
    name:{
        fontSize: 28,
        fontWeight: 500
    },
    price:{
        fontSize: 22,
        fontWeight: 600
    }

})

export default Booked
