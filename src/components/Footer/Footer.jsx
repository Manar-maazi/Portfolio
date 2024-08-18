import wave from '../../assets/wave.svg';

function Footer() {
  return (
    <div
      className="relative h-60 bg-no-repeat bg-bottom  flex items-center justify-center text-gray-500 text-sm mt-20"
      style={{ backgroundImage: `url(${wave})`, backgroundSize: 'cover' }}
    >
      <div className="relative z-10 -bottom-20 text-gray-300">
        © 2024 Created by Manar
      </div>
    </div>
  );
}

export default Footer;
