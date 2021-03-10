import { Box, Button, Collapse, Divider, Flex, FormControl, FormLabel, Input, Spinner, Text, useToast } from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"
import useProtectedPage from "../hooks/useProtectedPage"
import { baseURL, config } from "../paraneters"
import { goTo } from "../routes/Coordinator"
import { useHistory } from "react-router-dom"
import PostCard from "../components/PostCard"
import PostForm from "../components/PostForm"
import useForm from "../hooks/useForm"
import Header from "../components/Header"
import { FaArrowCircleUp } from 'react-icons/fa';
import "../App.css"

const Posts = () => {
    const [posts, setPosts] = useState([])
    const [form, onChange] = useForm({ text: "" })
    const [isLoading, setIsLoading] = useState(false)
    const [isLoadingPublish, setIsLoadingPublish] = useState(false)
    const [show, setShow] = useState(false)
    const handleToggle = () => setShow(!show)
    const toast = useToast()
    const history = useHistory()
    const [showScroll, setShowScroll] = useState(false)
    useProtectedPage()

    useEffect(() => {
        getPosts()
        // showPosts()
    }, [])

    const putVote = async (postId, value) => {
        try {
            await axios.put(`${baseURL}/posts/${postId}/vote`, { direction: value }, config)
            // console.log(response.data)
            getPosts()
            // showPosts()
        } catch (error) {
            console.log(error)
        }
    }

    const getPosts = async () => {
        setIsLoading(true)
        try {
            const response = await axios.get(`${baseURL}/posts`, config)
            console.log(response.data.posts)
            setPosts(response.data.posts)
            // showPosts()
            setIsLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    const postPost = async (event, form, clear) => {

        // console.log("form", form)
        // console.log("clear", clear)
        event.preventDefault()
        setIsLoadingPublish(true)
        try {
            await axios.post(`${baseURL}/posts`, form, config)
            toast({
                title: "Post published.",
                description: "Your post was published",
                status: "success",
                duration: 5000,
                isClosable: true,
            })
            clear()
            getPosts()
            // showPosts()
            setIsLoadingPublish(false)
        } catch (error) {
            toast({
                title: "An error occurred.",
                description: "Unable to publish your post .",
                status: "error",
                duration: 9000,
                isClosable: true,
            })
        }
    }

    const goToDetailPost = (id) => {
        goTo(history, "/posts/", id)
    }

    const showMostCommented = () => {
        return (
            posts && posts.sort((a, b) => {
                return b.commentsCount - a.commentsCount
            })
                .filter((p, index) => {
                    return index < 1
                })
                .map((p) => {
                    return (
                        <Box mt={2} w="full" p={2}>
                            <Collapse startingHeight={100} in={show} >
                                <PostCard
                                    post={p}
                                    goToDetailPost={goToDetailPost}
                                    putVote={putVote}
                                    keyPostComment={p.id}
                                />
                            </Collapse>
                            <Button size="sm" onClick={handleToggle} bg="#22B8F6" variant="outline">
                                Show {show ? "Less" : "More"}
                            </Button>
                        </Box>

                    )
                })
        )

    }

    const showPosts = () => {
        return (
            posts && posts
                .sort((a, b) => {
                    return b.votesCount - a.votesCount
                })
                .filter((p, index) => {

                    const newName = p.title.toLowerCase();
                    const input = form.text.toLowerCase();
                    if (newName.includes(input)) {
                        return true
                    } else {
                        return false
                    }
                })
                .map((post) => {
                    return (
                        <PostCard
                            post={post}
                            goToDetailPost={goToDetailPost}
                            putVote={putVote}
                            isPostList={true}
                            keyPostList={post.id}
                        />
                    )
                })

        )
    }

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false)
        }
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('scroll', checkScrollTop)

    return (
        <>
            <Header />
            <Flex w="100%" >
                <Flex bg="#22B8F6" w="25%"></Flex>
                <Flex
                    m="0 auto"
                    w="50%"
                    minWidth="400px"
                    align="center"
                    direction="column"

                >
                    <Box
                        mt={5}
                        w="90%"
                        p={6}
                        borderWidth={1}
                        borderRadius={9}
                        maxWidth="700px"
                        boxShadow="5px 5px 5px rgba(0,0,0,0.05)"

                    >
                        <Text ml={2} fontSize="xl" >Most commented</Text>
                        <Flex justify="space-between">
                            {showMostCommented()}
                        </Flex>
                    </Box>
                    <PostForm
                        postPost={postPost}
                        isLoadingPublish={isLoadingPublish}
                    />

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
                            <FormControl >
                                <FormLabel fontSize="xl">Search for a topic </FormLabel>
                                <Input value={form.text} name={"text"} onChange={onChange} type="text" variant="flushed" placeholder="Search for a topic " isRequired />
                            </FormControl>
                        </Flex>
                    </Flex>
                    <Divider m={5} />

                    {isLoading ?
                        <Spinner
                            mb={10}
                            thickness="6px"
                            speed="0.75s"
                            emptyColor="gray.200"
                            color="teal.500"
                            size="xl"
                        />
                        : showPosts()}
                    <FaArrowCircleUp
                        className="scrollTop"
                        onClick={scrollTop}
                        style={{ height: 40, display: showScroll ? 'flex' : 'none' }}

                    />
                </Flex>
                <Flex bg="#82E6B2" w="25%"></Flex>
            </Flex>
        </>
    )
}
export default Posts