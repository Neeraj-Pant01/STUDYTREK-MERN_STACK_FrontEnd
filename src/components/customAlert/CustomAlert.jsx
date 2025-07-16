import React, { useEffect } from 'react';
import './CustomAlert.css';
import { FaCheckCircle, FaExclamationTriangle, FaTimesCircle } from 'react-icons/fa';

const icons = {
  success: <FaCheckCircle />,
  error: <FaTimesCircle />,
  alert: <FaExclamationTriangle />,
};

const CustomAlert = ({ type = 'alert', message = '', onClose, duration = 3000 }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose && onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <div className={`custom-alert ${type}`}>
      <div className="alert-icon">{icons[type]}</div>
      <p>{message}</p>
    </div>
  );
};

export default CustomAlert;
