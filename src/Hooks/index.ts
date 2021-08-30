import { useEffect, useState } from "react";
import { DatasHoursType } from "../types";
import { database } from "../services/firebase";

export function useDataDay(today: string) {

  const [dataToday, setDataToday] = useState<DatasHoursType>();

  useEffect(() => {
    const daysRef = database.ref('/days');

    daysRef.on('value', days => {
      const databaseDays = days.val()

      const databaseToday = databaseDays.filter((databaseDay: { day: string; }) => databaseDay.day === today)

      setDataToday(databaseToday[0])
    });

    console.log(dataToday);
  }, [])

  return { dataToday }
}