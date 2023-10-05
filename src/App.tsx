import { useEffect } from "react";
import { Prop } from "./components/props";
import { get } from "./services/api.service";
import { Card } from "./components/Card";


export default function App() {
  
  
  useEffect(() => {
    const onMount = async() => {
      
      const result = await get(url + 'character');
      const result2 = await get(url + 'location');
      console.log(result);
      console.log(result2);
    }
    onMount();
  }, [])
  
  return (
    <>
      <Prop name= 'Saulo'/>
    
    
    </>
  )
}
