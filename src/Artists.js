export default function Artists(props) {
    const imgStyles = { borderRadius: "50%", width: "4em" };
    const coverImg = `${props.coverImg}`
    const track1 = `${props.track1}`;
    const track2 = `${props.track2}`;
    const track3 = `${props.track3}`;
    const track4 = `${props.track4}`;
    return (
        <div>
            <img style={imgStyles} src={coverImg} alt={props.name} />
            <span>{props.name}</span>
        </div>
    );
}