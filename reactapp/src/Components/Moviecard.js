import React from 'react'

const Moviecard = (props) => {
    let {url,rating,title,genre} =props;
  return (
    
   
       <div class="card mx-3 my-3">
  <img src={url} alt="Movie poster" style={{'width':"100%"}}/>
  <div >
 
  <div class="price" style={{'height':'90px'}}>{rating} <i class="fa-solid fa-star" style={{"color": "#ffd700"}}></i></div>
  <br/><div>{title}</div>

  <p><button className='mx-2'>{genre}</button></p>
  </div>
 <p className='mx-2' style={{'float':"right"}}> info<i class="fa-solid fa-circle-info"></i></p>
</div> 
    
  )
}

export default Moviecard
