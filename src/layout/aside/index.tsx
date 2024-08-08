/*
 * @Author: BINGWU
 * @Date: 2024-08-05 17:54:22
 * @LastEditors: hujiacheng hujiacheng@iipcloud.com
 * @LastEditTime: 2024-08-08 23:03:42
 * @FilePath: \messenger-clone-react-vite\src\layout\aside\index.tsx
 * @Describe: 
 * @Mark: ૮(˶ᵔ ᵕ ᵔ˶)ა
 */
import styled from "styled-components"
import { NavLink, useLocation } from "react-router-dom"
import NavItem from "./components/nav-item"
const Aside = () => {
  const Content = styled.div`
  flex:1;
  border-right:1px solid #ccc;
  padding: 10px;
`
  const asideNav = [
    {
      href: '/user',
      icon: 'icon-xiaoxi'
    },
    {
      href: '/conversations',
      icon: 'icon-lianxiren'
    },
    {
      href: '/login',
      icon: "icon-tuichu",
    }
  ]
  const divStyle = {
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
    margin: '20px 0'
  }
  const iconStyle = {
    height: '40px',
    width: '40px',
    padding: '10px',
    borderRadius: '4px'
  }
  const useLocationPath = useLocation().pathname


  return (
    <Content>
      {
        asideNav.map((item) => {
          return (
            <div style={divStyle} key={item.href}>
              <div style={{ ...iconStyle, background: useLocationPath === item.href ? '#f3f4f6' : '' }}>
                <NavLink to={item.href} >
                  <NavItem icon={item.icon}></NavItem>
                </NavLink>

              </div>
            </div>
          )
        })
      }
    </Content>
  )
}

export default Aside