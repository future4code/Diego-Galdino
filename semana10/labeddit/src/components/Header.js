import React, { useEffect, useState } from "react";

import { Button, Flex, Heading, Image, Text, useColorMode, useMediaQuery } from "@chakra-ui/react";
import { goTo } from "../routes/Coordinator";
import { useHistory } from "react-router-dom";
import { FiMoon, FiSun } from "react-icons/fi";
import logo from "../img/chat.png"
import MenuHeader from "./MenuHeader";

const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const [isLargerThan] = useMediaQuery("(min-width: 900px)")
    const history = useHistory()
    const [user,setUser]=useState([])

    useEffect(()=>{
        setUser(JSON.parse(localStorage.getItem("user")))
        // console.log(user)
    },[])

    return (
        <Flex as="header" w="100%" h="10%" justify="center" align="center" p={1} borderBottom="1px">
            <Flex w="70%" justify="space-between" align="center" >
                <Flex justify="center" align="center" >
                    <Image boxSize="50px" src={logo} />
                    <Heading px={1} ml={3} bgGradient="linear(to-l,#7BE4AC, #22B8F6)">LAB</Heading><Text fontSize="4xl">EDDIT</Text>
                    
                </Flex>
                <Flex display={isLargerThan ? "flex" : "none"} justify="center" alignItems="center">
                
                    {user!==null?<Text mx={1}>{user["username"]}</Text>:false}
                    {!localStorage.getItem("token") ?
                        <Button mx={1} colorScheme="teal" variant="outline" onClick={() => { goTo(history, "/", "") }}>Home</Button>
                        :
                        null}

                    {localStorage.getItem("token") ?
                        <Button mx={1} colorScheme="teal" variant="outline" onClick={() => { goTo(history, "/posts", "") }}>Posts</Button>
                        :
                        <Button mx={1} colorScheme="teal" variant="outline" onClick={() => { goTo(history, "/login", "") }}>Sign in</Button>
                    }

                    {localStorage.getItem("token") ?
                        <Button mx={1} colorScheme="teal" variant="outline" onClick={() => {
                            localStorage.removeItem("token")
                            localStorage.removeItem("user")
                            goTo(history, "/", "")
                        }}>Log Out</Button>
                        :
                        <Button mx={1} colorScheme="teal" variant="outline" onClick={() => { goTo(history, "/signup", "") }}>Sign Up</Button>
                    }
                    <Button border="none" mx={1} rightIcon={colorMode === 'light' ? <FiMoon /> : <FiSun />} onClick={toggleColorMode} colorScheme="teal" variant="outline">
                        {colorMode === 'light' ? "Dark" : "Light"}
                    </Button>
                </Flex>
            </Flex>
            <MenuHeader isLargerThan={isLargerThan} history={history} colorMode={colorMode} toggleColorMode={toggleColorMode} user={user}/>

        </Flex>
    );
};

export default Header;