/*
 * @Author: BINGWU
 * @Date: 2024-08-08 23:12:00
 * @LastEditors: hujiacheng hujiacheng@iipcloud.com
 * @LastEditTime: 2024-08-10 17:18:46
 * @FilePath: \messenger-clone-react-vite\src\components\center\index.tsx
 * @Describe: 
 * @Mark: ૮(˶ᵔ ᵕ ᵔ˶)ა
 */
import { CSSProperties } from 'react';
import IconFontItem from '../icon-font';
import { ListItem } from './components/list-item';
interface ListType {
  name: string,
  imageUrl: string,
  info: string
}
interface CenterProps {
  list: ListType[],
  title: string,
  showIcon: boolean
}
export const Center = ({ list, title, showIcon }: CenterProps) => {
  const contentStyle: CSSProperties = {
    padding: '10px',
    borderRight: '1px solid #ccc',
    flex: 1, height: '100%', boxSizing: 'border-box'
  }
  const topStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
  const iconStyle: CSSProperties = {
    height: '40px',
    width: '40px',
    borderRadius: '4px',
    fontSize: '24px',
    cursor: 'pointer', // 添加此行
  }
  const handleAddPeople = () => {
    console.log('add people');

  }
  return (
    <div style={contentStyle}>
      <div style={topStyle}>
        <h2>{title}</h2>
        <div onClick={handleAddPeople}>
          {showIcon && <IconFontItem type="icon-tianjiajiahaoyoutianjiapengyou" style={iconStyle}></IconFontItem>}
        </div>
      </div>
      <div>
        {list.map((item, index) => (<ListItem key={index} name={item.name} imageUrl={item.imageUrl} info={item.info}></ListItem>))}
      </div>
    </div>
  )
}