import React from 'react'

const Map = () => {
  return (
    <div style = {{width:'500px', height:'70vh'}}>
     <iframe 
     title='Google Maps'
     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31715.321483669373!2d3.6927540999999997!3d6.4689743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e6!4m0!4m0!5e0!3m2!1sen!2sng!4v1735165896666!5m2!1sen!2sng" 
      width="500"
       height="590"
        style={ {border:0}} 
        allowfullscreen="" 
        aria-hidden='false' 
        referrerpolicy="no-referrer-when-downgrade"
        tabIndex='0'
        >
     </iframe>
    </div>
  )
}
export default Map;