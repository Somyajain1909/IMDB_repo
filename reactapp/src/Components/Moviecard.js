import React from 'react'

const Moviecard = (props) => {
    let {url,duration,rating,title,genre} =props;
    
  return (
    
   
       <div class="card mx-3 my-3">
  <img src={url} alt="Movie poster" style={{'width':"100%"}}/>
  <div >
 
  <div class="price" style={{'height':'90px'}}>{rating} <i class="fa-solid fa-star" style={{"color": "#ffd700"}}></i></div>
  <br/><div>{title}</div>

  <p><button className='mx-2'>{genre}</button></p>
  <p className='mx-3' style={{'float':'right'}}><i class="fa-solid fa-play"></i>&nbsp;{duration} min</p>
  </div>
 

</div>


 
    
  )
}

export default Moviecard
