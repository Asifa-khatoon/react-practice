
import vectorr from "../components/images/Vector.svg"
import arroww from "../components/images/Vector.png"
import locationImg from "../components/images/Location-outline.svg"


const TextSection = () => {
    return(

        <div className="main-D">
            <div className="bg-text  container py-5 ">
                <h4> 
                Careers at Inertia
                </h4>
                <img src={vectorr} alt=""/>

                <p className="py-3"> 
                Join us in our quest to bring the best 
                experiences through <br/> design and technology to the world, our most important  <br/>
                vision is to have the best work culture possible.
                </p>

            </div>

           

    


          <div class="row pb-5">
            <div class="col-md-4 d-grid justify-content-center container">
              <div className="px-4"> 
              
                    <p className="bg-text fw-bolder">Dublin  <img className="mx-5 px-5" src={locationImg} alt=""/> </p>
                <p class="font-si">Head of Marketing </p>

                 <p className=""> UX Designer</p>

                 <p className="">Senior Programmer</p>
                 <p className="">Mobile UI Designer</p>
                 <p className=""> Lead Product Designer</p>
                 <button type="button" class="btn btn-buyy text-white"> Careers At Intertia <img src={arroww} alt="" /></button>
                 </div>
                
            
            </div>

            <div class="col-md-4">
              <div class="d-flex  justify-content-center">
                <div className="px-4 "> 
               
                <p className="bg-text fw-bolder">Amsterdam <img className="mx-5 px-5" src={locationImg} alt=""/> </p>
                <p class="font-si">Head of Operations </p>

                 <p className="">Mobile Engineer</p>
                 <p className="">Animation Designer</p>

                

                
                 </div>



             
                
              </div>
            </div>
            <div class="col-md-4">
              <div class="d-flex justify-content-center">
                <div className=""> 
               
                <p className="bg-text fw-bolder">Mexico City  <img className="mx-5 px-5" src={locationImg} alt=""/></p>
                <p class="font-si"> Head of Motion Design</p>

                 <p className="">Graphics Engineer</p>
                 <p className="">Senior UI Designer</p>
                 <p className="">Backend Engineer</p>

                 

                 </div>

             
                
              </div>
            </div>
          </div>
        </div>
        






       

    )
}
export default  TextSection