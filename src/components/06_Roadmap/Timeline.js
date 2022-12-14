import React, { useState, useEffect } from "react";
import "./Timeline.css";
import { useSwipeable } from "react-swipeable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleRight,
  faChevronCircleLeft,
} from "@fortawesome/free-solid-svg-icons";

export function Timeline({
  myList,
  labelWidth,
  amountMove,
  lineColor,
  darkMode,
  eventTextAlignCenter,
  showSlider,
  arrowsSize,
}) {
  const [positionLeft, setpositionLeft] = useState(0);
  const [positionAllowed, setpositionAllowed] = useState(0);
  const [rightBtnEnable, setrightBtnEnable] = useState(true);
  const [prevIdx, setprevIdx] = useState(-1);
  const [rightToLeft, setrightToLeft] = useState(null);
  const [curStatus, setcurStatus] = useState(
    myList && myList[0] && Object.values(myList[0])[0]
  );
  const [curIdx, setcurIdx] = useState(0);

  const checkIfNeedToDisableRightButton = (leftPosition) => {
    if (leftPosition * -1 >= positionAllowed) {
      //chack if its my last time i can click on right arrow, if yes, this loop shoud disable right arrow btn
      setpositionLeft(-positionAllowed); //set the maximum position that i can give to the axis
      setrightBtnEnable(false); //disable right arrow
      return true;
    } else {
      // i still can click on right arrow btn
      setrightBtnEnable(true);
      return false;
    }
  };

  const moveAxis = (direction, amount) => {
    let leftPosition;

    if (direction === "right") {
      leftPosition = positionLeft - amount; // calculate my left position after click arrow
      let isNeedDisable = checkIfNeedToDisableRightButton(leftPosition); //check if i need to disable my right arrow
      if (isNeedDisable) {
        return;
      }
    } else {
      leftPosition = positionLeft + amount;
      setrightBtnEnable(true); // after i clicked on left arrow, right arrow should be enabled for sure
      if (leftPosition > 0) {
        // check if its my last click on left arrow
        setpositionLeft(0);
        return;
      }
    }
    setpositionLeft(leftPosition);
  };

  const resizeListener = () => {
    window.addEventListener("resize", calcAfterResize);
  };

  const calcAfterResize = () => {
    calcPostionSlideLeft();
  };

  useEffect(() => {
    calcPostionSlideLeft();
    resizeListener();
    return () => {
      window.removeEventListener("resize", calcAfterResize);
    };
  }, [positionLeft]);

  const calcPostionSlideLeft = () => {
    //calculate how many px i can move my axis
    let positionAllowed =
      document.getElementById("myAxis").getClientRects()[0].width -
      document.getElementById("axisWrapper").getClientRects()[0].width;
    setpositionAllowed(positionAllowed);
  };

  const handlers = useSwipeable({
    onSwiped: (eventData) => {
      if (eventData.deltaX < 0) {
        moveAxis("right", eventData.deltaX * -1);
      } else {
        moveAxis("left", eventData.deltaX);
      }
    },
  });

  return (
    <div className="wrapperAll">
      {positionLeft === 0 ? (
        <FontAwesomeIcon
          icon={faChevronCircleLeft}
          size={
            arrowsSize === "sm" || !arrowsSize
              ? "2x"
              : arrowsSize === "med"
              ? "3x"
              : "4x"
          }
          id="leftArrow"
          style={{
            color: "grey",
            borderColor: "grey",
          }}
          className=" disabledBtn "
        />
      ) : (
        <FontAwesomeIcon
          icon={faChevronCircleLeft}
          size={
            arrowsSize === "sm" || !arrowsSize
              ? "2x"
              : arrowsSize === "med"
              ? "3x"
              : "4x"
          }
          id="leftArrow"
          onClick={() => moveAxis("left", amountMove)}
          style={{
            color: lineColor,
            borderColor: lineColor,
          }}
          className=" enableBtn "
        />
      )}
      <div className="axisWrapper" id="axisWrapper" {...handlers}>
        <div
          className={`axis ${positionAllowed <= 0 ? "notEnoghEvents" : ""}`}
          id="myAxis"
          style={{
            left: `${positionLeft}px`,
            borderTop: `2px solid ${lineColor}`,
          }}
        >
          {myList &&
            myList.map((val, index) => {
              return (
                <div
                  className="specificEvent"
                  id="specificEvent"
                  style={{
                    width: `${labelWidth}px`,
                    color: `${darkMode ? "#fff" : "unset"}`,
                    textAlign: `${eventTextAlignCenter ? "center" : "unset"}`,
                  }}
                  key={index}
                  onClick={() => {
                    setcurIdx(index);
                    setprevIdx(curIdx);
                    setcurStatus("");
                    setrightToLeft(
                      index === curIdx ? null : index > curIdx ? true : false
                    );
                    setTimeout(() => {
                      setprevIdx(curIdx);
                      setcurStatus(myList[index].name);
                    }, 0);
                  }}
                >
                  <div
                    className="dot"
                    style={{
                      left: `${labelWidth / 2}px`,
                      background: lineColor,
                    }}
                  ></div>
                  <div className="eventTitle">Phase {index + 1}</div>
                  {Object.values(val).map((value, index) => {
                    return (
                      <li key={index} className="descriptionEventDetails">
                        {value}
                      </li>
                    );
                  })}
                </div>
              );
            })}
        </div>
      </div>
      {positionAllowed > 0 && rightBtnEnable ? (
        <FontAwesomeIcon
          icon={faChevronCircleRight}
          size={
            arrowsSize === "sm" || !arrowsSize
              ? "2x"
              : arrowsSize === "med"
              ? "3x"
              : "4x"
          }
          id="rightArrow"
          style={{
            color: lineColor,
            borderColor: lineColor,
          }}
          onClick={() => moveAxis("right", amountMove)}
          className=" enableBtn "
        />
      ) : (
        <FontAwesomeIcon
          icon={faChevronCircleRight}
          size={
            arrowsSize === "sm" || !arrowsSize
              ? "2x"
              : arrowsSize === "med"
              ? "3x"
              : "4x"
          }
          id="rightArrow"
          style={{
            color: "grey",
            borderColor: "grey",
          }}
          className=" disabledBtn "
        />
      )}

      {showSlider && (
        <div className="wrapperEventCurrent">
          {curStatus && (
            <span
              className="currentEventToShow"
              style={{
                animationName: `${
                  rightToLeft === null
                    ? "top-to-bottom"
                    : rightToLeft
                    ? "right-to-left"
                    : "left-to-right"
                }`,
                color: `${darkMode ? "#fff" : "unset"}`,
                borderLeft: `2px solid ${lineColor}`,
              }}
            >
              <div className="currentEventTitle">Phase {curIdx + 1}</div>
              {/* {Object.values(myList[curIdx]).map((value, index) => {
                                return <li key={index} className="currentEventDetails">{value}</li>;
                            })} */}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
