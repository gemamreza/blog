export const Images = props => {
  return (
    <div className="col-md-6">
      <div className="text-center">
        <img src={props.img} height={props.height} width={props.width} alt='react' />
      </div>
    </div>
  ) 
}