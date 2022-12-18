import React from 'react';
import { Box, IconButton, useBreakpointValue ,Image,Text,Heading,Grid,Flex,GridItem,Button} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
 import Slider from 'react-slick';
import Fotter from "./Fotter"
// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
//   const [slider, setSlider] = React.useState<Slider | null>(null);
const [slider, setSlider] = React.useState(0);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });
  const [butchange,setbutcahnge]=React.useState({men:"none",women:"block",kids:"none"});
const handlebut=(cat)=>{
  let obj={
    men:"none",women:"none",kids:"none"
  };
  obj[cat]="block"
  setbutcahnge(obj);
}
console.log(butchange);
  // These are the images used in the slide
  const cards = [
    'https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Uber-HP-Desktop-HeroBanner3-14Dec2022.jpg',
    'https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Uber-HP-Desktop-HeroBanner2-14Dec2022.jpg',
    'https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Uber-HP-Desktop-HeroBanner1-14Dec2022.gif',
    'https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Uber-HP-Desktop-HeroBanner4-14Dec2022.jpg'
  ];

  return (
    <>
    <Box
      position={'relative'}
      height={'400px'}
      width={'88%'}
      overflow={'hidden'}
      margin={"auto"}
      >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        // colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        // colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Box
            key={index}
            height={'400px'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${url})`}
          />
        ))}
      </Slider>
   
    </Box>
       <Box  margin={"auto"}>
       <Image margin={"auto"} marginTop={"20px"} src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Uber-HP-Desktop-PromoStrip2-15Dec2022.gif" alt="memo"></Image>
      
     </Box>
     <Box w="90%" margin={"auto"}>
     <Heading borderBottom={"4px solid orange"} w="30%" textAlign={"left"}  as='h2' size='2xl' borderBottomWidth={"10px"}  noOfLines={1}>
    Our Benefits
    
  </Heading>
 
       <Grid templateColumns={"repeat(3,1fr)"}>
        <GridItem><Image src="https://lmsin.net/cdn-cgi/image/w=410,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-DesktopUberHP-OurBenefit1-02Dec2022.jpg" alt="memo"></Image></GridItem>
        <GridItem> <Image src="https://lmsin.net/cdn-cgi/image/w=410,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-DesktopUberHP-OurBenefit2-13Oct2022.jpg" alt="memo"></Image></GridItem>
        <GridItem> <Image src="https://lmsin.net/cdn-cgi/image/w=410,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-DesktopUberHP-OurBenefit3-13Oct2022.jpg" alt="memo"></Image></GridItem>
       </Grid>
      
     </Box>
     <Box w="90%" margin={"auto"}>
     <Heading borderBottom={"4px solid orange"} w="30%" textAlign={"left"}  as='h2' size='2xl' borderBottomWidth={"10px"}  noOfLines={1}>
    Unmissable Offers
    
  </Heading>
 
     <Grid  templateColumns={"repeat(4,1fr)"}  marginLeft={"5px"}>
        <GridItem><Image src="https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-LimitedSale-Desk-Banner1-13Dec22.jpg" alt="memo"></Image></GridItem>
        <GridItem> <Image src="https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-LimitedSale-Desk-Banner2-13Dec22.jpg" alt="memo"></Image></GridItem>
        <GridItem> <Image src="https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-LimitedSale-Desk-Banner3-15Dec22.jpg" alt="memo"></Image></GridItem>
        <GridItem> <Image src="https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-LimitedSale-Desk-Banner4-13Dec22.jpg" alt="memo"></Image></GridItem>
       </Grid>
     </Box>
     <Box w="90%" margin={"auto"}>
     <Heading borderBottom={"4px solid orange"} w="30%" textAlign={"left"}  as='h2' size='2xl' borderBottomWidth={"10px"}  noOfLines={1}>
    Winterwear Store
    
  </Heading>
 
     <Grid  templateColumns={"repeat(4,1fr)"}  marginLeft={"5px"}>
        <GridItem><Image src="https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget20-Desk-Banner1-29Nov22.jpg" alt="memo"></Image></GridItem>
        <GridItem> <Image src="https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget20-Desk-Banner2-29Nov22.jpg" alt="memo"></Image></GridItem>
        <GridItem> <Image src="https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget20-Desk-Banner3-29Nov22.jpg" alt="memo"></Image></GridItem>
        <GridItem> <Image src="https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget20-Desk-Banner4-29Nov22.jpg" alt="memo"></Image></GridItem>
       </Grid>
     </Box>
     <Box w="90%" margin={"auto"}>
     <Heading borderBottom={"4px solid orange"} w="30%" textAlign={"left"}  as='h2' size='2xl' borderBottomWidth={"10px"}  noOfLines={1}>
    Trending Offers
    
  </Heading>
 
     <Grid  templateColumns={"repeat(4,1fr)"} templateRows={"repeat(2,1fr)"}  marginLeft={"5px"}>
        <GridItem><Image src="https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidge2-Desk-Banner1-29Nov22.jpg" alt="memo"></Image></GridItem>
        <GridItem> <Image src="https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidge2-Desk-Banner2-29Nov22.jpg" alt="memo"></Image></GridItem>
        <GridItem> <Image src="https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidge2-Desk-Banner3-29Nov22.jpg" alt="memo"></Image></GridItem>
        <GridItem> <Image src="https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidge2-Desk-Banner4-29Nov22.jpg" alt="memo"></Image></GridItem>
        <GridItem><Image src="https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidge2-Desk-Banner5-29Nov22.jpg" alt="memo"></Image></GridItem>
        <GridItem> <Image src="https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidge2-Desk-Banner6-16Dec22A.jpg" alt="memo"></Image></GridItem>
        <GridItem> <Image src="https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidge2-Desk-Banner7-29Nov22.jpg" alt="memo"></Image></GridItem>
        <GridItem> <Image src="https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidge2-Desk-Banner8-29Nov22.jpg" alt="memo"></Image></GridItem>
       </Grid>
     </Box>

     <Box w="90%" margin={"auto"}>
     <Heading borderBottom={"4px solid orange"} w="30%" textAlign={"left"}  as='h2' size='2xl' borderBottomWidth={"10px"}  noOfLines={1}>
    Trending Offers
    
  </Heading>
 
     <Grid  templateColumns={"repeat(4,1fr)"} templateRows={"repeat(2,1fr)"}  marginLeft={"5px"}>
        <GridItem><Image src="https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidge2-Desk-Banner1-29Nov22.jpg" alt="memo"></Image></GridItem>
        <GridItem> <Image src="https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidge2-Desk-Banner2-29Nov22.jpg" alt="memo"></Image></GridItem>
        <GridItem> <Image src="https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidge2-Desk-Banner3-29Nov22.jpg" alt="memo"></Image></GridItem>
        <GridItem> <Image src="https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidge2-Desk-Banner4-29Nov22.jpg" alt="memo"></Image></GridItem>
        <GridItem><Image src="https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidge2-Desk-Banner5-29Nov22.jpg" alt="memo"></Image></GridItem>
        <GridItem> <Image src="https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidge2-Desk-Banner6-16Dec22A.jpg" alt="memo"></Image></GridItem>
        <GridItem> <Image src="https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidge2-Desk-Banner7-29Nov22.jpg" alt="memo"></Image></GridItem>
        <GridItem> <Image src="https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidge2-Desk-Banner8-29Nov22.jpg" alt="memo"></Image></GridItem>
       </Grid>
     </Box>
     <Box w="90%" margin={"auto"}>
     <Heading borderBottom={"4px solid orange"} w="30%" textAlign={"left"}  as='h2' size='2xl' borderBottomWidth={"10px"}  noOfLines={1}>
    Watches
    
  </Heading>
  <Image margin={"auto"} src='https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-LS-UBERHP-GiftCard-13modblock-oneBythree-A-15Dec2022.gif' alt='meo'></Image>
     </Box>

     <Box w="90%" margin={"auto"}>
     <Heading borderBottom={"4px solid orange"} w="30%" textAlign={"left"}  as='h2' size='2xl' borderBottomWidth={"10px"}  noOfLines={1}>
     Season's Hottest Deals
    
  </Heading>
 
     <Grid  templateColumns={"repeat(4,1fr)"} templateRows={"repeat(2,1fr)"}  marginLeft={"5px"}>
        <GridItem><Image src="https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Desktop-Promowidget18-Banner1-14Dec22.jpg" alt="memo"></Image></GridItem>
        <GridItem> <Image src="https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Desktop-Promowidget18-Banner2-15Dec22.jpg" alt="memo"></Image></GridItem>
        <GridItem> <Image src="https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Desktop-Promowidget18-Banner3-15Dec22.jpg" alt="memo"></Image></GridItem>
        <GridItem> <Image src="https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Desktop-Promowidget18-Banner4-14Dec22.jpg" alt="memo"></Image></GridItem>
        <GridItem><Image src="https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Desktop-Promowidget18-Banner5-15Dec22.jpg" alt="memo"></Image></GridItem>
        <GridItem> <Image src="https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Desktop-Promowidget18-Banner6-15Dec22.jpg" alt="memo"></Image></GridItem>
        <GridItem> <Image src="https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Desktop-Promowidget18-Banner7-15Dec22.jpg" alt="memo"></Image></GridItem>
        <GridItem> <Image src="https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Desktop-Promowidget18-Banner8-15Dec22.jpg" alt="memo"></Image></GridItem>
       </Grid>
     </Box>
     <Box w="90%" margin={"auto"}>
      <Grid templateColumns={"15% 80%"}>
<GridItem>
  <Grid templateRows={"repeat(3,1fr)"}> 
  <Button onClick={()=>handlebut("women")}>Women</Button>
  <Button onClick={()=>handlebut("men")}>Men</Button>
  <Button onClick={()=>handlebut("kids")}>Kids</Button>
  </Grid>
</GridItem>
<GridItem>
      
      <Grid >
        <GridItem display={butchange.women}>
          <Grid templateColumns={"repeat(4,1fr)"}>
<GridItem><Image src='https://lmsin.net/cdn-cgi/image/w=195,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Beauty-Desk-Category-Banner1-14Oct22.jpg' alt="meo"></Image></GridItem>
<GridItem><Image src='https://lmsin.net/cdn-cgi/image/w=195,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Beauty-Desk-Category-Banner2-14Oct22.jpg' alt="meo"></Image></GridItem>
<GridItem><Image src='https://lmsin.net/cdn-cgi/image/w=195,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Beauty-Desk-Category-Banner3-14Oct22.jpg' alt="meo"></Image></GridItem>
<GridItem><Image src='https://lmsin.net/cdn-cgi/image/w=195,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Beauty-Desk-Category-Banner5-14Oct22.jpg' alt="meo"></Image></GridItem>
<GridItem><Image src='https://lmsin.net/cdn-cgi/image/w=195,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Beauty-Desk-Category-Banner6-28Oct22.jpg' alt="meo"></Image></GridItem>
</Grid>
        </GridItem>
        <GridItem display={butchange.men}>
        <Grid templateColumns={"repeat(4,1fr)"}>
<GridItem><Image src='https://lmsin.net/cdn-cgi/image/w=195,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Men-Desk-Category-Banner1-14Oct22.jpg' alt="meo"></Image></GridItem>
<GridItem><Image src='https://lmsin.net/cdn-cgi/image/w=195,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Men-Desk-Category-Banner2-14Oct22.jpg' alt="meo"></Image></GridItem>
<GridItem><Image src='https://lmsin.net/cdn-cgi/image/w=195,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Men-Desk-Category-Banner3-14Oct22.jpg' alt="meo"></Image></GridItem>
<GridItem><Image src='https://lmsin.net/cdn-cgi/image/w=195,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Men-Desk-Category-Banner4-14Oct22.jpg' alt="meo"></Image></GridItem>
<GridItem><Image src='https://lmsin.net/cdn-cgi/image/w=195,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Men-Desk-Category-Banner5-14Oct22.jpg' alt="meo"></Image></GridItem>
</Grid>

        </GridItem>
        <GridItem display={butchange.kids}>

        <Grid templateColumns={"repeat(4,1fr)"}>
<GridItem><Image src='https://lmsin.net/cdn-cgi/image/w=195,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Kids-Desk-Category-Banner1-14Oct22.jpg' alt="meo"></Image></GridItem>
<GridItem><Image src='https://lmsin.net/cdn-cgi/image/w=195,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Kids-Desk-Category-Banner1-14Oct22.jpg' alt="meo"></Image></GridItem>
<GridItem><Image src='https://lmsin.net/cdn-cgi/image/w=195,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Kids-Desk-Category-Banner3-14Oct22.jpg' alt="meo"></Image></GridItem>
<GridItem><Image src='https://lmsin.net/cdn-cgi/image/w=195,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Kids-Desk-Category-Banner4-14Oct22.jpg' alt="meo"></Image></GridItem>
<GridItem><Image src='https://lmsin.net/cdn-cgi/image/w=195,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Kids-Desk-Category-Banner5-14Oct22.jpg' alt="meo"></Image></GridItem>
</Grid>
        </GridItem>
      </Grid>
      </GridItem>
      </Grid>
     </Box>
     <Box w="90%" margin={"auto"}>
   <Fotter/>
     </Box>
     </>
  );
}