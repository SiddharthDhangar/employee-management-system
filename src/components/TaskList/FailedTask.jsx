const FailedTask = ({ data }) => {
  return (
    <div className="task-card border-red-500">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 px-3 py-1 rounded text-sm">
          {data.category}
        </h3>
        <h4 className="text-sm">{data.date}</h4>
      </div>
      <h2 className="title">{data.title}</h2>
      <p className="desc">{data.description}</p>

      <button className="btn-red mt-4 w-full mt-11">Failed</button>
    </div>
  );
};
export default FailedTask;
