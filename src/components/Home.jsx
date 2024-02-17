import { Box, Button, Heading, Image } from "@chakra-ui/react";
4;
import Img from "../assets/homePageImg.png";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// https://media.istockphoto.com/id/701257934/vector/multicolor-post-it-notes.jpg?s=2048x2048&w=is&k=20&c=ZTD4rhqM3CV0S1px-LSwiBF2D6XpJkgpO5e_jA2LS5k=
const Home = () => {
  const auth = useSelector((state) => state.auth.auth);

  return (
    <>
      <Box className="bg-[#7f7b7b] flex justify-center" mt={"4rem"}>
        <Box
          className="flex items-center justify-center  w-[88%] gap-[3rem]"
          // border={"2px solid black"}
          p={"2rem"}
        >
          <Box>
            <Image src={Img} alt="Notes" />
          </Box>
          <Box width={"40%"}>
            {/*  color: "#90ee90"  */}
            <Heading as={"h1"} fontSize={"3em"} color={"white"}>
              The simplest way to keep notes
            </Heading>
            {auth ? (
              <>
                <Link to="/dashboard">
                  <Button
                    mt={"2rem"}
                    fontSize={"1.3rem"}
                    color={"black"}
                    bg={"white"}
                    p={"1.3rem 3rem"}
                    fontWeight={"bold"}
                    // variant={"outline"}
                    _hover={{ bg: "#90ee90", color: "#091e17" }}
                  >
                    Dashboard
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/signup">
                  <Button
                    mt={"2rem"}
                    fontSize={"1.3rem"}
                    color={"black"}
                    bg={"white"}
                    p={"1.3rem 3rem"}
                    // variant={"outline"}
                    _hover={{ bg: "#90ee90", color: "#091e17" }}
                  >
                    SingUp
                  </Button>
                </Link>
              </>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
