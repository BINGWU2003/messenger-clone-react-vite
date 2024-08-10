import { Avatar } from "antd";
import { UserOutlined } from '@ant-design/icons';
import { CSSProperties } from "react";
interface ListItemProps {
  imageUrl: string,
  name: string,
  info: string
}
export const ListItem = ({ imageUrl, name, info }: ListItemProps) => {

  const listStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
  }
  const rightStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    marginLeft: '10px',
    height: '56px',
  }
  return (
    <div style={listStyle}>
      <Avatar size={56} icon={<UserOutlined />} src={imageUrl} />
      <div style={rightStyle}>
        <div>{name}</div>
        {info && <div>{info}</div>}
      </div>
    </div>
  );
}