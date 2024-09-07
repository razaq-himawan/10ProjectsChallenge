import Image from 'next/image';

const ContactPage = () => {
  return (
    <div className="flex items-center gap-24 max-md:flex-col">
      <div className="flex-1 relative h-[500px] max-md:hidden">
        <Image
          src="/contact.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>
      <div className="flex-1">
        <form
          action=""
          className="flex flex-col gap-5"
        >
          <input
            className="p-5 rounded-md bg-bgsoft text-white"
            type="text"
            placeholder="Name and Surname"
          />
          <input
            className="p-5 rounded-md bg-bgsoft text-white"
            type="text"
            placeholder="Email Address"
          />
          <input
            className="p-5 rounded-md bg-bgsoft text-white"
            type="text"
            placeholder="Phone Number (Optional)"
          />
          <textarea
            className="p-5 rounded-md bg-bgsoft text-white"
            name=""
            id=""
            cols={30}
            rows={5}
            placeholder="Message"
          ></textarea>
          <button className="p-5 bg-primary text-white font-bold rounded-md">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};
export default ContactPage;
