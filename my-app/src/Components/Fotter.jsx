import {Box,Grid,GridItem,Text,Button,Input} from "@chakra-ui/react";

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
        </>
    )
}