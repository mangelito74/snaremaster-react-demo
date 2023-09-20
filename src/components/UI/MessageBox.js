import { useEffect } from "react";

import classes from "./MessageBox.module.css";

const MessageBox = (props) => {
  const show = props.show;
  const onClose = props.onClose;

  useEffect(() => {
    // The animation is 3s. If timeout is also 3s the animated div will flicker
    const timeId = setTimeout(() => {
      hideAlert();
    }, 2900);

    return () => {
      clearTimeout(timeId);
    };
  });

  const hideAlert = () => {
    if (onClose) {
      onClose();
    }
  };

  if (!show) {
    return null;
  }

  return (
    <div className={classes["alert-container"]}>
      <div className={classes.alert}>
        {props.children}
        <button onClick={hideAlert} className={classes["close-button"]}>
          &times;
        </button>
      </div>
    </div>
  );
};

// todo: Implement info, warning and error messages!
// MessageBox.defaultPros = {
//   variant: 'info',
// }

export default MessageBox;
