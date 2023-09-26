import React from 'react'
import lockimg from './images/Group 4.svg'
import girlpic from './images/Group 6.svg'

const Header = () => {
  return (
    <div className='bg-color-image'>
         <div className=""> 
        

        <nav className="saction-nav container navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                   <h5 className='fw-bold text-white'> RIVO</h5>
                   
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-marg">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#"> <span className="nav-text"> <u> </u></span> <br />    </a>
                        </li>



                    </ul>
                
                  

                        <ul className="navbar-nav me-auto  mb-lg-0 py-4">
                            <li className="nav-item mx-2">
                                <a className="nav-link active px-2  text-white" aria-current="page" href="#">Home Pages

                                </a>
                            </li>

                            <li className="nav-item mx-2">
                                <a className="nav-link px-2 text-white " href="#">Blogs
                                </a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link px-2 text-white " href="#">Ecommerce
                                </a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link px-2  text-white " href="#">RTL Version </a>
                            </li>


                            <li className="nav-item mx-2">
                                <a className="nav-link px-2 text-white" href="#"> Theme docs </a>
                            </li>
                            <li className="nav-item mx-4 mt-2">
                               <img src={lockimg}/>
                            </li>

                        </ul>
                        <button type="button" class="btn  text-white border-color px-5">LOGIN</button>
                      
                    

                </div>
            </div>
          

        </nav >

       

      
    </div>
    <div className="container back-colo-2 rounded-bottom ">
        <div className="row ">
          <div class="col-md-6 pt-5  py-4">
           
            <div className="d-flex">
            
              <h1 class="pt-4 fw-bold font-size-50 text-white">
               
                Discover And <br/> Find Your Own <br/> Fasion
              </h1>
             
            </div>
            <p className='text-white'> 
            Explore Our Curated Collection Of Stylish <br/> And Acessories Taillored To Your unique <br/> Taste
            </p>
            <div className='mx-5'> 
            <button
                type="button"
                class=" py-3 px-5 shadow mx-5 text-center  btn-purple text-white px-4"
              >
                
                EXPORT NOW
               
              </button>
              </div>
          
          </div>

          <div class="col-md-6 text-center">
            <div class="d-flex justify-content-center">
           
            <div className="pt-5 pb-5">
              <img 
              width={350}
                className=""
                src={girlpic}
               
              />
</div>
            
            </div>
          </div>
        </div>

       

      
      </div>
      
    </div>
  )
}

export default Header
