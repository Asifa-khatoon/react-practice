import icon1 from "../components/images/Icon-circle.svg"
import icon2 from "../components/images/Icon-circle (2).svg"
import icon3 from "../components/images/Icon-circle (3).svg"
import icon4 from "../components/images/Icon-circle (4).svg"

const Footer = () => {

    return (


       <div className="main-footer-D">
        



    <div class="container text-white">
        <div class="row py-5 text-center">
            <div class=" col-md-3 mb-3 py-4">
                <p className="fw-bold "> COMPANY </p>
                <ul class="nav flex-column py-4">
                    <li class="nav-item mb-2"> Portfolio </li>
                    <li class="nav-item mb-2"> Our clients </li>
                    <li class="nav-item mb-2">Careers </li>
                   
                </ul>
            </div>

            <div class=" col-md-3 mb-3 py-4">
                <p className="fw-bold"> offices </p>
                <ul class="nav flex-column py-4">
                    <li class="nav-item mb-2">345 Main St. San Francisco, CA </li>
                    <li class="nav-item mb-2">103 N. 13th Street. Seattle, WA</li>
                   
                </ul>
            </div>
            <div class=" col-md-3 mb-3 py-4">
                <p className="fw-bold">CONTACT</p>
                <ul class="nav flex-column py-4 ">
                    <li class="nav-item mb-2">+81 555 489 902 </li>
                    <li class="nav-item mb-2">info@themes.com</li>
                   
                </ul>
            </div>

            <div class="col-md-3 mb-3 py-4">
                <p className="fw-bold"> ABOUT  </p>
                <ul class="nav flex-column py-4">
                    <li class="nav-item mb-2">Log in to your account </li>
                    <li class="nav-item mb-2">Support</li>
                   
                                </ul>
            </div>
        </div>

        <div className="text-center">
            <img src={icon1} alt=""/>  <img src={icon2} alt=""/>  <img src={icon3} alt=""/>  <img src={icon4} alt=""/>


            <div className="my-4 text-white py-4">
                <p>All rights reserved. © 2020.</p>
                <span className="mx-5">Privacy & terms</span>  <span> Terms of Service</span>
            </div>

        </div>
    </div>
</div>




       




    )

}
export default Footer

