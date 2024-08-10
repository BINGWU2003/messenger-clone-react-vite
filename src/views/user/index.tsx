/*
 * @Author: BINGWU
 * @Date: 2024-08-05 17:29:30
 * @LastEditors: hujiacheng hujiacheng@iipcloud.com
 * @LastEditTime: 2024-08-10 17:05:09
 * @FilePath: \messenger-clone-react-vite\src\views\user\index.tsx
 * @Describe: 
 * @Mark: ૮(˶ᵔ ᵕ ᵔ˶)ა
 */
import { Center } from "../../components/center";
const User = () => {
  const list = [
    {
      info: '你好',
      name: '张三',
      imageUrl: ''
    }
  ]
  return (
    <div style={{ display: "flex", height: '100%' }}>
      <Center title="联系人" showIcon={false} list={list}></Center>
      <div style={{ flex: 5 }}>
        111
      </div>
    </div>
  );
}

export default User