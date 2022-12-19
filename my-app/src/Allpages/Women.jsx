import React from "react";
import WithSubnavigation from "../Components/Navbar";
import Fotter from "../Components/Fotter";
import {Box,Grid,GridItem,Text,Image,Button} from "@chakra-ui/react"
export default function Men(){
    const [data,setdata]=React.useState([]);
    const fetchy=async()=>{
        try{
            let res=await fetch(`http://localhost:3004/women`)
            let res1=await res.json();
            console.log(res1);
            setdata(res1);
        }
        catch(er){
            console.log(er);
        }
    }
    React.useEffect(()=>{
fetchy();
    },[])
    return(
<><WithSubnavigation/>
<Box w="90%" margin={"auto"}>
    <Grid templateColumns={"repeat(4,1fr)"} gap={"10px"} marginBottom={"20px"} marginTop={"20px"}>
{data.map((el)=>(
    <GridItem>
        <Image src={el.img} alt="memo"></Image>
        <Text>{el.price}</Text>
        <Text>{el.des}</Text>
        <Button as={'a'}
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