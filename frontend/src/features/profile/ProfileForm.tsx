import { useState } from 'react';
import { Button, Select, Chip, PutPhotoBlock } from '@components';
import { interests, genderList } from './constants';

interface IProfileForm {
  gender: string;
  orientation: string;
  about: string;
  interests: string[];
  photos: any;
}

export const ProfileForm = () => {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<IProfileForm>({
    gender: '',
    orientation: '',
    about: '',
    interests: [],
    photos: null,
  });

  const handleNext = () =>
    setStep(prev => Math.min(prev + 1, steps.length - 1));

  const handleBack = () => setStep(prev => Math.max(prev - 1, 0));

  const handleSelectGender = (e: any) => {
    setForm({ ...form, gender: e.target.value });
  };

  const handleSelectOrientation = (e: any) => {
    setForm({ ...form, orientation: e.target.value });
  };

  const toggleTags = (tag: string) => {
    if (!form.interests.includes(tag) && form.interests.length < 10) {
      setForm(prev => ({ ...prev, interests: [...prev.interests, tag] }));
    } else {
      const newSelected = form.interests.filter(item => item !== tag);
      setForm(prev => ({ ...prev, interests: newSelected }));
    }
  };

  const steps = [
    {
      label: 'I am...',
      content: (
        <Select
          options={genderList}
          value={form.gender}
          changeValue={handleSelectGender}
        />
      ),
    },
    {
      label: 'I am interested in...',
      content: (
        <Select
          options={genderList}
          value={form.orientation}
          changeValue={handleSelectOrientation}
        />
      ),
    },
    {
      //todo max 600
      label: 'About me',
      content: (
        <textarea
          value={form.about}
          onChange={e => setForm({ ...form, about: e.target.value })}
          placeholder="Write something..."
          className="w-140 h-60 px-4 py-3 border border-gray-300 rounded-lg   focus:border-lime-500 focus:outline focus:outline-lime-500 text-lg"
        />
      ),
    },
    {
      label: 'My interests',
      content: (
        <div className="flex flex-row flex-wrap gap-3 justify-items-center">
          {interests.map((tag, i) => (
            <Chip
              key={`${tag}-${i}`}
              isSelected={form.interests.some(tags => tags === tag)}
              label={tag}
              toggle={toggleTags}
            />
          ))}
        </div>
      ),
    },
    {
      label: 'My photos',
      content: (
        <div className="flex  gap-2">
          <PutPhotoBlock />
          <div className="flex flex-col gap-2 w-8/11">
            <PutPhotoBlock />
            <div className="flex gap-2">
              <PutPhotoBlock />
              <div className="flex flex-col gap-2  w-8/11">
                <PutPhotoBlock />
                <PutPhotoBlock />
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full h-full flex items-start pt-4 justify-center ">
      <div className="flex flex-col items-center gap-8 p-6 border border-gray-100 rounded-lg shadow-2xl w-3xl">
        <h2 className="font-bold text-3xl text-gray-600">
          {`Fill your Profile - Step ${step + 1}`}{' '}
        </h2>
        <h2 className="text-2xl text-gray-500">{steps[step].label}</h2>
        <div className="mb-4">{steps[step].content}</div>
        <div className="w-full h-full flex justify-evenly">
          <Button
            color={'bg-matcha-bg'}
            text={'Back'}
            click={handleBack}
            disabled={step === 0}
          />
          <Button
            color={'bg-matcha-bg'}
            text={'Next'}
            click={handleNext}
            // disabled={step === steps.length - 1}
          />
        </div>
      </div>
    </div>
  );
};
