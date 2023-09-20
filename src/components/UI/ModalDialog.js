import React, { useRef, useEffect, Fragment } from "react";
import ReactDom from "react-dom";

import Button from "./Button";

import classes from "./ModalDialog.module.css";

const ModalDialog = (props) => {
  const show = props.show;
  const title = props.title || "SnareMaster";
  const acceptButtonText = props.acceptButtonText || "OK";
  const acceptButtonOnClick = props.acceptButtonOnClick;
  const hasCancelButton = props.hasCancelButton;
  const cancelButtonText = props.cancelButtonText || "Cancel";
  const cancelButtonOnClick = props.cancelButtonOnClick;
  const formIsValid =
    props.formIsValid !== undefined && props.formIsValid !== null
      ? props.formIsValid
      : true;

  const modalRef = useRef(null);

  useEffect(() => {
    const modalElement = modalRef.current;

    if (modalElement) {
      modalElement.showModal();
    }
  });

  const cancelButtonOnClickHandler = () => {
    cancelButtonOnClick();
  };

  const acceptButtonOnClickHandler = () => {
    acceptButtonOnClick();
    cancelButtonOnClick();
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      cancelButtonOnClick();
    }
  };

  if (!show) {
    return null;
  }

  return (
    <Fragment>
      {ReactDom.createPortal(
        <dialog
          ref={modalRef}
          className={classes.modal}
          onKeyDown={handleKeyDown}
        >
          {title && <h2>{title}</h2>}
          <div>{props.children}</div>
          <div className={classes.buttons}>
            {hasCancelButton && (
              <button
                onClick={cancelButtonOnClickHandler}
                className={classes.button}
              >
                {cancelButtonText}
              </button>
            )}
            <Button
              onClick={acceptButtonOnClickHandler}
              disabled={!formIsValid}
            >
              {acceptButtonText}
            </Button>
          </div>
        </dialog>,
        document.getElementById("overlays")
      )}
    </Fragment>
  );
};

export default ModalDialog;
