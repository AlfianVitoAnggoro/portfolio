import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const SkillCard = ({ image, name }) => {
    return (_jsxs("div", { className: "rounded-full w-full h-44 px-5 flex justify-center items-center flex-col bg-transparent border-2 border-neutral-800 hover:border-white filter grayscale hover:grayscale-0", children: [_jsx("img", { src: 'images/skills/' + image, alt: name, width: 100, height: 100, className: "object-cover w-16 h-16" }), _jsx("p", { className: "text-center text-base font-normal", children: name })] }));
};
export default SkillCard;
