import { useState } from "react";

export default function useHook() {
  const [isLoading, setIsLoading] = useState(false);
  const linter = (sentence:string, max=22)=> {
    let result = sentence
    if (sentence.length >= max){
      result = result.split("").splice(0,max).join("") + "...";
    }
    return result;
  }

  const formatPrice = (price: string) => {
    const number = Number(String(price).replace(/,/g, ""));

    if (number >= 1_000_000) {
      return `${(number / 1_000_000).toFixed(1).replace(/\.0$/, "")}M`;
    }

    if (number >= 1_000) {
      return `${(number / 1_000).toFixed(1).replace(/\.0$/, "")}K`;
    }

    return number.toString();
  };

  const infoFormat = (info:string) => {
    const infoArray = info.split(" "); 
    switch (infoArray[1]) {
      case "Bedrooms":
        return infoArray[0]+" bd"
      case "Bathrooms":
        return infoArray[0]+" ba"
      case "Square-Feet":
        return infoArray[0]+" sf"
      default:
        break;
    }
  }
  return {
    isLoading,
    setIsLoading,
    linter,
    formatPrice,
    infoFormat
  };
}