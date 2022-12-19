import React from "react";
import WithSubnavigation from "../Components/Navbar";
import Fotter from "../Components/Fotter";
import {Box,Grid,GridItem,Text,Image,Button} from "@chakra-ui/react";
import {NavLink,Link} from "react-router-dom";
export default function Men(){
    const [data,setdata]=React.useState([]);
    const [hv,sethv]=React.useState("none");
    const [hva,sethva]=React.useState(0);
    const fetchy=async()=>{
        try{
            let res=await fetch(`http://localhost:3004/men`)
            let res1=await res.json();
            console.log(res1);
            setdata(res1);
        }
        catch(er){
            console.log(er);
        }
    };
    const fetchy1=async(el)=>{
      
        try{
            let res=await fetch(`http://localhost:3004/cart`,{
                method:"POST",
                body:JSON.stringify({...el,[el.id]:Math.random()}),
                headers:{
                    "Content-Type":"application/json"
                }
            });
            let res1=await res.json();
            console.log(res1);
        }
        catch(er){
            console.log(er);
        }
    }
    const handlecart=(el)=>{
        console.log("hel");
    fetchy1(el);
    }
    const handlehover=(id)=>{
        sethva(id);
        sethv("block")
    }
    const handledown=(id)=>{
        // sethva(id)
        sethv("none")
    }
    React.useEffect(()=>{
fetchy();
    },[])
    return(
<><WithSubnavigation/>
<Box w="90%" margin={"auto"}>
    <Text fontSize={"30px"} fontWeight={"bold"} textAlign={"left"}>JACKETS</Text>
    <Grid templateColumns={"repeat(4,1fr)"} gap={"10px"} marginBottom={"20px"} marginTop={"20px"}>
{data.map((el)=>(
    <GridItem key={el.id} onMouseOver={()=>handlehover(el.id)} onMouseLeave={()=>handledown(el.id)}>
     <Link  to={`/mensngl/${el.id}`}>   <Image src={el.img[0]} alt="memo"></Image>
        <Text>{el.price}</Text>
        <Text>{el.des}</Text></Link>
        <Button onClick={()=>handlecart(el)}
        display={hva===el.id?hv:"none"} 
              fontSize={'sm'}
              fontWeight={400} cursor={"pointer"}>Add to cart</Button>
    </GridItem>
))

}
    </Grid>
</Box>

<Fotter/>
</>
    )
}