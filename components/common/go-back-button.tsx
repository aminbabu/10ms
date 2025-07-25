"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const GoBackButton = () => {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  return (
    <Button variant="outline" onClick={handleClick}>
      <ArrowLeft className="mr-2 size-4" />
      Go Back
    </Button>
  );
};

export default GoBackButton;
