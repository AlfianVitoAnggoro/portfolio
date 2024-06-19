import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const CertificateCard = ({ image, author, year, certificateName, }) => {
    return (_jsxs("div", { className: "rounded w-auto h-fit mx-5", children: [_jsx("div", { className: "h-52 w-full hover:scale-110", children: _jsx("img", { src: 'images/certificates/' + image, alt: "Project", width: 300, height: 300, className: "w-full h-full object-cover rounded" }) }), _jsxs("div", { className: "text-white p-3 text-center", children: [_jsx("h1", { className: "font-medium text-medium", children: author + '-' + year }), _jsx("p", { className: "text-lg font-bold", children: certificateName })] })] }));
};
export default CertificateCard;
