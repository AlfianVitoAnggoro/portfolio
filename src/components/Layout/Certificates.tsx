import CertificateCard from '../Fragments/CertificateCard';

export default function Certificates() {
  return (
    <>
      <div className="bg-black">
        <div className="min-h-screen flex justify-start items-center flex-col px-10 text-white">
          <h1 className="text-center font-bold text-[3rem] mb-3">
            Certificates
          </h1>
          <CertificateCard />
        </div>
      </div>
    </>
  );
}
