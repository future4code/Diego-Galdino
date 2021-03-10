
import useForm from "../hooks/useForm"

import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Link, Text, useToast } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../paraneters";
import { goTo } from "../routes/Coordinator";
import useUnProtectedPage from "../hooks/useUnProtectedPage";
import Header from "../components/Header";

const Signup = () => {
    const [form, onChange, clear] = useForm({ email: "", password: "", username: "" })
    const toast = useToast()

    const history = useHistory()

    useUnProtectedPage()

    const createLogin = async (event) => {
        event.preventDefault()

        try {
            await axios.post(`${baseURL}/signup`, form)
            toast({
                title: "Account created.",
                description: "We've created your account for you.",
                status: "success",
                duration: 9000,
                isClosable: true,
            })
            goTo(history, "/Login", "")
            clear()
        } catch (error) {
            toast({
                title: "An error occurred.",
                description: "Unable to create user account.",
                status: "error",
                duration: 9000,
                isClosable: true,
            })
        }
    }

    return (
        <>
            <Header />
            <Flex
                align="center"
                justify="center"
                h="90vh" w="100%" p={5}
                direction="column">
                <Box borderWidth={2}
                    p={5}
                    borderRadius={5}
                    maxWidth="500px"
                >
                    <Heading>Create your account</Heading>
                    <form onSubmit={createLogin} >
                        <FormControl mt="20px">
                            <FormLabel>Username</FormLabel>
                            <Input value={form.username} name={"username"} onChange={onChange} type="text" variant="outline" placeholder="Enter your username" isRequired />
                        </FormControl>
                        <FormControl mt="10px">
                            <FormLabel>Email adress</FormLabel>
                            <Input value={form.email} name={"email"} onChange={onChange} type="email" variant="outline" placeholder="Enter your email address" isRequired />
                        </FormControl>
                        <FormControl mt="10px">
                            <FormLabel >Password</FormLabel>
                            <Input value={form.password} name={"password"} onChange={onChange} type="password" variant="outline" placeholder="Enter your password" isRequired />
                            <Link onClick={() => goTo(history, "/login", "")} color="grey" display="block" textAlign="right" >Do you have an account?</Link>
                        </FormControl>

                        <Button mt="20px" bg="teal" size="lg" w="full" type="submit">Sign up</Button>
                    </form>
                    <Text mt="10px" fontSize="xs">By creating an account, you agree to the Terms of Service. For more information about Labeddit's privacy practices, see the Labeddit Privacy Statement. We'll occasionally send you account-related emails. </Text>

                </Box>

            </Flex>
        </>
    )
}
export default Signup