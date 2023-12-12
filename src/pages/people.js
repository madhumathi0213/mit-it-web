import React from "react";
import Header from "../components/Header/Header";
import Layout from "../components/layout/Layout";
import { Box, Text, Title } from "@mantine/core";
import { styled } from "styled-components";
import { Link } from "gatsby";
import COLORS from "../theme/color";
import { teachers } from "../data/teachers.data";

const Wrapper = styled.div`
// margin-top:170px;
img {
  // filter: grayscale(100%);
},
.text {
  cursor:pointer
  :hover {
    color:green;
  }
}
.link {
  font-weight:500;
  text-decoration:none;
  margin-right:8px
}
`


const People = () => {
  return (
    <Layout>
      <Header />
      <Wrapper>
        <Box align='center' w={'100%'}>
          <Title align="center" color={COLORS.primary} size={40} weight={500} mb={4}>Our People</Title>
          <Box w={'10%'} mb={40} sx={{ borderBottom: '4px solid', borderHeight: 20, borderColor: COLORS.textPink }}></Box>
        </Box>
        <Box style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {
            teachers?.map(item => {
              return (
                <Box m={20} sx={{ cursor: 'pointer', }}>
                  <Link className="link" key={item.id} to={`/people/${item.name}`}>
                    <img
                      src={item?.image}
                      height={300}
                      width={250}
                      style={{ borderRadius: 16 }}
                      alt={item?.name}
                    />
                    <Text align="center" color='#000000' weight={500} size={20}>{item.name}</Text>
                    <Text align="center" className="text" color={COLORS.darkGray} size={16}>{`${item?.role} | ${item?.id}`}</Text>
                    <Text mb={8} align="center" color={COLORS.darkGray} size={16}>{item?.mail}</Text>
                  </Link>
                </Box>
              )
            })
          }
        </Box>
      </Wrapper>
    </Layout>
  )
}
export default People;

