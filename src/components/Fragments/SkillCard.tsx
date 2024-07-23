import React from 'react';

interface SkillCardProps {
  imageUrl: string;
  name: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ imageUrl, name }) => {
  return (
    <div className="rounded-full w-full h-44 px-5 flex justify-center items-center flex-col bg-transparent border-2 border-neutral-800 hover:border-white filter grayscale hover:grayscale-0">
      <img
        src={imageUrl}
        alt={name}
        width={100}
        height={100}
        className="object-cover w-16 h-16"
      />
      <p className="text-center text-base font-normal">{name}</p>
    </div>
  );
};

export default SkillCard;
