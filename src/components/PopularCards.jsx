import { StyleSheet, css } from 'aphrodite'
import React from 'react'
import Img from "../media/images/Home.png"
import Loc from "../media/icons/location_icn.png"


const PopularCards = () => {
    return (
        <div className={css(styles.root)}>
            <div className={css(styles.container)}>
                <img src={Img} alt="img" className={css(styles.img )} />
                <div className={css(styles.nameLoc)}>
                    <div className={css(styles.Name)}>Shikara Hotel</div>
                    <div className={css(styles.location)}>
                        <img src={Loc} alt="location-icon" className={css(styles.locIcn)}/>
                        <div className={css(styles.locationtxt)}>JL A72 Yogyakarta</div>
                    </div>
                </div>
                <div className={css(styles.price)}>
                    $42.72 
                    <span className={css(styles.pnight)}>/ night</span>
                </div>
            </div>
        </div>
    )
}

const styles = StyleSheet.create({
    root:{
        boxShadow: "1px 1px 1px 1px rgba(0, 0, 0, 0.25)",
        borderRadius: 20,
        maxWidth: 448

    },
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    img:{
        width: 104,
        height: 91,
        margin: 9,
        borderRadius: 20
    },
    nameLoc:{
        display: "flex",
        flexDirection: "column",
    },
    Name:{
        fontSize: 28,
        fontWeight: 500
    },
    location:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 8
    },
    locationtxt:{
        color: "#A2A7B2",
        fontSize: 15,
        fontWeight: 500,
        marginLeft: 8
    },
    price:{
        fontSize: 22,
        fontWeight: 600,
        marginRight: 8,
        marginLeft: 10
    },
    pnight:{
        fontSize: 14,
        fontWeight: 500,
        color: "#A2A7B2",
        marginTop: 16,
        marginBottom: 19
    },

})

export default PopularCards
