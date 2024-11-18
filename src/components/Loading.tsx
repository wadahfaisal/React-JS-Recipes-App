type Props = {
  center?: boolean;
};
const Loading = ({ center }: Props) => {
  return (
    <div className="loading-container">
      <div className={center ? "loading loading-center" : "loading"}></div>
    </div>
  );
};

export default Loading;
