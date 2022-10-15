import React from "react";
import { useCountdown } from "./hooks/useCountdown";
import DateTimeDisplay from "./DateTimeDisplay";
import "./CountdownTimer.css";

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Presale started!</span>
      <a
        type="button"
        href="https://www.pinksale.finance/launchpad/0xdE15F292DE42647DEDbcC121Ad6831C13a337F36?chain=BSC"
        className="presale-countdown-btn"
      >
        Presale
      </a>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="show-counter">
      <a
        href="https://www.pinksale.finance/launchpad/0xdE15F292DE42647DEDbcC121Ad6831C13a337F36?chain=BSC"
        target="_blank"
        rel="noopener noreferrer"
        className="countdown-link"
      >
        <DateTimeDisplay value={days} type={"Days"} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={hours} type={"Hours"} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={minutes} type={"Mins"} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={seconds} type={"Seconds"} isDanger={false} />
      </a>
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
