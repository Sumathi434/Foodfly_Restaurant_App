import React, {useState} from 'react'
import {data} from '../data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Items() {
    const[topItems, setTopItems] = useState(data)



    //scrollbar using javascript
    const scrollHandler = (direction)=>{
      const gallery = document.getElementById("itemsGallery");
      const ScrollAmount = 500;
     
      if(direction === 'left'){
             gallery.scrollTo(
               {left:gallery.scrollLeft -ScrollAmount,
               behavior:"smooth"
               }
             )
      }else if(direction === 'right'){
       gallery.scrollTo(
         {left:gallery.scrollLeft + ScrollAmount,
         behavior:"smooth"
         }
       )
      }
     }








  return (
    <>
    <div className='topsection'>
    <div className='headSection'>
     <h1 className='itemHeading'>What's on your mind?</h1>
     </div>
    <div className="btn-items">
     <button onClick={()=>scrollHandler('left')}><FontAwesomeIcon icon={faArrowLeft} /></button>
     <button onClick={()=>scrollHandler('right')}><FontAwesomeIcon icon={faArrowRight} /></button>
    </div>
    </div>
    <div className='imageSection' id='itemsGallery'>
        {topItems.map((item)=>{
            return(
              <>
              <div className='itemGallery' key={item.id}>
                <img src={item.item_url} alt='Images'/>
              </div>
              </>
            )
        })}
    </div>
    
    </>
  )
}

export default Items