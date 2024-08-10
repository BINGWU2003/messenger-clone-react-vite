/*
 * @Author: BINGWU
 * @Date: 2024-08-05 17:58:27
 * @LastEditors: hujiacheng hujiacheng@iipcloud.com
 * @LastEditTime: 2024-08-10 17:17:12
 * @FilePath: \messenger-clone-react-vite\src\components\icon-font\index.tsx
 * @Describe: 
 * @Mark: ૮(˶ᵔ ᵕ ᵔ˶)ა
 */
import { createFromIconfontCN } from '@ant-design/icons';
import { Space } from 'antd';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_4648271_saol2du7qsj.js',
});
interface AppProps {
  type: string;
  style?: React.CSSProperties;
}
const IconFontItem = ({ type, style }: AppProps) => (
  <Space>
    <IconFont type={type} style={style} />
  </Space>
);

export default IconFontItem;
