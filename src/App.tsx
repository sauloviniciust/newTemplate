 import { useEffect } from "react";
import { get } from "./services/api.service";



export default function App() {
  
  
  useEffect(() => {
    const onMount = async() => {
      
      const result = await get('character');
      console.log(result);
      }
    onMount();
  }, [])
  
  return (
    <>

    
    
    </>
  )
}
