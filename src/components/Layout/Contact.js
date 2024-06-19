import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
export default function Contact() {
    return (_jsx(_Fragment, { children: _jsx("div", { className: "bg-black", children: _jsx("div", { className: "min-h-screen flex justify-center items-center", children: _jsxs("div", { className: "max-w-[1024px] w-full py-5 flex justify-center items-center gap-y-5 flex-col text-white", children: [_jsx("h1", { className: "text-center font-bold text-3xl w-full", children: "Contact Me" }), _jsxs("form", { action: "", className: "px-5 space-y-10 w-full", children: [_jsx(Input, { type: "text", placeholder: "Name", className: "bg-transparent text-white" }), _jsx(Input, { type: "email", placeholder: "Email", className: "bg-transparent text-white" }), _jsx(Input, { type: "text", placeholder: "Subject", className: "bg-transparent text-white" }), _jsx(Textarea, { className: "bg-transparent text-white", placeholder: "Message" }), _jsx(Button, { variant: "secondary", className: "w-full non-active", disabled: true, children: "Send" })] })] }) }) }) }));
}
