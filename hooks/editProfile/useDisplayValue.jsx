import React from "react";

export const useDisplayValue = (tempValue, userValue) => {
  const [displayValue, setDisplayValue] = React.useState(userValue);

  React.useEffect(() => {
    if (tempValue !== userValue && tempValue !== "") {
      setDisplayValue(tempValue);
    } else {
      setDisplayValue(userValue);
    }
  }, [tempValue, userValue]);

  return displayValue;
};
