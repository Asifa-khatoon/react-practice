import React from 'react'
import imagee3 from './images/images 3.svg'
import img2 from './images/images 2.svg'
import img1 from './images/images 1.svg'
import starimg from './images/Star 1.svg'

const BlueDress = () => {
  return (
    <div>
      <div className='text-center my-5'>
        <h2 className='text-blue fw-bold'> Best Selling</h2>
        <h5 className='text-blue'> 
        Get in on the trend with our curated selection of best soling stylos
        </h5>
      </div>
    <div className='container'> 
      <div class="row row-cols-1 row-cols-md-3">
  <div class="col">
    <div class=" h-100">
      <img src={imagee3} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title fw-bold">Regal Gowns Collection</h5>
        <pre class="card-text fs-6">$50  |  5.0 <img width={15} src={starimg}/></pre>
      </div>
     
    </div>
  </div>
  <div class="col">
    <div class=" h-100">
      <img src={img2}class="card-img-top" alt="..."/>
      <div class="card-body">
      <h5 class="card-title fw-bold">Party Chic Mini Dresse</h5>
      <pre class="card-text fs-6">$50  |  4.5 <img width={15} src={starimg}/></pre>
      </div>
     
    </div>
  </div>
  <div class="col">
    <div class=" h-100">
      <img src={img1} class="card-img-top" alt="..."/>
      <div class="">
        <h5 class="card-title fw-bold">Enchanted Frocks Collection</h5>
        <pre class="card-text fs-6">$50  |  3.0 <img width={15} src={starimg}/></pre>
      </div>
     
    </div>
  </div>
  
</div>
<div className='d-flex justify-content-center m-5 '> 
<button type="button" class="btn btn-border text-center text-colorr fs-5 px-5 p-2 shadow-sm  mb-5 bg-body rounded ">see more</button>
</div>

</div>

    </div>
  )
}

export default BlueDress
