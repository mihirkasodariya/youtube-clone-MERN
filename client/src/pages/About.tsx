const About = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
      <p className="text-lg leading-7 mb-4">
        Welcome to <strong>My Youtube</strong>, your go-to platform for
        uploading and exploring videos across a variety of categories!{" "}
        <strong>My YouTube</strong> is designed to explore videos creating
        channels and much more creativity, and innovation.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Features:</h2>
      <ul className="list-disc list-inside text-lg leading-7">
        <li>
          <strong>Create & Share:</strong> Upload your videos by creating
          channel and share so everyone can watch them.
        </li>
        <li>
          <strong>Discover Content:</strong> Explore videos across categories
          like Gaming, Tech, Anime, Travel, and more.
        </li>
        <li>
          <strong>Engage:</strong> Like, comment, and connect with other users
          to share your thoughts and ideas.
        </li>
        <li>
          <strong>Personalize:</strong> Customize your channel to showcase your
          brand and unique style.
        </li>
      </ul>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Our Technology Stack</h2>
      <p className="text-lg leading-7 mb-4">
        <strong>My YoutubeTube</strong> is powered by the MERN stack (MongoDB,
        Express.js, React.js, and Node.js), combined with:
      </p>
      <ul className="list-disc list-inside text-lg leading-7">
        <li>
          <strong>TypeScript:</strong> Ensuring type safety and scalability.
        </li>
        <li>
          <strong>Redux:</strong> Managing the state for a seamless user
          experience.
        </li>
        <li>
          <strong>Tailwind CSS:</strong> Crafting a modern and responsive
          design.
        </li>
        <li>
          <strong>Cloudinary:</strong> Handling media uploads and optimization.
        </li>
      </ul>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Our Vision</h2>
      <p className="text-lg leading-7 mb-4">
        At <strong>My YouTube</strong>, we believe in empowering everyone to
        share their voice. Whether you're a creator, an educator, or just here
        for fun, our platform is built to support your journey. We aim to build
        a space that's inclusive, dynamic, and inspiring.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Contact Us</h2>
      <p className="text-lg leading-7">
        Have questions or feedback? We'd love to hear from you!
      </p>
      <ul className="list-none text-lg leading-7">
        <li>
          <strong>Email:</strong> support@gmail.com
        </li>
        <li>
          <strong>Follow Us:</strong>{" "}
          <a href="#" className="text-blue-500 underline">
            Twitter
          </a>
          ,{" "}
          <a href="#" className="text-blue-500 underline">
            Instagram
          </a>
          ,{" "}
          <a href="#" className="text-blue-500 underline">
            Facebook
          </a>
        </li>
      </ul>
    </div>
  );
};

export default About;
