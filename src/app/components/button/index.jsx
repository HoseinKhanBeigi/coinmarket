import '../../styles/button.scss';
export const ButtonComponent = ({ name, hanldeClick }) => {
  return (
    <button className="btn" onClick={hanldeClick}>
      {name}
    </button>
  );
};
