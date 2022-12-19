import {Box,Grid,GridItem,Text,Button,Input,Image, Flex} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import Shop from "./Shop.png"
export default function Fotter(){
    return (
        <>
        <Box justifyContent={"space-between"} w="100%" margin={"auto"}>
            <Grid justifyContent={"space-between"} border={"1px solid red"} templateColumns={"40% 40%"}>
                <GridItem border={"1px solid blue"}>
                <Text fontSize={"20px"} fontWeight={"bold"} textAlign={"left"}>Subscribe to our awesome emails.</Text>
                <Text color={"grey"}  textAlign={"left"}>Get our latest offers and news straight in your inbox.</Text>
                <Input marginTop={"40px"} marginLeft={"0px"} w="60%" placeholder="Please Enter an E-MAIL Address" backgroundColor={"rgb(247,248,247)"}></Input>
                <Button backgroundColor={"black"} color="white">Subscribe</Button>
                </GridItem>
                <GridItem border={"1px solid blue"}>
                <Text fontSize={"20px"} fontWeight={"bold"} textAlign={"left"}>Download our apps</Text>
                <Text color={"grey"}  textAlign={"left"}>Shop our products and offers on-the-go.</Text>
               
                <Button marginLeft={"-10%"} marginTop={"40px"} backgroundColor={"black"} color="white">Download on the App Store</Button>
                <Button marginTop={"40px"} backgroundColor={"black"} color="white">Get it on Google Play</Button>
                </GridItem>
                
            </Grid>
        </Box>
        <Box w="100%" marginTop={"30px"} >
<Grid templateColumns={"repeat(5,1fr)"} gap={"5px"}  margin={"auto"}>
    <GridItem textAlign={"left"}>
        <Text fontSize={"20px"} fontWeight={"bold"}>Women</Text>
<Link to="/men" ><Text>Tops</Text></Link>
<Link to="/women" ><Text>Ethnicwear</Text></Link>
<Link to="/men" ><Text>Winter</Text></Link>
<Link to="/men" ><Text>Sports</Text></Link>
<Link to="/men" ><Text>Casual</Text></Link>
    </GridItem>
    <GridItem textAlign={"left"}>
    <Text fontSize={"20px"} fontWeight={"bold"}>Men</Text>
    
    <Link to="/men" ><Text>Tops</Text></Link>
<Link to="/men" ><Text>Ethnicwear</Text></Link>
<Link to="/men" ><Text>Winter</Text></Link>
<Link to="/men" ><Text>Sports</Text></Link>
<Link to="/men" ><Text>Casual</Text></Link>
    </GridItem>
    <GridItem textAlign={"left"}>
    <Text fontSize={"20px"} fontWeight={"bold"}>Kids</Text>
    <Link to="/men" ><Text>Winter</Text></Link>
    <Link to="/men" ><Text>Girl's Clothing</Text></Link>
    <Link to="/men" ><Text>Boy's Clothing</Text></Link>
    <Link to="/men" ><Text>Teen Shop </Text></Link>
    <Link to="/men" ><Text>Add On's</Text></Link>
    </GridItem>
    <GridItem textAlign={"left"}>
    <Text fontSize={"20px"} fontWeight={"bold"}>About</Text>
    <Link to="/men" ><Text>About Us</Text></Link>
    <Link to="/men" ><Text>Careers</Text></Link>
    <Link to="/men" ><Text>Take a Tour</Text></Link>
    <Link to="/men" ><Text>Blog</Text></Link>
    <Link to="/men" ><Text>Store Locator</Text></Link>
    </GridItem>
    <GridItem textAlign={"left"}>
    <Text fontSize={"20px"} fontWeight={"bold"}>Help</Text>
    <Link to="/men" ><Text>Contact Us </Text></Link>
    <Link to="/men" ><Text>Shipping</Text></Link>
    <Link to="/men" ><Text>Return Process</Text></Link>
    <Link to="/men" ><Text>Return Policy</Text></Link>
    <Link to="/men" ><Text>Doubts</Text></Link>
    </GridItem>
  
</Grid>
        </Box>
        <Box>
            <Grid templateColumns={"repeat(5,1fr)"}>
                <GridItem background={"url(`https://i1.lmsin.net/website_images/static-pages/brand_exp/brand2images/prod/Sprite_icons.svg`) -270px -104px"}></GridItem>
                <GridItem></GridItem>
                <GridItem></GridItem>
                <GridItem></GridItem>
                <GridItem></GridItem>
            </Grid>
        </Box>
        <Box w="100%" border={"1px solid red"} marginTop={"20px"}>
            <Flex>
            <Image w="100px" src={Shop} alt="memo"  border={"1px solid blue"}></Image>
            <Text marginLeft={"20px"} w="25%" border={"1px solid red"} textAlign={"right"}>© 2022 RNA Intellectual Property Limited.
Terms & Conditions - Privacy Policy</Text>
</Flex>
        </Box>
        </>
    )
}