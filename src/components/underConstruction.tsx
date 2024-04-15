"use client";
import { Dialog, DialogBody, DialogTitle } from "@/components/shared/dialog";
import { useState } from "react";
import { Button } from "./shared/button";

const UnderConstruction = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <Dialog open={open} onClose={() => setOpen(false)} size="sm">
        <DialogTitle className="text-center">Under Construction</DialogTitle>

        <DialogBody className="flex flex-col text-center text-sm/6 text-slate-700 dark:text-white">
          <p className="">If you have any concerns,</p>
          <a
            href="mailto:cam@ozdv.me?subject=Legion Of Mary Website"
            className="mb-6 font-semibold text-slate-700 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400"
          >
            Email me anytime!
          </a>
          <Button
            onClick={() => {
              setOpen(false);
            }}
          >
            Sounds good!
          </Button>
        </DialogBody>
      </Dialog>
    </>
  );
};

export default UnderConstruction;
