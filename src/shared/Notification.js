import "./Notification.css";
const Notification = (props) => {
  if (props.type === "error") {
    return (
      <div className="alert alert-danger alert-dismissible">
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
        ></button>
        <strong className="error">{props.message}</strong>
      </div>
    );
  }
  if (props.type === "success") {
    return (
      <div className="alert alert-success alert-dismissible">
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
        ></button>
        <strong className="success">{props.message}</strong>
      </div>
    );
  }
};
export default Notification;
