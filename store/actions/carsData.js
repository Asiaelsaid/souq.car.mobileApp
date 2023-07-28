import { useEffect } from "react";
import { getCars } from "../../firebase/firebase";

export default function getCarsData() {
     return((dispatch)=>{
          console.log('carsData');
        const getCarsMap = async () => {
            const fetchedCars = await getCars();
            
              dispatch({type:'SET_carsData',payload:fetchedCars})
              
          };
          getCarsMap()
     })
    
}
