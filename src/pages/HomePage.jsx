// // import React from 'react'
// // import NavBar from '../components/NavBar'

// // function HomePage() {
// //   return (
// //     <NavBar />
// //   )
// // }

// // export default HomePage

// import React from 'react';
// import NavBar from '../components/NavBar';

// function HomePage() {
//   return (
//     <>
//       <NavBar />
//       <div className="bg-gray-100 min-h-screen">
//         <div className="container mx-auto px-4 py-8">
//           <h2 className="text-3xl font-bold text-black-800 mb-4">About Me</h2>
//           <p className="text-lg text-black-700 leading-relaxed">
//             Passionate Junior Web Developer with a good foundation in front-end and back-end technologies.
//             Eager to contribute skills in HTML, CSS, JavaScript, and familiarity with frameworks like React.
//             Dedicated to continuous learning and staying updated on industry trends.
//             Excited about collaborating with dynamic teams to create innovative and user-friendly web solutions.
//             Open to new opportunities to grow and make a positive impact in the tech industry.
//             Let's connect and explore how we can work together to bring digital ideas to life!
//             #WebDevelopment #JuniorDeveloper #TechEnthusiast
//           </p>
//         </div>
//       </div>
//     </>
//   );
// }

// export default HomePage;


import React from 'react';
import NavBar from '../components/NavBar';

function HomePage() {
  return (
    <>
      <NavBar />
      <div className="bg-gradient-to-br from-blue-400 to-purple-500 min-h-screen flex items-center justify-center">
        <div className="max-w-4xl bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Passionate Junior Web Developer with a good foundation in front-end and back-end technologies. Eager to contribute skills in HTML, CSS, JavaScript, and familiarity with frameworks like React. Dedicated to continuous learning and staying updated on industry trends. Excited about collaborating with dynamic teams to create innovative and user-friendly web solutions. Open to new opportunities to grow and make a positive impact in the tech industry. Let's connect and explore how we can work together to bring digital ideas to life! #WebDevelopment #JuniorDeveloper #TechEnthusiast
          </p>
        </div>
      </div>
    </>
  );
}

export default HomePage;
