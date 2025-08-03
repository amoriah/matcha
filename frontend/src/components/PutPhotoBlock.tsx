import { useState } from 'react';

export const PutPhotoBlock = () => {
  const [photo, setPhoto] = useState<any>(null);

  const handleAddFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPhoto(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full flex items-center justify-center  border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500">
      <label className="cursor-pointer items-center">
        {photo ? (
          <img
            src={photo}
            alt="photo"
            className="w-full h-full not-first:object-cover rounded-xl"
          />
        ) : (
          <svg
            fill="#4a5565"
            height="150px"
            width="150px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 500 500"
            enable-background="new 0 0 500 500"
          >
            <g>
              <path d="M306,192h-48v-48c0-4.4-3.6-8-8-8s-8,3.6-8,8v48h-48c-4.4,0-8,3.6-8,8s3.6,8,8,8h48v48c0,4.4,3.6,8,8,8s8-3.6,8-8v-48h48 c4.4,0,8-3.6,8-8S310.4,192,306,192z"></path>
            </g>
          </svg>
        )}

        <input type="file" className="hidden" onChange={handleAddFile} />
      </label>
    </div>
  );
};
