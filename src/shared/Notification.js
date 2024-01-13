import "./Notification.css";
const Notification = (props) => {
  const handleClick = () => {
    window.location.reload();
  };

  if (props.type === "error") {
    return (
      <div className="alert alert-danger alert-dismissible">
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          onClick={handleClick}
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
          onClick={handleClick}
        ></button>
        <strong className="success">{props.message}</strong>
      </div>
    );
  }
};
export default Notification;

// const [isVisible, setIsVisible] = useState(true)

// useEffect(() => {
//   // Set a timeout to hide the notification after 3000 milliseconds (3 seconds)
//   const timeoutId = setTimeout(() => {
//     setIsVisible(false);

//   }, 3000);

//   // Clean up the timeout when the component is unmounted
//   return () => {
//     clearTimeout(timeoutId);
//   };
// }, []); // Empty dependency array ensures useEffect runs only once, similar to componentDidMount style={{ display: isVisible ? 'block': 'none' }}
// eslint-disable-next-line no-undef
