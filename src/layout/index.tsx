/*
 * @Author: BINGWU
 * @Date: 2024-08-05 17:21:59
 * @LastEditors: hujiacheng hujiacheng@iipcloud.com
 * @LastEditTime: 2024-08-05 17:54:46
 * @FilePath: \messenger-clone-react-vite\src\layout\index.tsx
 * @Describe: 
 * @Mark: ૮(˶ᵔ ᵕ ᵔ˶)ა
 */
import { Outlet } from "react-router-dom";
import Aside from "./aside";
import styled from "styled-components";
const Content = styled.div`
  height: 100vh;
  width:100vw;
  display: flex;
`
const Right = styled.div`
  flex:14;
`
const Layout = () => {
  return (
    <Content>
      <Aside />
      <Right>
        <Outlet />
      </Right>
    </Content>
  );
}

export default Layout