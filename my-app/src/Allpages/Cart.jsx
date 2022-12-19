import React from "react";
import cartStyle from "../Styles/Cartstyle.module.css";
import CartBox from "../Allpages/CartBox";
import { CiHeart } from "react-icons/ci";
import { TbDiscount2 } from "react-icons/tb";
// import AddressDrawer from "../Components/AddressDrawer";

import { Input, InputGroup, InputLeftElement,Button ,Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,FormLabel,useDisclosure,Select,Text} from "@chakra-ui/react";

function Cart() {
  const [cartData, setCartData] = React.useState([]);
  const [cartTotal, setCartTotal] = React.useState(0);
  const [delivery, setDelivery] = React.useState(0);
const [ss,setss]=React.useState("block");
  async function GetData() {
    console.log("haka");
    try {
      let res = await fetch(`http://localhost:3004/cart`);
      res = await res.json();
      setCartData(res);
    } catch (error) {
      console.log(error);
    }
  }

  function total() {
    let totalPrice = 0;
    for (let i = 0; i < cartData.length; i++) {
      totalPrice = totalPrice + cartData[i].price;
    }
    setCartTotal(totalPrice);
  }

  React.useEffect(() => {
    GetData();
  }, [cartData]);

  React.useEffect(() => {
    total();
  }, [cartData]);

  React.useEffect(() => {
    if (cartTotal == 0) {
      setDelivery(0);
    } else {
      setDelivery(149);
    }
  }, [cartTotal]);

  console.log(cartTotal);
  return (
    <div className={cartStyle.main}>
      <div className={cartStyle.left}>
        <div className={cartStyle.leftTop}>
          <span>
            <h1>{cartData.length} Item in your Cart</h1>
          </span>
          <span className={cartStyle.SaveForLater}>
            <div>
              <CiHeart size={"25px"} color="#10847e" />
            </div>

            <p>Saved for later</p>
          </span>
        </div>
        {cartData.map((e) => (
          <CartBox
            key={e.id}
            id={e.id}
            img={e.img[0]}
            title={e.title}
            price={e.price}
            GetData={GetData}
          />
        ))}
      </div>
      {/* right side */}
      <div className={cartStyle.right}>
        {/* Right top */}
        <div className={cartStyle.rightTop}>
          <div className={cartStyle.rightTopCart}>
            Cart Total: <span>Rs.{cartTotal}</span>
          </div>
          <hr style={{ marginTop: "30px" }} />
          {/* coupons and address */}
          <div className={cartStyle.rightTopCoupon}>
            <div>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<TbDiscount2 color="#10847e" size={"25px"} />}
                />
                <Input type="tel" placeholder="Apply Coupons" />
              </InputGroup>
            </div>
            <div style={{ marginTop: "20px" }}>
              {" "}
              {/* address drawer */}
              {/* <AddressDrawer /> */}
            </div>
          </div>
        </div>

        {/* right bottom Bil summary */}
        <div className={cartStyle.rightBottom}>
          <div className={cartStyle.rightBottomHeading}>
            <h1>Bill Summary</h1>
          </div>
          <div className={cartStyle.rightBottomCartValue}>
            <div>
              <span>Cart Value</span>
              <span>Rs.{cartTotal}</span>
            </div>
            <div>
              <span>Delivery charges</span>
              <span>Rs.{delivery}</span>
            </div>
          </div>
          <hr style={{ marginTop: "30px" }} />
          <div className={cartStyle.rightBottomAmount}>
          <span >Amount to be paid</span>
            <span>Rs.{cartTotal + delivery}</span>
            <InitialFocus
            cartData={cartData}
            GetData={()=>GetData()}
            setCartData={setCartData}
            />
          </div>
        </div>
      </div>
      {/* right end */}
    </div>
  );
}

export default Cart;




function InitialFocus({cartData,GetData,setCartData}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
  const [s,sets]=React.useState(false);
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null);
console.log(cartData,"bbb");
    async function deleteData(id) {
        // console.log(id);
        try {
          let res = await fetch(`http://localhost:3004/cart/${id}`, {
            method: "Delete",
            headers: {
              "Content-Type": "application/json",
            },
          });
          res = await res.json();
          console.log(res);
        } catch (error) {
          console.log(error);
        }
        
      }





  const handlesubmit=(e)=>{
e.preventDefault();
console.log("he");

for(let j=0;j<=cartData.length-1;j++){
    deleteData(cartData[j].id)
}
setCartData([]);
sets(true);
GetData()
  }







































    return (s?<Text color={"green"}>Order Placed</Text>:
      <>
      
        <Button onClick={onOpen}>Place Order</Button>
        {/* <Button ml={4} ref={finalRef}>
          I'll receive focus on close
        </Button> */}
  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create your account</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
                <form onSubmit={handlesubmit}>
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input ref={initialRef} placeholder='First name' />
              {/* </FormControl>
  
              <FormControl mt={4} isRequired> */}
                <FormLabel>Address</FormLabel>
                <Input placeholder='Address' />
              {/* </FormControl>
              <FormControl isRequired> */}
                <FormLabel>Pincode</FormLabel>
                <Input ref={initialRef} placeholder='Pincode' />
              {/* </FormControl>
              <FormControl isRequired> */}
                <FormLabel>Payment Method</FormLabel>
                <Select>
              <option value="qty1">Cash On Delivery</option>
              <option value="qty2">Credit Card</option>
              <option value="qty3">Debit Card</option>
            </Select>
              </FormControl>
              <Button type={"submit"} colorScheme='blue' mr={3}>
                Place Order
              </Button>
              <Button onClick={onClose}>Cancel</Button>
              </form>
            
            </ModalBody>
  
            <ModalFooter>
             
            </ModalFooter>
          </ModalContent>
        </Modal>
        </>
    )
  }