


import firstt from "../components/images/Image.svg"
import vectorr from "../components/images/Vector.svg"
import firstImg from "../components/images/Item - 1.svg"
import sectImg from "../components/images/Item - 2.svg"
import thirrdtImg from "../components/images/books.svg"
import fourrthhImg from "../components/images/fourth.svg"
import fifthhImg from "../components/images/fifthh.svg"
import lasttImg from "../components/images/last.svg"


const Sectionn = () => {

    return(

       <div className="bg-image-2 py-5 my-5"> 
       <div className="my-3 py-4"> </div>

       <div className="bg-text text-center py-3"> 

       <h2> Featured Projects</h2>
       <img className="mx-2 py-2" src={vectorr} alt=""/>
       </div>
      
            <div className="text-center py-3"> 
        <img className="mx-2 py-2" width={339} src={firstImg} alt=""/> 
        <img className="mx-2 py-2" width={339} src={sectImg} alt=""/>
        <img className="mx-2 py-2" width={339} src={thirrdtImg} alt=""/>
    
        </div>  
       
            <div className="text-center"> 
        <img className="mx-2 py-2" width={339} src={fourrthhImg} alt=""/> 
        <img className="mx-2 py-2" width={339} src={fifthhImg} alt=""/>
        <img className="mx-2 py-2" width={339} src={lasttImg} alt=""/>
        <div className="my-5 py-5"> </div>
        <div className=" py-3 my-4"> </div>
        

        </div>  
        </div>
        




      
        
      
   

        


        
        
        
    
        
    
    )
}

export default Sectionn