import { NavUser } from "./NavUser";
import ReactTypingEffect from 'react-typing-effect'
import './HomeUser.css'

export const HomePageUser = () => {
  return (
    <>
    <NavUser />
      <center>
        <br />
        <ReactTypingEffect className="typingeffect" text={['ยินดีต้อนรับ']} speed={80} eraseDelay={200}/>
      </center>
    </>
  );
};
