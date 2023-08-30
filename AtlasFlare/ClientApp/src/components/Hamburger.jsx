import React from "react";

function Hamburger({ isOpen }) {
    return (
        <>
            <div className="hamburger">
                <div className="burger burgerOne"></div>
                <div className="burger burgerTwo"></div>
                <div className="burger burgerThree"></div>
            </div>

            <style jsx="true">
                {`
          .hamburger {
            width: 2rem;
            height: 2rem;
            display: flex;
            justify-content: space-around;
            flex-flow: column nowrap;
            z-index: 10;
            margin-right: 10px;
          }

          .hamburger:hover {
            // opacity: 0.5;
            cursor: pointer;
          }

          .burger {
            width: 2rem;
            height: 0.25rem;
            border-radius: 10px;
            background-color: #4682A9;
            transform-origin: 1px;
            transition: all 0.5s ease-in-out;
          }

          .burgerOne {
            transform: ${isOpen ? "rotate(45deg)" : "rotate(0)"};
          }

          .burgerTwo {
            opacity: ${isOpen ? 0 : 1};
          }

          .burgerThree {
            transform: ${isOpen ? "rotate(-45deg)" : "rotate(0)"};
          }
        `}
            </style>
        </>
    );
}

export default Hamburger;