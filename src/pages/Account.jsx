import { StyleSheet,css } from 'aphrodite'
import React from 'react'
import LeftNav from '../components/LeftNav'

const Account = () => {
    return (
        <div className={css(styles.root)}>

            <div className={css(styles.container)}>
            <LeftNav />
            <div className={css(styles.rightC)}>
                <div className={css(styles.heading)}>Upload Your Videos and Images</div>
                <div className={css(styles.buttons)}> 
                    <button className={css(styles.button)}>Google</button>
                    <button className={css(styles.button)}>Github</button>
                </div>
            </div>
            </div>

        </div>
    )
}

const styles = StyleSheet.create({
 root:{

 },
 container: {
     display: "flex",
     flexDirection: "row",
     
 },
 heading:{
     fontSize: 34,
     fontWeight: 600,
     marginTop: 168,
     marginBottom: 30,
     marginLeft: 36
 },
 buttons:{
    marginLeft: 36,
    display: "flex",
    columnGap: 20
 },
 button:{
    width: 200,
    height: 60,
    background: "#0F8BC0",
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: 500,
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    borderRadius: 20,
    border: "none"
}

})

export default Account
