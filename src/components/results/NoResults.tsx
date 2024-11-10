interface NoResultsProps {
  translations: {
    noResults: string;
    noResultsSubtext: string;
  };
}

const NoResults: React.FC<NoResultsProps> = ({ translations: t }) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 bg-white dark:bg-slate-800 rounded-xl">
      <div className="text-slate-600 dark:text-slate-300 text-xl font-medium mb-2 text-center">
        {t.noResults}
      </div>
      <div className="text-slate-500 dark:text-slate-400 text-sm text-center">
        {t.noResultsSubtext}
      </div>
    </div>
  );
};

export default NoResults;
