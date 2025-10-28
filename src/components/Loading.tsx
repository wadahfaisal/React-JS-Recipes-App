type Props = {
  center?: boolean;
};
const Loading = ({ center }: Props) => {
  return (
    <div className="loading-container">
      <div className={center ? "loading-center" : "loading"}></div>
    </div>
  );
};

export default Loading;
