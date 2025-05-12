function ReloadButton({ onClick, time }) {
  return (
    <button className="btn_reload" onClick={onClick}>
      Reload {time}
    </button>
  );
}

export default ReloadButton;