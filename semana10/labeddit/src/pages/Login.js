

import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Link, useToast } from "@chakra-ui/react";
import { goTo } from "../routes/Coordinator";
import { useHistory } from "react-router-dom";
import useForm from "../hooks/useForm";
import axios from "axios";
import { baseURL } from "../paraneters";
import useUnProtectedPage from "../hooks/useUnProtectedPage";
import Header from "../components/Header";
import { getUserToken } from "../components/getUserToken";

const Login = (props) => {
    const [form, onChange, clear] = useForm({ email: "", password: "" })
    const toast = useToast()


    const history = useHistory()

    useUnProtectedPage()

    const login = async (event) => {
        event.preventDefault()
        try {
            const response = await axios.post(`${baseURL}/login`, form)           
            
            // console.log(getUserToken(response.data.token))
            localStorage.setItem("token", response.data.token)
            localStorage.setItem("user", getUserToken(response.data.token))
            toast({
                title: "Account accepted.",
                description: "Logging into your account.",
                status: "success",
                duration: 5000,
                isClosable: true,
            })
            goTo(history, "/posts", "")
            clear()
            window.location.reload()
        } catch (error) {
            toast({
                title: "An error occurred.",
                description: "Unable to log into your user account.",
                status: "error",
                duration: 9000,
                isClosable: true,
            })
        }
    }

    return (
        <>
            {props.visibleLogin==="login"?false:<Header />}
            <Flex
                justify="center"
                align="center"
                h="90vh" w="100%" p={5}
                direction="column">
                <Box borderWidth={2}
                    p={5}
                    borderRadius={5}
                    maxWidth="500px"
                >

                    <Heading>Sign in to Your account</Heading>
                    <form onSubmit={login} >
                        <FormControl mt="20px">
                            <FormLabel>Email adress</FormLabel>
                            <Input value={form.email} name={"email"} onChange={onChange} type="email" variant="outline" placeholder="Enter your email address" isRequired />
                        </FormControl>
                        <FormControl mt="10px">
                            <FormLabel>Password</FormLabel>
                            <Input value={form.password} name={"password"} onChange={onChange} type="password" variant="outline" placeholder="Enter your password" isRequired />
                            <Link onClick={() => goTo(history, "/signup", "")} color="grey" display="block" textAlign="right" >Create account</Link>
                        </FormControl>

                        <Button mt="20px" bg="teal" size="lg" w="full" type="submit" > Sign in</Button>
                    </form>
                </Box>
            </Flex>
        </>
    )
}
export default Login