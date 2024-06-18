import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function Contact() {
  return (
    <>
      <div className="bg-black">
        <div className="min-h-screen flex justify-center items-center">
          <div className="max-w-[1024px] w-full py-5 flex justify-center items-center gap-y-5 flex-col text-white">
            <h1 className="text-center font-bold text-3xl w-full">
              Contact Me
            </h1>
            <form action="" className="px-5 space-y-10 w-full">
              <Input
                type="text"
                placeholder="Name"
                className="bg-transparent text-white"
              />
              <Input
                type="email"
                placeholder="Email"
                className="bg-transparent text-white"
              />
              <Input
                type="text"
                placeholder="Subject"
                className="bg-transparent text-white"
              />
              <Textarea
                className="bg-transparent text-white"
                placeholder="Message"
              />
              <Button
                variant="secondary"
                className="w-full non-active"
                disabled
              >
                Send
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
