import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const ProjectCard = ({ link, image, name, children, }) => {
    return (_jsx("div", { className: "bg-black w-auto mx-5", children: _jsxs("a", { href: link, target: "_blank", rel: "noopener noreferrer", className: "relative rounded h-40 tablet:h-50 w-full flex items-center justify-center", children: [_jsx("div", { className: "absolute z-10 h-full w-full hover:opacity-25", children: _jsx("img", { src: 'images/projects/' + image, alt: name, width: 300, height: 300, className: "w-full h-full object-cover rounded" }) }), _jsxs("div", { className: "text-white p-5", children: [_jsx("h1", { className: "font-bold", children: name }), _jsx("p", { className: "text-sm", children: children })] })] }) }));
};
export default ProjectCard;
