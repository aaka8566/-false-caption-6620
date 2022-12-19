import React from "react";
import { useParams } from "react-router-dom";
import WithSubnavigation from "../Components/Navbar";
import Fotter from "../Components/Fotter";
import {Box,Grid,GridItem,Text,Image,Button} from "@chakra-ui/react";
import Loading from "./Loading";
export default function Mensngl(){
const [data,setdata]=React.useState({});
const [loaded,setloaded]=React.useState(false);
const val=useParams();
const fetchy=async()=>{
    try{
        let res=await fetch(`http://localhost:3004/men/${val.id}`);
        let res1=await res.json();
        console.log(res1);
        setdata(res1);
        setloaded(true);
    }
    catch(er){
        console.log(er);
    }
}
const fetchy1=async()=>{
    try{
        let res=await fetch(`http://localhost:3004/cart`,{
            method:"POST",
            body:JSON.stringify(data),
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
React.useEffect(()=>{
fetchy();
},[val.id])
const handlecart=()=>{
    console.log("hel");
fetchy1();
}
// console.log(data.img[0],"a");
    return(
<>
<WithSubnavigation/>
{loaded?<Box w="90%" margin={"auto"}>
{
<>
<Text textAlign={"left"}>{data.des}</Text>
<Grid templateColumns={"repeat(3,1fr)"} gap={"10px"}>
<GridItem><Image src={data?data.img[0]:null} alt="memo"></Image></GridItem>
<GridItem><Image src={data?data.img[1]:null} alt="memo"></Image></GridItem>
<GridItem>
    <Grid templateRows={"repeat(4,1fr)"} gap={"10px"} textAlign={"left"}>
    <GridItem><Text>₹{data.price} !Inclusive of all taxes</Text></GridItem>
    <GridItem><Text>₹
4999
| Save ₹ 2500 (50.01%)</Text></GridItem>
<Text>Free shipping on all orders</Text>
<Text>Color:
Blue</Text>
<GridItem><Button onClick={handlecart} w="90%">Add to Basket</Button></GridItem>
<Button disabled>Promotion offer</Button>
 

<Text>10 days easy return policy. Learn more</Text>

<Text>Shield yourself against the cold in this dynamite lightweight bomber jacket designed in a solid fabrication, complete with full sleeves, a high collar, and a ribbed hem.</Text>
<Text>Type : Bombers</Text>
<Text>Design : Solid</Text>
<Text>Neckline : Baseball Collar</Text>
<Text>Sleeve Length : Full Sleeves</Text>
<Text>Fabric : Polyester</Text>
<Text>Closure : Zip Through</Text>
<Text>Fit : Slim</Text>

<Text>Product : Jacket </Text>
</Grid>
</GridItem>
</Grid>
</>
}
</Box>:<Loading/>}
<Fotter/>
</>
)
} ;