import { useEffect, useState } from "react";

const convertSecondsToHMS = (timeInSeconds) => {
  timeInSeconds = Number(timeInSeconds);
  const h = Math.floor(timeInSeconds / 360);
  const m = Math.floor((timeInSeconds % 3600) / 60);
  const s = Math.floor((timeInSeconds % 3600) % 60);
  //   const s = timeInSeconds % 60;
  const hDisplay = h < 10 ? "0" + h : h;
  const mDisplay = m < 10 ? "0" + m : m;
  const sDisplay = s < 10 ? "0" + s : s;
  return `${hDisplay}:${mDisplay}:${sDisplay}`;
};

function Article({ title = "", children }) {
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    //useEffect s'excécute tjrs au Montage du Composant
    console.log("ARTICLE IS MOUNTED"); //Une fois run
    const intervalId = setInterval(() => {
      console.log("INTERVAL"); //Plusieurs fois, malgre le unmount du composant.
      setElapsedTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => {
      //S'excécute à la destruction du composant
      console.log("ARTICLE IS DESTROYED");
      clearInterval(intervalId);
      //   clearTimeout(timeoutId);
    };
  }, []); //Tableau de dépendance
  //

  //cela s'explique par le fait que c'est un processus
  //qui est declenché par Composant, mais qui s'excécut indépendamment de la propriété

  return (
    <div>
      <h2>{title}</h2>
      <p>Temps de lecture: {convertSecondsToHMS(elapsedTime)} </p>
      {children}
    </div>
  );
}

export default Article;
