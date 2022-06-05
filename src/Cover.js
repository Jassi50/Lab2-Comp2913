export default function Cover(props) {
    let h3Style = { textAlign: "right" }
    return (
        <div>
            <img src={props.coverImg} />
            <div>1. {props.track1}</div>
            <div>2. {props.track2}</div>
            <div>3. {props.track3}</div>
            <div>4. {props.track4}</div>
            <h2 style={h3Style}>Select an Album</h2>
        </div>
    );
}