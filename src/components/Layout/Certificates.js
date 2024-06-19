import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import CertificateCard from '../Fragments/CertificateCard';
export default function Certificates() {
    return (_jsx(_Fragment, { children: _jsx("div", { className: "bg-black", children: _jsxs("div", { className: "min-h-screen flex justify-start items-center flex-col gap-5 py-10  text-white", children: [_jsx("h1", { className: "text-center font-bold text-3xl mb-3", children: "Certificates" }), _jsxs("div", { className: "grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-5 max-w-[1024px]", children: [_jsx(CertificateCard, { image: "bpptik.png", author: "BPPTIK", year: 2022, certificateName: "Junior Web Developer" }), _jsx(CertificateCard, { image: "Belajar-Dasar-Git-Dengan-Github.png", author: "Dicoding", year: 2022, certificateName: "Belajar Dasar GIT dengan GITHUB" }), _jsx(CertificateCard, { image: "FrontEndExpert.png", author: "Dicoding", year: 2022, certificateName: "Front End Expert" }), _jsx(CertificateCard, { image: "Dicoding-Sertifikat-Kelulusan.png", author: "Dicoding", year: 2022, certificateName: "Kelulusan Kelas FE and BE" }), _jsx(CertificateCard, { image: "Architecting-On-AWS.png", author: "Dicoding", year: 2023, certificateName: "Architecting On AWS" }), _jsx(CertificateCard, { image: "BackEndFundamental.png", author: "Dicoding", year: 2023, certificateName: "Back End Fundamental" }), _jsx(CertificateCard, { image: "BWA-MERN-Stack.png", author: "BWA", year: 2023, certificateName: "MERN Stack" }), _jsx(CertificateCard, { image: "Memulai-Pemrograman-Dart.png", author: "Dicoding", year: 2023, certificateName: "Memulai Pemrograman Dengan Dart" })] })] }) }) }));
}
