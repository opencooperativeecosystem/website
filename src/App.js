import React from 'react'
import styled, {injectGlobal} from 'styled-components'
import {clearFix, transitions, normalize} from 'polished'
import fc from './imgs/fc.png'
import botc from './imgs/botc.png'

const baseStyles = () => injectGlobal`
  ${normalize()}
  @font-face {
    font-family: 'Fira Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    src: url('../fonts/FiraSans-Regular.ttf');
  }
  body {
    height: 100%;
    width: 100%;
    background-color: #393F4F;
    font-family: 'Fira Sans', sans-serif;
  }
`
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  // margin-top: 100px;
  position: relative;
  min-height: 100vh;
`

const Title = styled.h1`
  font-size: 32px;
  letter-spacing: 1px;
  color: #fff;
  margin: 0
  font-weight: 800;
  margin-bottom: 30px;
  padding-top: 100px;
`

const Description = styled.h5`
  color: #f0f0f0;
  font-weight: 500;
  line-height: 24px;
  font-size: 16px;
  letter-spacing: 1px;
  max-width: 500px;
`

const Boxes = styled.div`
  ${clearFix()};
  margin-top: 80px;
`
const Box = styled.div`
  max-width: 300px;
  float: left;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,.3);
  padding: 20px;
  cursor:pointer;
  border: 1px solid #fff;
  margin-right: 16px;
  position:relative;
  top: 0;
  ${transitions('all .1s ease-in 0s')};
  &:hover {
    top: 4px;
    border: 1px solid #4E94FF;
  }
`
const BoxTitle = styled.h2`
  margin: 0;
  font-size: 16px;
  color: #4E4543;
  letter-spacing: 1px;
  text-decoration: none;
`
const BoxDescription = styled.h5`
  font-size: 14px;
  color: #444140;
  font-weight: 400;
  margin: 0;
  margin-top: 10px;
  line-height: 22px;
  text-decoration: none;
`

const Link = styled.a`
  text-decoration: none;
`
const Footer = styled.div`
  position: absolute;
  top: 20px;
  left: 0;
  background: #3B99FC;
  color: #fff;
  height: 34px;
  border-radius: 4px;
  line-height: 34px;
  font-size: 14px;
  font-style: italic;
  font-weight: 600;
  letter-spacing: 1px;
  padding: 0 16px;
`

const FooterLink = styled.a`
  font-style: normal;
  text-align: underline;
  color: #fff;
`
const Working = styled.div`
  margin-top: 80px;
`
const WorkingTitle = styled.h3`
  font-size: 20px;
  color: #f0f0f0;
  letter-spacing: 1px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(240,240,240, .2);
  font-weight: 700;
  margin-bottom: 32px;
`
const WorkingLink = styled.a`
  background: url(${props => props.fc ? fc : botc});
  background-size: contain;
  width: 125px;
  height: 95px;
  display: inline-block;
  margin-right: 80px;
  background-repeat: no-repeat;
  &:last-of-type {
    margin-right: 0;
  }
`

const App = () => {
  baseStyles()
  return (
    <Container>
      <Title>open cooperative ecosystem</Title>
      <Description>Use Atlassian's end-to-end design language to create straightforward and beautiful experiences. Use Atlassian's end-to-end design language to create straightforward and beautiful experiences.</Description>
      <Boxes>
        <Box>
          <Link href='https://docs.opencoopecosystem.net' target='blank'>
            <BoxTitle>📖 Documentation</BoxTitle>
            <BoxDescription>Use Atlassian's end-to-end design language to create it.</BoxDescription>
          </Link>
        </Box>
        <Box>
          <Link href='https://agent.opencoopecosystem.net' target='blank'>
            <BoxTitle>🧙 Agent</BoxTitle>
            <BoxDescription>Use Atlassian's end-to-end design language to create it.</BoxDescription>
          </Link>
        </Box>
        <Box>
          <Link href='https://kit.opencoopecosystem.net' target='blank'>
            <BoxTitle>📦 Components Kit</BoxTitle>
            <BoxDescription>Use Atlassian's end-to-end design language to create it.</BoxDescription>
          </Link>
        </Box>
      </Boxes>
      <Working>
        <WorkingTitle>We're working with</WorkingTitle>
        <WorkingLink target='blank' fc href='https://fair.coop' />
        <WorkingLink target='blank' botc href='https://bankofthecommons.coop' />
      </Working>
      <Footer>
        Find us on <FooterLink target='blank' href='https://t.me/ocewelcome'>Telegram</FooterLink> and <FooterLink href='https://github.com/opencooperativeecosystem/' target='blank'>Github</FooterLink> 
      </Footer>
    </Container>
  )
}

export default App
