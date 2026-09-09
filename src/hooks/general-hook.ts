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
  return {
    isLoading,
    setIsLoading,
    linter,
    formatPrice
  };
}