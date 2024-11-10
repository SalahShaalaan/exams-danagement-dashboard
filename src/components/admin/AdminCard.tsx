interface AdminCardProps {
  name: string;
  position: string;
  image: string;
}

export default function AdminCard({ name, position, image }: AdminCardProps) {
  return (
    <div className="rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="w-full flex flex-col items-center p-6">
        <img
          src={image}
          alt={`${name}'s profile`}
          className="w-60 h-60 rounded-full object-cover border-4 border-slate-200 dark:border-slate-700"
        />
        <div className="p-6 text-center">
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">
            {name}
          </h2>
          <h4 className="text-slate-600 dark:text-slate-400 mt-4">
            {position}
          </h4>
        </div>
      </div>
    </div>
  );
}
