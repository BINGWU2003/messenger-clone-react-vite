/*
 * @Author: BINGWU
 * @Date: 2024-08-05 16:42:28
 * @LastEditors: hujiacheng hujiacheng@iipcloud.com
 * @LastEditTime: 2024-08-10 16:59:39
 * @FilePath: \messenger-clone-react-vite\src\router\index.tsx
 * @Describe: 
 * @Mark: ૮(˶ᵔ ᵕ ᵔ˶)ა
 */

import {
  createBrowserRouter
} from "react-router-dom";
import Login from "../views/login";
import User from "../views/user";
import Layout from "../layout";
import Conversations from "../views/conversations";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: 'user',
        element: <User />
      },
      {
        path: 'conversations',
        element: <Conversations />
      }
    ]
  },
  {
    path: "/login",
    element: <Login />,
  }
]);

export default router