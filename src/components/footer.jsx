import React from 'react'
import lineimg from './images/Line 1.png'

const Footer = () => {
  return (
    <div className='footer-bg'>
        <div class="container">
  <footer class="py-5">
    <div class="row">
      <div class="col-6 col-md-2 mb-3">
       
        <ul class="nav flex-column text-white">
         <h2 className='fw-bold'> RIVO</h2>
         <h4> Social Media</h4>
        </ul>
      </div>

      <div class="col-6 col-md-2 mb-3">
       
        <ul class="nav flex-column text-white mt-4">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white ">SHOP</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Products</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Overview</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Pricing</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Releasers</a></li>
        </ul>
      </div>

      <div class="col-6 col-md-2 mb-3 ">
      <ul class="nav flex-column text-white mt-4">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white ">COMPANY</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">About us</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Contact</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">News</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Support</a></li>
        </ul>
      </div>

      <div class="col-md-5 offset-md-1 mt-4">
        <form>
          <h4 className='text-white'> STAY UP TO DATE </h4>
          <div class="input-group mb-3">
  <input type="text-whit " class="form-control bg-color-input" placeholder="Enter your Email" />
  <button class="input-group-text" id="basic-addon2">SUBMIT</button>
</div>
        </form>
      </div>
    </div>
    </footer>

          </div>

      
    </div>
  )
}

export default Footer
