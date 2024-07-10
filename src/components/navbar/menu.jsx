import { useRef, useState, useEffect } from "react";

const Menu = () => {
  const [dropDown1, setDropdown1] = useState(false);
  const dropDownRef1 = useRef(null);

  const toggledropdown1 = () => {
    setDropdown1(!dropDown1);
  };
  const handleClickOutside = () => {
    if (dropDownRef1.current && !dropDownRef1.contains(event.target)) {
      setDropdown1(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const items = {
    "ON TV": [
      { name: "France 24 live", path: "" },
      { name: "News", path: "" },
      { name: "TV guide", path: "" },
      { name: "See all shows", path: "" },
      { name: "Accessibility", path: "" },
    ],
    TOPICS: [
      { name: "Environment", path: "" },
      { name: " Business / Tech", path: "" },
      { name: "Sport", path: "" },
      { name: "Culture", path: "" },
      { name: "Infographics", path: "" },
      { name: "  Fight the Fake", path: "" },
      { name: "Sponsored contents", path: "" },
    ],
    ByRegion: [
      { name: "France", path: "" },
      { name: "Africa", path: "" },
      { name: "patMiddle East", path: "" },
      { name: "Americas", path: "" },
      { name: "Europe", path: "" },
      { name: "Asia-Pacific", path: "" },
    ],
  };

  return (
    <div className="flex flex-row justify-evenly items-center">
      <button
        type="button"
        className=" hover:bg-slate-500 flex items-center ml-96 mr-20"
        onClick={toggledropdown1}
      >
        <img
          className=" hover:bg-slate-500 m- "
          src={
            dropDown1
              ? "src/assets/Icons/cross (1).svg"
              : "src/assets/Icons/menu-burger.svg"
          }
          alt="Menu"
        />
      </button>
      {dropDown1 && (
        <div className="absolute px10 py-5 top-8 bg-white border border-gray-300 rounded shadow-lg">
          {Object.keys(items).map((category, index) => (
            <div key={index} className="grid grid-cols-2">
              <div className="px-4 p-2  font-bold bg-black-100">{category}</div>
              <br />
              {items[category].map((item, subindex) => (
                <option
                  key={subindex}
                  href={item.path}
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  {item.name}
                </option>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;
