import { FiStar } from 'react-icons/fi';

const Review = ({ r }) => {
  return (
    <div className="min-w-[280px] max-w-[320px] snap-center bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <img
            src={r.img}
            alt={r.username}
            className="w-12 h-12 rounded-full object-cover border-2 border-blue-500"
          />
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{r.username}</h3>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <FiStar
                  key={i}
                  size={16}
                  className={i < r.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                />
              ))}
            </div>
          </div>
        </div>
        <p className="text-gray-600 text-sm line-clamp-4">{r.rev}</p>
      </div>
    </div>
  );
};

export default Review;