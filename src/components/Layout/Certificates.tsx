import CertificateCard from '../Fragments/CertificateCard';

export default function Certificates() {
  return (
    <>
      <div className="bg-black">
        <div className="min-h-screen flex justify-start items-center flex-col gap-5 py-10  text-white">
          <h1 className="text-center font-bold text-3xl mb-3">Certificates</h1>
          <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-5 max-w-[1024px]">
            <CertificateCard
              image="bpptik.png"
              author="BPPTIK"
              year={2022}
              certificateName="Junior Web Developer"
            />
            <CertificateCard
              image="Belajar-Dasar-Git-Dengan-Github.png"
              author="Dicoding"
              year={2022}
              certificateName="Belajar Dasar GIT dengan GITHUB"
            />
            <CertificateCard
              image="FrontEndExpert.png"
              author="Dicoding"
              year={2022}
              certificateName="Front End Expert"
            />
            <CertificateCard
              image="Dicoding-Sertifikat-Kelulusan.png"
              author="Dicoding"
              year={2022}
              certificateName="Kelulusan Kelas FE and BE"
            />
            <CertificateCard
              image="Architecting-On-AWS.png"
              author="Dicoding"
              year={2023}
              certificateName="Architecting On AWS"
            />
            <CertificateCard
              image="BackEndFundamental.png"
              author="Dicoding"
              year={2023}
              certificateName="Back End Fundamental"
            />
            <CertificateCard
              image="BWA-MERN-Stack.png"
              author="BWA"
              year={2023}
              certificateName="MERN Stack"
            />
            <CertificateCard
              image="Memulai-Pemrograman-Dart.png"
              author="Dicoding"
              year={2023}
              certificateName="Memulai Pemrograman Dengan Dart"
            />
          </div>
        </div>
      </div>
    </>
  );
}
