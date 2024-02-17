import { Box, Button, Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { authLinLout } from "../redux/authSlice";
import axios from "axios";
// import React from "react";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth.auth);

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        "https://aquamarine-sturgeon-robe.cyclic.app/users/logout",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
    setTimeout(() => {
      dispatch(authLinLout(false));
      navigate("/");
    }, 2000);
  };
  return (
    <>
      <Box>
        <Flex p={"1.5rem"} alignItems="center" boxShadow="base" bg={"#091e17"}>
          <Box>
            <Heading as="h2" fontSize={"2rem"} color={"white"}>
              SimpleNotes
            </Heading>
          </Box>
          <Spacer />
          <Box>
            <Flex gap={4}>
              <Link to="/">
                <Button
                  fontSize={"1.3rem"}
                  color={"white"}
                  bg={"transparent"}
                  _hover={{ bg: "transparent", color: "#90ee90" }}
                >
                  Home
                </Button>
              </Link>

              {auth ? (
                <>
                  <Link to="/dashboard">
                    <Button
                      fontSize={"1.3rem"}
                      color={"white"}
                      bg={"transparent"}
                      _hover={{ bg: "transparent", color: "#90ee90" }}
                    >
                      Dashboard
                    </Button>
                  </Link>

                  <Button
                    fontSize={"1.3rem"}
                    color={"white"}
                    bg={"transparent"}
                    onClick={handleLogout}
                    _hover={{ bg: "transparent", color: "#90ee90" }}
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <Button
                      fontSize={"1.3rem"}
                      color={"white"}
                      bg={"transparent"}
                      _hover={{ bg: "transparent", color: "#90ee90" }}
                    >
                      Login
                    </Button>
                  </Link>
                  <Link to="/signup">
                    <Button
                      fontSize={"1.3rem"}
                      color={"white"}
                      bg={"transparent"}
                      _hover={{ bg: "transparent", color: "#90ee90" }}
                    >
                      SingUp
                    </Button>
                  </Link>
                </>
              )}
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;

// {auth ? (
//   <>
//     <Box>{name}</Box>
//     <Link to={"/"}>
//       <Button

//       >
//         Log out
//       </Button>
//     </Link>
//   </>
// ) : (
//   <>
//     <Link to="/signup">
//       <Button

//       >
//         Sign Up
//       </Button>
//     </Link>
//     <Link to="/login">
//       <Button

//       >
//         Login
//       </Button>
//     </Link>
//   </>
// )}
