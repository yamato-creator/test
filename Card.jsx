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
          console.log(res.data);
        });
    }, []);

    if(portfolios){
    return (
      <Container maxW='5xl' bg=''>
        <Link href="/portfolio/add">
          <Button bg='pink'>ポートフォリオ作成する</Button>
        </Link>

        <Flex w="100%" mb='3' direction="row">
          <Text ml='2' mr='' fontWeight='bold'>ポートフォリオ一覧</Text>
        </Flex>
        <SimpleGrid spacingX='0.7rem' spacingY='0.7rem' columns={[1,2,3]}  height=''>
        {portfolios.map((portfolio) =>(
        <Box  boxShadow={'lg'} borderRadius='lg'>
            <Image src={SaladIsometric.src} border='1px' borderColor='gray.100' h={'220px'} w={'full'}/>
            <Box pt='3' px='3' pb='' bg='' height='250'>
              <Box
              key={portfolio.id}
                  mb='4'
                  height='50px'
                  fontWeight='semibold'
                  as='h4'
                  lineHeight='tight'
                  noOfLines={2}
                >
                  {portfolio.title}
              </Box>
              <Box
                  mb='3'
                  lineHeight='tight'
                  noOfLines={3}
                  h="65px"
                >
                <Text fontSize='sm'>
                {portfolio.content}
                </Text>
              </Box>
              <Box display='flex' alignItems='baseline' noOfLines={2} height='16' pb='2'>
              {portfolio.technology.map((v) => {
                <Tag borderRadius='full' mb='1' mr='1' px='2' bg={"teal.100"}>
                {v.name}
                </Tag>
              })}
              </Box>
              <Box display='flex' alignItems='center'>
                  <AiFillHeart color="#E53E3E"/>
                  <Text ml='1'>34</Text>
              </Box>
            </Box>
          </Box>
          ))}
        </SimpleGrid>
      </Container>
    )
  }
};
export default Card;