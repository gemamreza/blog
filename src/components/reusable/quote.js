export const Quote = (props) => {
  return (
    <div className='quote'>
      <hr />
      <h2 className='text-q'> Just like any other blog, this blog has dope quote too: </h2>
      <blockquote className='blockquote text-centre'>
        <p className='mb-0'> {props.text} </p>
        <footer className='blockquote-footer'>{props.author}</footer>
      </blockquote>
    </div>
  )
}