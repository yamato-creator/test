/* eslint-disable jsx-a11y/alt-text */
import {
  Button,
  Flex,
  Image,
  Box,
  Link,
  SimpleGrid,
  Text,
  Tag,
  Container,
} from '@chakra-ui/react';
import React, { useState, useEffect } from "react";
import SaladIsometric from "./../public/Portfolio/Salad_Isometric.svg";
import { AiFillHeart } from 'react-icons/ai';
import axios from "axios";

export const Card = () => {
    const [portfolios, setPortfolios] = useState([]);
    useEffect(() => {
      axios
        .get('http://localhost:1317/portfolio/', {
          headers: {
            "Content-Type": "application/json",
          }
        })
        .then((res) => {
          setPortfolios(res.data);
          // console.log(res.data);
          console.log(res.data[0].technology[0].name);
        });
    }, []);

    if(portfolios){
    return (
        <div>
            {portfolios.technology.map((v) => {
                return (
                    <div>{v.name}</div>
                )
            })}
        </div>
    )
  }
};
export default Card;