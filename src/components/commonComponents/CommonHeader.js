import React from "react";
import NavBar from "./NavBar";
import IMAGES from "../../theme/images";
import COLORS from "../../theme/color";

const CommonHeader = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', backgroundColor: COLORS.white }}>
      <img src={IMAGES.mitLogo} height={90} width={300} style={{ objectFit: 'contain' }} />
      <div style={{ width: '100%' }}>
        <NavBar />
      </div>
      {/* <div style={{width:'100%',}}>
        <img
          src={IMAGES.commonBackground}
          height={200}
          objectFit='fill'
          width={'100%'}
        />
      </div> */}
    </div>

  )
}

export default CommonHeader;