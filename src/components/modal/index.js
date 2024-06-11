import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

const Modal = ({
  isOpen,
  onClose,
  closeExisting = true,
  escapeClose = true,
  clickClose = true,
  closeText = "Close",
  modalClass = "modal",
  blockerClass = "react-modal",
  spinnerHtml = '<div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div>',
  showSpinner = true,
  showClose = true,
  fadeDuration = null,
  fadeDelay = 1.0,
  children,
  onBeforeOpen,
  onAfterOpen,
  onBeforeClose,
  onAfterClose,
}) => {
  const [visible, setVisible] = useState(false);
  const [spinnerVisible, setSpinnerVisible] = useState(false);
  const blockerRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      openModal();
    } else {
      closeModal();
    }
  }, [isOpen]);

  useEffect(() => {
    if (escapeClose) {
      const handleKeyDown = (event) => {
        if (event.key === "Escape") {
          handleClose();
        }
      };
      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [escapeClose]);

  const openModal = () => {
    if (onBeforeOpen) onBeforeOpen();
    if (fadeDuration) {
      setTimeout(() => setVisible(true), fadeDuration * fadeDelay);
    } else {
      setVisible(true);
    }
    if (onAfterOpen) onAfterOpen();
  };

  const closeModal = () => {
    if (onBeforeClose) onBeforeClose();
    setVisible(false);
    if (onAfterClose) onAfterClose();
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      closeModal();
    }
  };

  const handleBlockerClick = (e) => {
    if (clickClose && e.target === blockerRef.current) {
      handleClose();
    }
  };

  const showSpinner = () => {
    if (showSpinner) setSpinnerVisible(true);
  };

  const hideSpinner = () => {
    setSpinnerVisible(false);
  };

  return (
    <div>
      {visible && (
        <div
          className={`${blockerClass} ${visible ? "current" : ""}`}
          ref={blockerRef}
          onClick={handleBlockerClick}
        >
          <div className={modalClass}>
            {showClose && (
              <button className="close-modal" onClick={handleClose}>
                {closeText}
              </button>
            )}
            {children}
          </div>
        </div>
      )}
      {spinnerVisible && (
        <div
          className="modal-spinner"
          dangerouslySetInnerHTML={{ __html: spinnerHtml }}
        ></div>
      )}
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  closeExisting: PropTypes.bool,
  escapeClose: PropTypes.bool,
  clickClose: PropTypes.bool,
  closeText: PropTypes.string,
  modalClass: PropTypes.string,
  blockerClass: PropTypes.string,
  spinnerHtml: PropTypes.string,
  showSpinner: PropTypes.bool,
  showClose: PropTypes.bool,
  fadeDuration: PropTypes.number,
  fadeDelay: PropTypes.number,
  children: PropTypes.node.isRequired,
  onBeforeOpen: PropTypes.func,
  onAfterOpen: PropTypes.func,
  onBeforeClose: PropTypes.func,
  onAfterClose: PropTypes.func,
};

export default Modal;
