/*
 * @Author: BINGWU
 * @Date: 2024-08-04 23:50:37
 * @LastEditors: hujiacheng hujiacheng@iipcloud.com
 * @LastEditTime: 2024-08-05 17:16:08
 * @FilePath: \messenger-clone-react-vite\src\App.tsx
 * @Describe: 
 * @Mark: ૮(˶ᵔ ᵕ ᵔ˶)ა
 */
import {
  RouterProvider,
} from "react-router-dom";
import router from "./router";
function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
