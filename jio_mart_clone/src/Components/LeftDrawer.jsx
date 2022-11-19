import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
  import  Styles  from "./Styles.module.css";  

const LeftDrawer = (props) => {
    const { isOpen, onClose, btnRef } = props;
    const Navigate= useNavigate();

    const openAccount = () =>{
      Navigate(``)
    }
    const openOrder = () =>{

    }

    return  (
        <>
          
          <Drawer
            isOpen={isOpen}
            placement='left'
            onClose={onClose}
            finalFocusRef={btnRef}
            size={'xs'}
          >
            <DrawerOverlay />
            <DrawerContent >
              <DrawerCloseButton />
              <DrawerHeader className={Styles.DrawerHeader}>
                <div>
                  <div>
                    <img src="https://www.jiomart.com/msassets/images/icons/profile-sign.svg" alt="Userpic" />
                    <h4>Hello,Sign in</h4>
                  </div>
                  <div>
                    <button onClick={openAccount}>Account</button>
                    <button onClick={openOrder}>Orders</button>
                  </div>
                </div>
              </DrawerHeader>
    
              <DrawerBody p={0}>
               <div className={Styles.Drawerlist}>
                <ul>
                  <li>Home</li>
                  <li>Shop by Category</li>
                  <li>My List</li>
                  <li>JioMart Wallet</li>
                  <li>JioMart gift Store</li>
                  <li>JioMart Gift Card</li>
                  <li>GoGreen with JioMart</li>
                  <li>All Offers</li>
                </ul>
               </div>
               <div>
                <ul className={Styles.Drawerlist}>
                  <li>My Account</li>
                  <li>Need Help</li>
                  <li>About us</li>
                </ul>
               </div>
               <div className={Styles.Drawerlist}>
                <h3>CONTACT US</h3>
                <br />
                <p>WhatsApp us : <span > 70003 70003 </span><br />
                  Call Us : <span >1800 890 1222</span> <br />
                  8:00 AM to 8:00 PM, 365 days <br /> <br /> 
                  Please note that you are accessing the BETA Version of<span > www.jiomart.com </span><br />
                  Should you encounter any bugs, glitches, lack of functionality, delayed deliveries, billing errors or other problems on the beta website, please email us on <span> cs@jiomart.com</span></p>
               </div>
              </DrawerBody>
    
              <DrawerFooter className={Styles.DrawerFooter}>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </>
      )
    }
export default LeftDrawer
