import React from "react";
import Image from "next/image";
import cvic_logo_600 from "@/public/logos/cvic_logo_600.png";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className="bg-[#820000] text-white w-full h-auto p-3 flex flex-col justify-center items-center align-bottom">
      <div className="flex flex-col justify-center items-center">
        <Image src={cvic_logo_600} width="300" height="100" alt="/logo" />
        <div className="w-screen h-auto text-[10px] md:text-base lg:text-lg p-2">
          心臓MRI検査・心臓ドック・画像診断のスペシャリストチーム |
          心臓画像クリニック飯田橋-CVIC- [東京都新宿区] 東京都新宿区新小川町1-14
          飯田橋リープレックスビズ 4F
        </div>
        <p className="w-screen text-[10px] md:text-base lg:text-lg">
          © 2020 CVIC Allrights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
