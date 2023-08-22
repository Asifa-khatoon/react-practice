import FstImg from "../components/images/Image.png"
import vectorr from "../components/images/Vector.svg"
import secImg from "../components/images/Image (2).png"
import thirdImg from "../components/images/Image (3).png"
import circleImg from "../components/images/Image (2).svg"
import seccImg from "../components/images/Image (4).png"
import lastImgg from "../components/images/Image (5).png"

const TheCards = () =>{

    return(

        <div>
            <div className="bg-tex py-5 container">
                <h3 className="fw-bold px-5 py-1 mx-5"> From the blog </h3>
                <img className="mx-5 px-5" src={vectorr} alt=""/>
            

            </div>

            <div className="container">
<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col f-2">
    <div class="">
    <img class="name" className="" src={FstImg} alt="logo"/>
      <div class="card-body">
     
        <h5 class="card-title">Make your team a Design driven company</h5>
       
        <p class="card-text py-3">Contrary to popular belief, Lorem Ipsum
         is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
         <div className="d-flex">
         <img src={circleImg}/>  
        <h6 class="card-title px-2">BY MIKE DAMON</h6> 
        </div>
      </div>

    </div>
  </div>
  <div class="col">
    <div class="">
    <img class="name" className="" src={ secImg} alt="logo"/>
      <div class="card-body">
        

        <h5 class="card-title">How to nurture a calm and organized work culture</h5>
        <p class="card-text py-3">There are many variations of passages of Lorem Ipsum available, but the majority have 
        suffered alteration in some form, by injected humour.</p>
        <div className="d-flex">
            <img src={seccImg} alt=""/> 
        <h6 class="card-title px-2">BY TIM NORTON</h6>
        </div>
      </div>
    </div>
  </div>
  <div class="col">
 
    <div class="">
    <img class="name" className="" src={thirdImg} alt="logo"/>
      <div class="card-body">
        <h5 class="card-title py-3">How can the architecture influence our mood</h5>
        <p class="card-text">The standard chunk of Lorem Ipsum used since the 1500s is
         reproduced below for those interested. Sections 1.10.32 and 1.10.33.</p>
         <div className="d-flex ">
            <img src={lastImgg}/> 
        <h6 class="card-title px-2">BY JESSICA JONES</h6>
        </div>
      </div>

    </div>
  </div>

</div>
</div> 




        </div>
    )
}

export default TheCards