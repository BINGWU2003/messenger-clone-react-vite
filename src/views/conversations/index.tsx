/*
 * @Author: BINGWU
 * @Date: 2024-08-05 17:29:23
 * @LastEditors: hujiacheng hujiacheng@iipcloud.com
 * @LastEditTime: 2024-08-08 23:25:05
 * @FilePath: \messenger-clone-react-vite\src\views\conversations\index.tsx
 * @Describe: 
 * @Mark: ૮(˶ᵔ ᵕ ᵔ˶)ა
 */
import { Center } from "../../components/center";
const Conversations = () => {
  const list = [
    {
      info: '你好',
      name: '张三',
      imageUrl: ''
    }
  ]
  return (
    <div style={{ display: "flex", height: '100%' }}>
      <Center title="信息" showIcon={true} list={list}></Center>
      <div style={{ flex: 5 }}>
        111
      </div>
    </div>
  );
}

export default Conversations