"use client";
import { useBooleanState } from "@/hooks/useBooleanState";
import { useSearchParam } from "@/hooks/useSearchParam";
import { useSearchParams } from "next/navigation";
import React from "react";
import { Toast, ToastContainer } from "react-bootstrap";

export const ErrorToast = React.memo(function ErrorToastFn() {
  const searchParams = useSearchParams();
  const videoAlert = searchParams.get("error");

  const { value: isClosed, setTrue: setClosed } = useBooleanState(false);

  const errorParam = useSearchParam("error");

  const handleClose = React.useCallback(() => {
    setClosed();
    // Note: Allow the close animation to play before updating the URL
    setTimeout(errorParam.clear, 500);
  }, [errorParam, setClosed]);

  return (
    <ToastContainer
      className="top-0 mt-4 start-50 translate-middle-x"
      data-bs-theme="dark"
    >
      <Toast
        className={"bg-danger-subtle border-danger-subtle"}
        show={videoAlert != null && !isClosed}
        autohide={true}
        delay={5_000}
        onClose={handleClose}
      >
        <Toast.Body>
          <strong>Error:</strong> Invalid video ID
        </Toast.Body>
      </Toast>
    </ToastContainer>
  );
});
