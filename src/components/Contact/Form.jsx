import { motion } from "framer-motion";
import bgimg from "../../assets/BgImgContact.png";

function Form() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0, }}
      whileInView={{ y: 0, opacity: 1, }}
      transition={{ duration: 1 }}
      className="w-[400px] md:w-[500px] h-full p-8 pt-10 rounded-lg bg-black/30 m-auto md:m-0 shadow-lg bg-no-repeat"
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      <h1 className="text-xl m-2 mt-4 text-center text-gray-300">
        Send Message
      </h1>

      <form className="flex flex-col gap-5">
        {/* Full Name Field */}
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-sm font-semibold text-gray-500">
            Full Name
          </label>
          <input
            required
            name="name"
            id="name"
            type="text"
            className="w-full p-3 text-white bg-transparent border border-black/50 rounded-lg focus:outline-none border-sky-500"
          />
        </div>

        {/* Company Email Field */}
        <div className="flex flex-col gap-1">
          <label
            htmlFor="email"
            className="text-sm font-semibold text-gray-500"
          >
            Company Email
          </label>
          <input
            required
            name="email"
            id="email"
            type="email"
            className="w-full p-3 text-white bg-transparent border border-black/50 rounded-lg focus:outline-none border-sky-500"
          />
        </div>

        {/* Help Request Field */}
        <div className="flex flex-col gap-1">
          <label
            htmlFor="textarea"
            className="text-sm font-semibold text-gray-500"
          >
            How Can We Help You?
          </label>
          <textarea
            required
            id="textarea"
            name="textarea"
            rows="5"
            className="w-full p-3 text-white bg-transparent border rounded-lg resize-none focus:outline-none border-sky-500"
          />
        </div>

        {/* Submit Button */}
        <motion.div
          className="text-gray-100 text-xl p-2 rounded-full text-center my-1 bg-sky-500 hover:bg-sky-700 m-auto mt-10 w-24 cursor-pointer"
          whileHover={{ scale: 1.1, boxShadow: "1px 1px 2px #0369a1" }}
        >
          <button type="submit">Send</button>
        </motion.div>
      </form>
    </motion.div>
  );
}

export default Form;
