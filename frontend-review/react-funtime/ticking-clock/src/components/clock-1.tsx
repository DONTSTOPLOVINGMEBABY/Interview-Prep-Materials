import styles from "../styles/clock1.module.css"
import {useState} from "react"
import SecondMarker from "./second-marker"

function Clock1 () {

    return (
        <main id={styles.wrapClock}>
            <circle id={styles.clockFace}>
                {
                    Array.from({ length: 5 }).map((_, index) => {
                        let big = index % 5 === 0 ; 
                        return (
                            <SecondMarker secondNumber={index} bigNumber={big}/>
                        )   
                    })
                }
            </circle>
        </main>
    )
}

export default Clock1