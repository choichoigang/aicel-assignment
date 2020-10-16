import ReactDOM from "react-dom";

interface IModalPortal {
  children: React.ReactNode;
}

function Portal({ children }: IModalPortal) {
  const el = document.getElementById("portal-root");
  return ReactDOM.createPortal(children, el);
}

export default Portal;
