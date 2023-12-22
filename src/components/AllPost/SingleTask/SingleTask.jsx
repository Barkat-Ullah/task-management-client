/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const SingleTask = ({ task }) => {
  const {
    date,
    description,
    level,
    title,
    userEmail,
    userImage,
    userName,
    _id,
  } = task;

  return (
    <div className="w-full max-w-xs px-8 py-4 mt-16 bg-teal-50 rounded-lg shadow-lg dark:bg-gray-800">
      <div className="flex justify-center -mt-16 md:justify-end">
        <img
          className="object-cover w-20 h-20 border-2 border-teal-500 rounded-full dark:border-teal-400"
          alt="Testimonial avatar"
          src={userImage}
        />
      </div>

      <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">
        {title}
      </h2>

      <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">
        {description}
      </p>

      <h2 className="text-teal-400">Priority level {level}</h2>

      <div className="flex justify-end mt-4">
        <a
          href="#"
          className="text-lg font-medium text-teal-600 dark:text-teal-300"
          tabindex="0"
          role="link"
        >
          {userName}
        </a>
      </div>
    </div>
  );
};

export default SingleTask;
