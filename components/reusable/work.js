export const Work = props => {
  return (
    <div>
      <h3 className='work-title'>{props.work}</h3>
      <p className='job-title'>{props.title}<span> • </span>{props.time}</p>
      <p className='job-desc'>{props.desc}</p>
    </div>
  );
}