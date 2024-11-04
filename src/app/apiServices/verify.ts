import Cookies from "universal-cookie";
import { serverApi } from "../../lib/config";

const cookies = new Cookies();
let member_data: any = null;

if(cookies.get("access_token")) {  // agar cookieni ichida access_token mavjud bulsa.
    const memberDataJson: any = localStorage.getItem("member_data")
    ? localStorage.getItem("member_data")
    : null;
    member_data = memberDataJson ? JSON.parse(memberDataJson) : null;
    if (member_data) {
        member_data.mb_image = member_data.mb_image //memeber_datani ichidagi mb_imageni check qildim. agar image mavjud bulsa ,
          ? `${serverApi}/${member_data.mb_image}` // quydagicha linkni hosil qilib oldim
          : "/auth/odamcha.png"; // agar mavjud bulmasa, quydagicha bulsin,
      }
    
} else {
    localStorage.removeItem("member_data");
}

console.log("======== verify ======");
console.log(member_data);

export const verifiedMemberData = member_data ? member_data : null;  //member_datani verifyMemberDataga tenglashtirib olayopman.