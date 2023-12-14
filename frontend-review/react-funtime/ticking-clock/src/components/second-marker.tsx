import styles from "../styles/clock1.module.css"

interface secondMarkerProps2 {
    secondNumber: number
    idName: string
}

function SecondMarker (props: secondMarkerProps2) {

    return (
        <div className={styles.bigNumber} id={styles[props.idName]}>
            {props.secondNumber}
        </div>
    )
}

export default SecondMarker