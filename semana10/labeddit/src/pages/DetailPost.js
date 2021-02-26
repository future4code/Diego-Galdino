import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Spinner, Text, useToast } from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai"
import { useParams } from "react-router-dom"
import Header from "../components/Header"
import PostCard from "../components/PostCard"
import useForm from "../hooks/useForm"
import useProtectedPage from "../hooks/useProtectedPage"
import { baseURL, config } from "../paraneters"


const DetailPost = () => {
    const [form, onChange, clear] = useForm({ text: "" })
    const pathParams = useParams()
    const [post, setPost] = useState({})
    const toast = useToast()
    const [isLoading, setIsLoading] = useState(false)


    useProtectedPage()
    useEffect(()=>{
        getPost()
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const postComment = async (event) => {
        event.preventDefault()
        try {
            await axios.post(`${baseURL}/posts/${pathParams.id}/comment`, form, config)
            // console.log(response.data)
            toast({
                title: "Comment published.",
                description: "Your Comment was published",
                status: "success",
                duration: 5000,
                isClosable: true,
            })
            clear()
            getPost()
        } catch (error) {
            console.log(error)
        }
    }

    const putVoteComment = async (postId, commentId, value) => {
        try {
            await axios.put(`${baseURL}/posts/${postId}/comment/${commentId}/vote`, { direction: value }, config)
            // console.log(response.data)
            getPost()
        } catch (error) {
            console.log(error)
        }
    }
    const putVote = async (postId, value) => {
        try {
            await axios.put(`${baseURL}/posts/${postId}/vote`, { direction: value }, config)
            // console.log(response.data)
            getPost()
        } catch (error) {
            console.log(error)
        }
    }

    const getPost = async () => {
        setIsLoading(true)
        try {
            const response = await axios.get(`${baseURL}/posts/${pathParams.id}`, config)
            // console.log(response.data.post)
            setPost(response.data.post)
            setIsLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    const showComments = post.comments && post.comments.sort((a, b) => {
        return b.createdAt - a.createdAt
    }).map((comment) => {
        return (
            <Box
                m={5}
                w="90%"
                p={6}
                borderWidth={1}
                borderRadius={9}
                maxWidth="700px"
                boxShadow="5px 5px 5px rgba(0,0,0,0.05)"

            >
                <Flex color="grey">
                    <Text   fontSize="x-small">{new Date(comment.createdAt).toLocaleDateString()}</Text>
                    <Text ml={1} fontSize="x-small">{new Date(comment.createdAt).getHours()}:{new Date(comment.createdAt).getMinutes()}</Text>
                </Flex>
                <Flex mt={2}>
                    <Flex alignItems="center">
                        <Box p={1}
                            // onClick={() => putVoteComment(pathParams.id, comment.id, -1)}
                            onClick={() => {
                                comment.userVoteDirection===0?putVoteComment(pathParams.id, comment.id, -1):putVoteComment(pathParams.id, comment.id, 0)
                            }}
                            _hover={{
                                bg: "teal.100",
                            }}
                            borderRadius="5px"
                        >
                            <AiOutlineDislike size="20px"
                                color={comment.userVoteDirection === -1 ? "red" : null}
                            />
                        </Box>
                        <Text key={comment.id} px={2}>{comment.votesCount}</Text>

                        <Box p={1}
                            // onClick={() => putVoteComment(pathParams.id, comment.id, 1)}
                            onClick={() => {
                                comment.userVoteDirection===0?putVoteComment(pathParams.id, comment.id, 1):putVoteComment(pathParams.id, comment.id, 0)
                            }}
                            _hover={{
                                bg: "teal.100",
                            }}
                            borderRadius="5px"
                        >
                            <AiOutlineLike size="20px"
                                color={comment.userVoteDirection === 1 ? "blue" : null}
                            />
                        </Box>
                    </Flex>
                    <Flex alignItems="center">
                        <Heading px={3} size="sm">{comment.username}</Heading>
                    </Flex>
                </Flex>
                <Text m={1} fontSize="xl">{comment.text}</Text>
            </Box>
        )
    })

    return (
        <>
            <Header />
            <Flex w="100%"  >
                <Flex bg="#22B8F6" w="25%" ></Flex>
                <Flex
                    m="0 auto"
                    w="50%"
                    minWidth="400px"
                    align="center"
                    justify="center"
                    direction="column"
                    mt={5}
                >
                     {isLoading ? <Spinner
                        mb={10}
                        thickness="6px"
                        speed="0.75s"
                        emptyColor="gray.200"
                        color="teal.500"
                        size="xl"
                    /> :
                    <PostCard
                        post={post}
                        putVote={putVote}
                        clickDetail={true}
                        keyClickDetail={post.id}
                    />}

                    <Flex
                        w="90%"
                        p={6}
                        borderWidth={1}
                        borderRadius={9}
                        maxWidth="700px"
                        boxShadow="5px 5px 5px rgba(0,0,0,0.05)"
                    >

                        <Flex
                            w="100%"
                            direction="column">
                            <form onSubmit={postComment} >
                                <FormControl >
                                    <FormLabel>Your comment</FormLabel>
                                    <Input value={form.text} name={"text"} onChange={onChange} type="text" variant="flushed" placeholder="Enter your comment" isRequired />
                                </FormControl>

                                <Button mt="20px" bg="teal" size="lg" w="full" type="submit">Comment</Button>
                            </form>

                        </Flex>
                    </Flex>

                    {showComments}
                </Flex>
                <Flex bg="#82E6B2" w="25%"></Flex>
            </Flex>
        </>
    )
}
export default DetailPost