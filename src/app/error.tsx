"use client"; // Error boundaries must be Client Components

import { Button } from "@/components/atoms/button";
import Typography from "@/components/atoms/typography";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-4 py-14 px-4 grow">
      <Typography size="xxl">OOPS!</Typography>
      <div className="flex flex-col items-center">
        <Typography size="lg">Something went wrong</Typography>
        <p>Could not find requested resource</p>
      </div>
      <div className="flex gap-4">
        <Button
          variant={"secondary"}
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </Button>
        <Link href="/" legacyBehavior>
          <Button>Return Home</Button>
        </Link>
      </div>
    </div>
  );
}
