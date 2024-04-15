"use client";
import { Dialog, DialogBody, DialogTitle } from "@/components/shared/dialog";
import { useState } from "react";

const UnderConstruction = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <Dialog open={open} onClose={() => setOpen(false)} size="sm">
        <DialogTitle className="text-center">Under Construction</DialogTitle>

        <DialogBody className=" text-center text-sm/6 text-slate-700 dark:text-white">
          <p className="">This website is under construction.</p>

          <p className="mt-4">If you have any concerns,</p>
          <a
            href="mailto:cam@ozdv.me?subject=Legion Of Mary Website"
            className="font-semibold text-slate-700 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400"
          >
            Email me anytime!
          </a>
        </DialogBody>
      </Dialog>
    </>
  );
};

export default UnderConstruction;
