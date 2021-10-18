<template>
  <Fragment>
    <Gnb transparent />
    <Cover count="2" countTotal="3333" title="기록" />
    <div class="my-drawer"></div>
    <Container>
      <template v-slot:content>
        <Block>
          <template v-slot:content>
            <Box space>
              <template v-slot:content>
                <div class="introduce__area">
                  <strong class="introduce__title">소개</strong>
                  <p class="introduce__content">듣는 것을 쓰는 사람</p>
                </div>
              </template>
            </Box>
          </template>
        </Block>
        <Block>
          <template v-slot:content>
            <Box>
              <template v-slot:content>
                <div class="post__area__title">
                  <strong class="post__title">전체글</strong>
                  <div class="view-type-btn__area">
                    <Button ico="photo" txt="사진만 보기" />
                    <Button ico="list" txt="목록형 보기" />
                    <Button ico="card" txt="카드형 보기" />
                  </div>
                </div>
                <List card />
              </template>
            </Box>
          </template>
        </Block>
      </template>
    </Container>
  </Fragment>
</template>

<script>
// import { Fragment } from 'vue-fragment'
import Gnb from './components/Gnb'
import Cover from './components/Cover'
import Container from './components/Container'
import Block from './components/Block'
import Box from './components/Box'
import List from './components/List'
import Button from './components/Button'

export default {
  name: 'App',
  components: {
    // Fragment,
    Gnb,
    Cover,
    Container,
    Block,
    Box,
    List,
    Button,
  },
  data() {
    return {
    }
  }
}
</script>

<style>
html {
  height: 100%;
}
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#app {
  display: flex;
  flex-flow: column wrap;
  min-height: 100%;
  background-color: #ffffff;
}
.my-drawer {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 100vh;
    z-index: 2130;
    overflow: hidden;
    width: 0px;
    height: 100%;
    visibility: hidden;
}
</style>
