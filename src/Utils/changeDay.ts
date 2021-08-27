export default function changeDay(change: 'increment' | 'decrement', dateFormated: string[]) {
    const dayUpdated: string[] = [];
    
    const newDay = change === 'increment' ? 
        (Number(dateFormated[2]) + 1) : 
        (Number(dateFormated[2]) - 1);

    for(var c = 0; c < dateFormated.length; c++) {
        if (c === 2) {
            dayUpdated.push(newDay.toString()) 
        } else {
            dayUpdated.push(dateFormated[c]) 
        }
    }

    return dayUpdated;
  };