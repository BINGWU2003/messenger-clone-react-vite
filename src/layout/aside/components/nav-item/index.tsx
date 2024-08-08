/*
 * @Author: BINGWU
 * @Date: 2024-08-05 17:56:04
 * @LastEditors: hujiacheng hujiacheng@iipcloud.com
 * @LastEditTime: 2024-08-08 22:45:08
 * @FilePath: \messenger-clone-react-vite\src\layout\aside\components\nav-item\index.tsx
 * @Describe: 
 * @Mark: ૮(˶ᵔ ᵕ ᵔ˶)ა
 */
import IconFont from "../../../../components/icon-font";
interface NavItemProps {
  icon: string;
}

const NavItem = ({ icon }: NavItemProps) => {
  return (
    <IconFont type={icon} style={{ fontSize: '40px' }}></IconFont>
  )
}

export default NavItem