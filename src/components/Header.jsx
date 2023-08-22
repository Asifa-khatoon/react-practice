import logoImg from "../components/images/logo.svg"

const Header = () => {

    return (
        <div className="bg-image"> 
        <div className=""> 
        

            <nav className="saction-nav container navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img className="" src={logoImg} alt="logo"/>
                       
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


                                <l className="nav-item mx-2">
                                    <a className="nav-link px-2 text-white " href="#"> Theme docs </a>
                                </l>

                            </ul>
                            <button type="button" class="btn btn-buyy text-white">Buy now</button>
                          
                        

                    </div>
                </div>
              

            </nav >

           

          
        </div>




        <div className="my-5 py-5">
            <div className=" text-center py-5 my-5 ">
                <p className="text-white"> WE CREATE DIGITAL PRODUCTS</p> 
                <h1 className="text-white fw-bold"> Introduce OurCreative <br/> Agency.</h1>
                <button type="button" class="btn btn-buyy text-white">SEE OUR WORK</button>
            
            
            
            
            </div>


        </div>
    
      </div>
    

    )

}

export default Header