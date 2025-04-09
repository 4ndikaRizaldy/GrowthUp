import React from "react";

const DayCard = ({ data, isDone, onDone }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-6 w-full max-w-md">
      <h2 className="text-2xl font-bold text-orange-600 mb-2">
        Hari {data.day}
      </h2>

      <p className="text-lg font-medium mb-4 text-gray-700 dark:text-gray-100">
        {data.challenge}
      </p>

      <div className="mb-4">
        <h3 className="font-semibold mb-1 text-gray-600 dark:text-gray-300">
          Habit:
        </h3>
        <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-200">
          {data.habits.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold mb-1 text-gray-600 dark:text-gray-300">
          Journal Prompt:
        </h3>
        <p className="italic text-gray-600 dark:text-gray-200 text-sm">
          "{data.journal}"
        </p>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold mb-1 text-gray-600 dark:text-gray-300">
          Affirmation:
        </h3>
        <p className="text-orange-500 text-sm dark:text-orange-300">
          "{data.affirmation}"
        </p>
      </div>

      <button
        onClick={() => onDone(isDone)}
        className={`mt-4 w-full py-2 rounded-xl font-semibold ${
          isDone
            ? "bg-red-200 text-red-800 hover:bg-red-300"
            : "bg-orange-500 text-white hover:bg-orange-600"
        }`}
      >
        {isDone ? "Batalkan Selesai ❌" : "Tandai Selesai"}
      </button>
    </div>
  );
};

export default DayCard;
