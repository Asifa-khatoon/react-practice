import React from 'react'
import img4 from './images/images 4.png'
import img5 from './images/images 5.png'
import img6 from './images/images 6.png'
import starimg from './images/Star 1.svg'

const Purple = () => {
  return (
    <div>
         <div>
      <div className='text-center my-5'>
        <h2 className=' fw-bold text-colorr'> Designer Clothes for you</h2>
        <h5 className='text-colorr'> 
        Immerse Yourself in the world of lixury fashion with our maticuloushy crafted designer clothes
        </h5>
      </div>
    <div className='container'> 
      <div class="row row-cols-1 row-cols-md-3">
  <div class="col">
    <div class=" h-100 rounded">
      <img className='' src={img4} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h3 class="card-title fw-bold pt-2">Bridal Bliss Collection</h3>
        <pre class="card-text fs-5">$100  |  4.0 <img width={15} src={starimg}/></pre>
      </div>
     
    </div>
  </div>
  <div class="col">
    <div class=" h-100">
      <img src={img5}class="card-img-top" alt="..."/>
      <div class="card-body">
      <h3 class="card-title fw-bold pt-2">Bridesmaid Elegance Collection</h3>
      <pre class="card-text fs-5">$150  |  5.0 <img width={15} src={starimg}/></pre>
      </div>
     
    </div>
  </div>
  <div class="col">
    <div class=" h-100">
      <img src={img6} class="card-img-top" alt="..."/>
      <div class="">
        <h3 class="card-title fw-bold pt-2">Blossoms Collection</h3>
        <pre class="card-text fs-5">$50  |  3.0 <img width={15} src={starimg}/></pre>
      </div>
     
    </div>
  </div>
  
</div>


</div>

    </div>
      
    </div>
  )
}

export default Purple
