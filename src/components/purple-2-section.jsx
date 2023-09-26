import React from "react";
import purplelady from "./images/download__1_-removebg-preview 1.svg";

const PurpleSection = () => {
  return (
    <div>
      <div className="">
        <div className="container  bg-purple ">
          <div className="container ">
            <div className="row ">
              <div class="col-md-4 pt-5  py-4">
                <div className="d-flex"></div>
                <img width={350} className="mt-5 mx-2" src={purplelady} />
              </div>

              <div class="col-md-7 ">
                <div class="d-flex justify-content-center">
                  <div className="pt-5 pb-5">
                    <div className="d-flex">
                      <h1 class="pt-5 mt-5 font-size-50   text-colorr">
                        Exclusive Offer
                      </h1>
                    </div>
                    <p className="text-colorr">
                      Unlock the ultimate style upgrade with our exclusive{" "}
                      <br /> offer Enjoy savings of up 455 off on our latest New{" "}
                      <br />
                      arrivals
                    </p>


                    <button type="button" class="btn btn-light fw-bold fs-5 border-btnn  px-4 ">08 <p className="fs-6">  days  </p> </button>
                    <button type="button" class="btn btn-light fw-bold fs-5 border-btnn px-4 mx-3 my-2">08 <p className="fs-6">  days  </p> </button>
                    <button type="button" class="btn btn-light fw-bold fs-5 border-btnn px-4">08 <p className="fs-6">  days  </p> </button>
                   
                    <div className="">
                      <button
                        type="button"
                        class=" py-3 px-5 rounded  border shadow  fs-4  btn-purple text-white "
                      >
                        Shop Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurpleSection;
