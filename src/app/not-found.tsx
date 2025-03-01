import { Button } from "@/components/atoms/button";
import Typography from "@/components/atoms/typography";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-4 py-14 px-4 grow">
      <Typography size="xxl">404</Typography>
      <div className="flex flex-col items-center">
        <Typography size="lg">Page Not Found</Typography>
        <p>Could not find requested resource</p>
      </div>
      <div className="flex gap-4">
        <Link href="/" legacyBehavior>
          <Button>Return Home</Button>
        </Link>
      </div>
    </div>
  );
}
