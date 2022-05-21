import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { upTaskThunk } from "../../../../redux/actions/tasksAc";

const Clock = ({ deadline , id }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(125);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const dispatch = useDispatch()

  const getTimeUntil = (deadline) => {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      setDays(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
      dispatch(upTaskThunk(id))
    } else {
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    }
  };

  useEffect(() => {
    let interval = setInterval(() => getTimeUntil(deadline), 1000);

    return () => clearInterval(interval);
  }, [deadline]);

  return (
    <>
      {days ? days + ":" : ""}
      {hours ? hours + ":" : ""}
      {minutes ? minutes + ":" : ""}
      {seconds ? seconds : 0}
    </>
  );
};

export default Clock;
