import React from "react";
import backarro from './images/arrow_back_ios_FILL0_wght400_GRAD0_opsz24 1.svg'
import forwardarrow from './images/arrow_forward_ios_FILL0_wght400_GRAD0_opsz24 1.svg'

const Feedback = () => {
  return (
    <div>
      <h1 className="text-center text-colorr fw-bold mt-5">Feedback corner</h1>

      <div>
       
       
        <div className="container my-5"> 
        <div class="row row-cols-1 row-cols-md-3">
  <div class="col my-1 ">
    <div class="card btn-border h-100 ">
     
      <div class="card-body">
        <h5 class="card-title fw-bold fs-4">  Olivia Martinez</h5>
        <p class="card-text fw-bold"> I had a great experience shopping on this website. The clothes I
            bought are fashionable and comfortable, Highly Satisfied!</p>
      </div>
    </div>
  </div>
  <div class="col my-1 ">
    <div class="btn-border h-100 card">
     
      <div class="card-body">
        <h5 class="card-title fw-bold fs-4"> Emily Wilson</h5>
        <p class="card-text fw-bold"> I had no trouble finding the perfect dress for a special
                    occasion. The detailed product descriptions and clear
                    pricing made my shopping experience enjoyable. Keep up the
                    excellent work!</p>
      </div>
    </div>
  </div>
  <div class="col my-1">
    <div class="btn-border card h-100">
    
      <div class="card-body">
        <h5 class="card-title fw-bold fs-4">  Maria.K</h5>
        <p class="card-text fw-bold">Your website is great! Easy to  navigate, and I found the perfect dress quickly. Thanks! </p>
                </div>
    </div>
  </div>
 
</div>
      </div>
      </div>
      <div className="text-center my-5"> 
      <button
                type="button"
                class=" btn-border text-center  p-2 text-white mx-2"
              >
                
               <img src={backarro}/>
                </button>
                <button
                type="button"
                class=" text-center  shadow p-2 btn-purple text-white mx-2"
              >
                
               <img src={forwardarrow}/>
                </button>
                </div>
    </div>
  );
};

export default Feedback;
