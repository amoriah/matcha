import { useState } from 'react';
import { Chip } from '@components';

const interests = [
  '#vegan',
  '#vegetarian',
  '#gamer',
  '#geek',
  '#yoga',
  '#books',
  '#travel',
  '#musiclover',
  '#cinemabuff',
  '#art',
  '#tattoos',
  '#piercings',
  '#coffee',
  '#tea',
  '#catperson',
  '#doglover',
  '#sustainability',
  '#fitness',
  '#introvert',
  '#extrovert',
  '#dancing',
  '#hiking',
  '#camping',
  '#boardgames',
  '#lgbtqfriendly',
  '#fashion',
  '#photography',
  '#foodie',
  '#languagelearner',
  '#openrelationships',
];

const genderList = [
  'man',
  'woman',
  'non-binar',
  'transgender',
  'other',
  'prefer not to say',
];

export const ProfileForm = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleTags = (selected: string) => {
    if (!selectedTags.includes(selected) && selectedTags.length <= 10) {
      setSelectedTags([...selectedTags, selected]);
    } else {
      const newSelected = selectedTags.filter(tag => tag !== selected);
      setSelectedTags(newSelected);
    }
  };

  const handleSubmit = () => {
    console.log('submit');
  };

  //первый див и форма и заголовок (исключая иконку) и обертка полей и у самих полей одинаковые по стилям с auth
  return (
    <div className="w-full h-full flex items-start pt-4 justify-center ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-8 p-6 border border-gray-100 rounded-lg shadow-2xl w-3xl"
      >
        <div className="flex justify-center items-center gap-2">
          <h2 className="font-bold text-3xl text-gray-600">Your Profile</h2>
        </div>
        <div className="flex flex-col relative">
          <label>I am...</label>
          <select
            id="gender"
            name="gender"
            className="w-80 h-12 px-4 py-3 border border-gray-300 rounded-lg
     focus:border-lime-500 focus:outline focus:outline-lime-500 text-lg"
          >
            {genderList.map((gender, i) => (
              <option key={`${gender}-${i}`} value={gender}>
                {gender}
              </option>
            ))}
          </select>
          <label>I am interested in...</label>
          <select
            id="gender"
            name="gender"
            className="w-80 h-12 px-4 py-3 border border-gray-300 rounded-lg
     focus:border-lime-500 focus:outline focus:outline-lime-500 text-lg"
          >
            {genderList.map((gender, i) => (
              <option key={`interested-${gender}-${i}`} value={gender}>
                {gender}
              </option>
            ))}
          </select>
          <label>About me</label>
          <textarea
            id="about"
            name="about"
            placeholder="Tell about yourself..."
            className="w-80 h-12 px-4 py-3 border border-gray-300 rounded-lg
     focus:border-lime-500 focus:outline focus:outline-lime-500 text-lg"
          ></textarea>
          <div className="w-full">
            <label>My interests</label>
            <div className="flex flex-row flex-wrap gap-2">
              {interests.map((tag, i) => (
                <Chip
                  key={`${tag}-${i}`}
                  isSelected={selectedTags.some(tags => tags === tag)}
                  label={tag}
                  toggle={toggleTags}
                />
              ))}
            </div>
          </div>
          <div className="w-full">
            <label>Your photos</label>
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
