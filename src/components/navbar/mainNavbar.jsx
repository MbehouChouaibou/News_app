import { useRef, useState, useEffect } from "react";

const Navbar = () => {
  const [dropDown, setDropdown] = useState(false);
  const dropDownRef = useRef(null);

  const toggledropdown = () => {
    setDropdown(!dropDown);
  };

  const handleClickOutside = (event) => {
    if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
      setDropdown(false);
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
    <nav className="fixed top-0 w-full flex justify-evenly   flex-rows  bg-sky-100 p-0">
      <div className="flex flex-row justify-evenly items-center">
        <button
          type="button"
          className=" hover:bg-slate-500 flex items-center ml-96 mr-20"
          onClick={toggledropdown}
        >
          <img
            className=" hover:bg-slate-500 m- "
            src={
              dropDown
                ? "src/assets/Icons/cross (1).svg"
                : "src/assets/Icons/menu-burger.svg"
            }
            alt="Menu"
          />
        </button>
        {dropDown && (
          <div className="absolute px10 py-5 top-8 bg-white border border-gray-300 rounded shadow-lg">
            {Object.keys(items).map((category, index) => (
              <div key={index}>
                <div className="flex flex-row justify-between px-4 p-2  font-bold bg-gray-100">
                  {category}
                </div>
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
        <button
          type="button"
          className=" hover:bg-slate-500  flex items-center ml-20 mr-0"
        >
          <img
            className=" hover:bg-slate-500 rounded-full "
            src="src\assets\Icons\settings (1).svg"
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
