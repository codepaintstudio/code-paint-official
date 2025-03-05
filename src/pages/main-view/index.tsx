import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Homeone from "./components/Home_one";

gsap.registerPlugin(useGSAP);

const MainView = () => {
  return (
    <>
      <Homeone />
    </>
  );
};

export default MainView;
