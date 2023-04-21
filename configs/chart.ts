const MCP_CHART_DATA: { time: string; weight: number }[][] = [];

const currentDate = new Date(); // get the current date
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth() + 1; // add 1 to get the correct month number (0-based)
const daysInCurrentMonth = new Date(currentYear, currentMonth, 0).getDate(); // get the number of days in the current month

// generate data for the previous two months and the current month
for (let i = currentMonth - 2; i <= currentMonth; i++) {
  const year = i <= 0 ? currentYear - 1 : currentYear; // adjust the year for previous year's months
  const month = i <= 0 ? i + 12 : i; // adjust the month for previous year's months
  const daysInMonth = new Date(year, month, 0).getDate(); // get the number of days in the month

  const data = [];
  for (let j = 1; j <= daysInMonth; j++) {
    const time = `${year}-${month.toString().padStart(2, "0")}-${j
      .toString()
      .padStart(2, "0")} 00:00:00`;
    const weight = Math.floor(Math.random() * (150 - 50 + 1)) + 50; // generate a random weight between 50 and 150
    data.push({ time, weight });
  }

  // include only the relevant days for the current month
  if (i === currentMonth) {
    MCP_CHART_DATA.push(data.slice(0, currentDate.getDate()));
  } else {
    MCP_CHART_DATA.push(data);
  }
}

export { MCP_CHART_DATA };
