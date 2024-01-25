import { router } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

const useTravels = () => {
  const [travels, setTravels] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getTravels() {
    try {
        setIsLoading(true)
        const response = await fetch("/travels");
        const data = await response.json();
        setTravels(data);
    } catch (error) {
        throw new Error(error)
    } finally {
        setIsLoading(false)
    }
  }

  useEffect(() => {
    getTravels();
  }, []);

  return { travels, getTravels, isLoading };
};

export default useTravels;
