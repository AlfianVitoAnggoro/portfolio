import React from 'react';

interface CertificateCardProps {
  image: string;
  author: string;
  year: Number;
  certificateName: string;
}

const CertificateCard: React.FC<CertificateCardProps> = ({
  image,
  author,
  year,
  certificateName,
}) => {
  return (
    <div className="rounded w-auto h-fit mx-5">
      <div className="h-52 w-full hover:scale-110">
        <img
          src={'images/certificates/' + image}
          alt="Project"
          width={300}
          height={300}
          className="w-full h-full object-cover rounded"
        />
      </div>
      <div className="text-white p-3 text-center">
        <h1 className="font-medium text-medium">{author + '-' + year}</h1>
        <p className="text-lg font-bold">{certificateName}</p>
      </div>
    </div>
  );
};

export default CertificateCard;
