interface ClockProps {
    timeNumber: number
    timeID: string
}

function ClockNumber (props: ClockProps) {

    return (
        <div id={props.timeID} className="clock-number">
            {props.timeNumber}
        </div>
    )
}

export default ClockNumber