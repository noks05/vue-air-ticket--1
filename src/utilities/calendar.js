function getMonthName(monthNumber) {
  const months = [
    "январь",
    "февраль",
    "март",
    "апрель",
    "май",
    "июнь",
    "июль",
    "август",
    "сентябрь",
    "октябрь",
    "ноябрь",
    "декабрь",
  ];

  return months[monthNumber];
}

export function getFormatMonth(monthNumber) {
  let monthName = getMonthName(monthNumber);
  let monthNameFormat;

  const monthArr = monthName.split('');
  const endMonth = monthArr.pop();
  const startMonthName = monthArr.join("");

  if (endMonth === "ь" || endMonth === "й") {
    monthNameFormat = startMonthName + "я";
  } else {
    monthNameFormat = startMonthName + endMonth + "а";
  }

  return monthNameFormat;
}
