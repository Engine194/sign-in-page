import LineIcon from "../Icons/Line";
import FacebookIcon from "../Icons/Facebook";
import GoogleIcon from "../Icons/Google";

function SocialLogin(props) {
  const { storeConfig } = props || {};
  const { enable, networks = [] } = storeConfig || {};

  const renderIcons = function (networks) {
    if (networks?.length > 0) {
      const listIcon = networks.map(function (network, index) {
        let icon = null;
        switch (network.toLowerCase()) {
          case "line":
            icon = <LineIcon key={index} />;
            break;
          case "facebook":
            icon = <FacebookIcon />;
            break;
          case "google":
            icon = <GoogleIcon />;
            break;
          default:
            return null;
        }
        return (
          <div key={index}>
            <button className="border-none outline-none">{icon}</button>
          </div>
        );
      });
      return (
        <div className="flex gap-x-[30px] mt-[20px] justify-center">
          {listIcon}
        </div>
      );
    }
    return null;
  };

  return enable ? (
    <div className="mt-30px">
      <div className="relative h-[33px] w-full">
        <div className="absolute left-0 top-[50%] w-full h-[1px] bg-[#696969] -translate-y-[50%]" />
        <div className="absolute left-[50%] top-[50%] bg-[#fafafa] px-[6px] text-[22px] text-[#696969] -translate-x-[50%] -translate-y-[50%]">
          or Sign In with
        </div>
      </div>
      {renderIcons(networks)}
    </div>
  ) : null;
}

export default SocialLogin;
