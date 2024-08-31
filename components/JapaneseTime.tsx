export default function JapaneseTime({year, month, day}: { year?: number | string, month?: number | string, day?: number | string }) {
  let dateTimeValue = "";
  let displayValue = "";
  let usingTimeElement = true;
  if (year != undefined) {
    if (month != undefined) {
      if (day != undefined) {
        displayValue = `${year}年${month}月${day}日`
        dateTimeValue = `${year}-${month}-${day}`;
      } else {
        displayValue = `${year}年${month}月`
        dateTimeValue = `${year}-${month}`;
      }
    } else {
      displayValue = `${year}年`
      dateTimeValue = `${year}`
    }
  } else if (month != undefined) {
    if (day != undefined) {
      displayValue = `${month}月${day}日`
      dateTimeValue = `${month}-${day}`;
    } else {
      displayValue = `${month}月`;
      usingTimeElement = false;
    }
  } else if (day != undefined) {
    displayValue = `${day}日${day}`;
    usingTimeElement = false;
  } else {
    usingTimeElement = false;
  }
  if (usingTimeElement) {
    return (
      <time dateTime={dateTimeValue}>
        {displayValue}
      </time>
    )
  } else {
    return (
      <span>{displayValue}</span>
    )
  }
}
