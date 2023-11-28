import React from "react";
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import HeaderContact from "./sub-components/HeaderContact";

const HeaderTop = () => {
  return (
    <div className="row">
      <div className="col-lg-12 py-2 d-flex justify-content-center align-items-center">

        <HeaderContact
          Icon={CallIcon}
          title="Call Us"
          titleValue="+880-1822996565"
        />

        <HeaderContact
          Icon={MailOutlineIcon}
          title="Email Us"
          titleValue="info@trimtex-bd.com"
        />

        <HeaderContact
          Icon={LocationOnOutlinedIcon}
          title="Our Location"
          titleValue="Mirpur-12, Dhaka"
        />

      </div>

    </div>
  );
};

export default HeaderTop;
