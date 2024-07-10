import { useState, useRef, useEffect } from "react";

const Setting = () => {
  const [dropDown2, setDropdown2] = useState(false);

  const dropDownRef2 = useRef(null);

  const handleClickOutside = (event) => {
    if (dropDownRef2.current && !dropDownRef2.contains(event.target)) {
      setDropdown2(false);
    }
  };
  const toggledropdown2 = () => {
    setDropdown2(!dropDown2);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  const itemsParameter = [
    "Manage subscription to notifications",
    "Offline navigation",
    "Sign up for newsletters",
    "Manage my privacy settings",
  ];
  return (
    <div>
      <button
        type="button"
        className=" hover:bg-slate-500  flex items-center ml-20 mr-0"
        onClick={toggledropdown2}
        alt="settings"
      >
        <img
          className=" hover:bg-slate-500 rounded-full "
          src={
            dropDown2
              ? "src/assets/Icons/cross (1).svg"
              : "src/assets/Icons/settings (1).svg"
          }
        />
      </button>
      {dropDown2 && (
        <div
          ref={dropDownRef2}
          className="absolute place-items-start px-10 py-5 top-6 bg-white border border-gray-300 rounded shadow-lg"
        >
          {itemsParameter.map((itemsPara, index2) => (
            <li className="list-none " key={index2}>
              {itemsPara}
            </li>
          ))}
        </div>
      )}
    </div>
  );
};

export default Setting;
