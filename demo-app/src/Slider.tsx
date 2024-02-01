function Slider(props:any){
    return(
        <div>
            <img src={props.img}></img>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    )
}
export default Slider