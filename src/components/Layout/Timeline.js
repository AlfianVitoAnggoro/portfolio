import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Timeline from '../Fragments/Timeline';
export default function Skills() {
    return (_jsx(_Fragment, { children: _jsx("div", { className: "bg-black", children: _jsxs("div", { className: "min-h-screen flex justify-start items-center flex-col gap-5 py-10 laptop:justify-center text-white", children: [_jsx("h1", { className: "text-center font-bold text-3xl mb-3 max-w-[1024px]", children: "Timelines" }), _jsx("div", { className: "max-w-[1024px]", children: _jsx(Timeline, {}) })] }) }) }));
}
