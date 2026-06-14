import Banner from "@/components/Banner";
import Tips from "@/components/Tips";
import Topbrands from "@/components/Topbrands";
import TopGenerations from "@/components/TopGenerations";
import Image from "next/image";
import { ToastContainer, toast } from 'react-toastify';
  

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <TopGenerations></TopGenerations>
      <Tips></Tips>
      <Topbrands/>
      <ToastContainer/>
    </div>
  );
}
