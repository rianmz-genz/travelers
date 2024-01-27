import { useState, useEffect } from "react";

const usePhone = () => {
  const [phone, setPhone] = useState("");
  const getPhone = async () => {
    const res = await fetch("/phone");
    if (!res.ok) {
      console.error("Failed to fetch phone data");
      return;
    }

    try {
      const phoneData = await res.json();
      console.log(phoneData.phone);
      setPhone(phoneData.phone);
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }
  };

  useEffect(() => {
    getPhone();
  }, []);

  return { phone };
};

export default usePhone;
