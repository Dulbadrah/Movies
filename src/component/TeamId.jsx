export const TeamId = ({ directors, writers, stars }) => {
  return (
    <div className="flex flex-col gap-4 border-t border-gray-700 pt-4">
      <div className="flex items-start gap-12">
        <p className="text-[20px] font-medium w-[100px]">Director</p>
        <div className="flex gap-6">
          {directors?.slice(0, 1).map((director) => (
            <p key={director?.name}>{director?.name}</p>
          ))}
        </div>
      </div>

      <div className="flex items-start gap-12 border-t border-gray-700 pt-4">
        <p className="text-[20px] font-medium w-[100px]">Writers</p>
        <div className="flex gap-6">
          {writers?.slice(0, 3).map((writer) => (
            <p key={writer?.name}>{writer?.name}</p>
          ))}
        </div>
      </div>

      <div className="flex items-start gap-12 border-t border-gray-700 pt-4">
        <p className="text-[20px] font-medium w-[100px]">Stars</p>
        <div className="flex gap-6">
          {stars?.slice(0, 4).map((star) => (
            <p key={star?.name}>{star?.name}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
