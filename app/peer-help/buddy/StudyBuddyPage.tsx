// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";

// export default function StudyBuddyPage() {
//   const [selectedYear, setSelectedYear] = useState("");
//   const [selectedBranch, setSelectedBranch] = useState("");
//   const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
//   const [scrollY, setScrollY] = useState(0);

//   const years = ["1st Year", "2nd Year", "3rd Year", "4th Year"];
//   const branches = ["CSE", "ECE", "EEE", "Mechanical", "Civil", "IT", "AIDS"];
//   const interests = [
//     "Web Development",
//     "Machine Learning",
//     "Data Science",
//     "Mobile Apps",
//     "Competitive Programming",
//     "AI/ML",
//     "Blockchain",
//     "Cloud Computing"
//   ];

//   useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const toggleInterest = (interest: string) => {
//     setSelectedInterests(prev =>
//       prev.includes(interest)
//         ? prev.filter(i => i !== interest)
//         : [...prev, interest]
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 relative overflow-hidden">
      
//       {/* Animated Background Elements */}
//       <div className="fixed inset-0 pointer-events-none">
//         <div 
//           className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-float"
//           style={{ transform: `translateY(${scrollY * 0.1}px)` }}
//         />
//         <div 
//           className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-float"
//           style={{ animationDelay: '2s', transform: `translateY(${scrollY * 0.15}px)` }}
//         />
//         <div 
//           className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-200/20 rounded-full blur-3xl animate-float"
//           style={{ animationDelay: '4s', transform: `translate(-50%, -50%) translateY(${scrollY * 0.2}px)` }}
//         />
//       </div>

//       {/* Floating Particles */}
//       {[...Array(15)].map((_, i) => (
//         <div
//           key={i}
//           className="fixed w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-float pointer-events-none"
//           style={{
//             left: `${Math.random() * 100}%`,
//             top: `${Math.random() * 100}%`,
//             animationDelay: `${Math.random() * 5}s`,
//             animationDuration: `${3 + Math.random() * 4}s`,
//           }}
//         />
//       ))}

//       <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        
//         {/* Header Section with Hero Card */}
//         <div className="mb-12 animate-fade-in-up">
//           <Link 
//             href="/buddy-matching" 
//             className="inline-flex items-center gap-2 text-zinc-600 hover:text-blue-600 transition-colors mb-6 group"
//           >
//             <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//             </svg>
//             <span className="font-medium">Back to Matching</span>
//           </Link>

//           <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 rounded-[50px] p-8 md:p-12 shadow-2xl relative overflow-hidden group">
//             {/* Animated gradient overlay */}
//             <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-white/10 to-purple-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
//             {/* Shimmer effect */}
//             <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
//               <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent" />
//             </div>

//             <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
//               <div className="flex-1">
//                 <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
//                   <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
//                   <span className="text-white text-sm font-semibold">500+ Active Buddies</span>
//                 </div>
                
//                 <h1 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight">
//                   Find Your Perfect
//                   <span className="block bg-gradient-to-r from-yellow-200 to-pink-200 bg-clip-text text-transparent">
//                     Study Buddy
//                   </span>
//                 </h1>
                
//                 <p className="text-blue-100 text-lg md:text-xl leading-relaxed max-w-2xl">
//                   Match with students who share your courses, goals, and study style. Collaborate, learn, and grow together.
//                 </p>
//               </div>

//               <div className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0">
//                 <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/30 to-pink-300/30 rounded-full blur-3xl animate-pulse" />
//                 <div className="relative w-full h-full animate-float">
//                   <Image
//                     src="/card11.png"
//                     alt="Study Buddy"
//                     fill
//                     className="object-contain drop-shadow-2xl"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Main Content Grid */}
//         <div className="grid md:grid-cols-3 gap-8 mb-12">
          
//           {/* Left Column - Filters */}
//           <div className="md:col-span-1 space-y-6">
            
//             {/* Profile Preview Card */}
//             <div className="bg-white rounded-3xl p-6 shadow-xl border-2 border-blue-100 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
//               <div className="flex items-center gap-4 mb-6">
//                 <div className="relative">
//                   <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
//                     U
//                   </div>
//                   <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-white" />
//                 </div>
//                 <div>
//                   <h3 className="font-bold text-zinc-900 text-lg">Your Profile</h3>
//                   <p className="text-sm text-zinc-500">Complete to get better matches</p>
//                 </div>
//               </div>
              
//               <div className="space-y-3">
//                 <div className="flex items-center justify-between p-3 bg-blue-50 rounded-xl">
//                   <span className="text-sm font-medium text-zinc-700">Profile Complete</span>
//                   <span className="text-sm font-bold text-blue-600">75%</span>
//                 </div>
//                 <div className="w-full bg-blue-100 rounded-full h-2">
//                   <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" style={{ width: '75%' }} />
//                 </div>
//               </div>
//             </div>

//             {/* Filters Card */}
//             <div className="bg-white rounded-3xl p-6 shadow-xl border-2 border-blue-100 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
//               <h2 className="text-2xl font-black text-zinc-900 mb-6 flex items-center gap-2">
//                 <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
//                 </svg>
//                 Filters
//               </h2>

//               {/* Year Selection */}
//               <div className="mb-6">
//                 <label className="block text-sm font-bold text-zinc-700 mb-3">Year</label>
//                 <div className="grid grid-cols-2 gap-2">
//                   {years.map((year) => (
//                     <button
//                       key={year}
//                       onClick={() => setSelectedYear(year)}
//                       className={`px-4 py-3 rounded-xl font-semibold text-sm transition-all transform hover:scale-105 ${
//                         selectedYear === year
//                           ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
//                           : 'bg-gray-100 text-zinc-700 hover:bg-gray-200'
//                       }`}
//                     >
//                       {year}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* Branch Selection */}
//               <div className="mb-6">
//                 <label className="block text-sm font-bold text-zinc-700 mb-3">Branch</label>
//                 <div className="relative">
//                   <select
//                     value={selectedBranch}
//                     onChange={(e) => setSelectedBranch(e.target.value)}
//                     className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none font-medium text-zinc-700 appearance-none bg-white cursor-pointer transition-all"
//                   >
//                     <option value="">Select Branch</option>
//                     {branches.map((branch) => (
//                       <option key={branch} value={branch}>{branch}</option>
//                     ))}
//                   </select>
//                   <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                   </svg>
//                 </div>
//               </div>

//               {/* Interests */}
//               <div>
//                 <label className="block text-sm font-bold text-zinc-700 mb-3">Interests</label>
//                 <div className="flex flex-wrap gap-2">
//                   {interests.map((interest) => (
//                     <button
//                       key={interest}
//                       onClick={() => toggleInterest(interest)}
//                       className={`px-3 py-2 rounded-full text-xs font-semibold transition-all transform hover:scale-105 ${
//                         selectedInterests.includes(interest)
//                           ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md'
//                           : 'bg-gray-100 text-zinc-700 hover:bg-gray-200'
//                       }`}
//                     >
//                       {interest}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               <button className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
//                 Apply Filters
//               </button>
//             </div>
//           </div>

//           {/* Right Column - Matches */}
//           <div className="md:col-span-2">
//             <div className="flex items-center justify-between mb-6">
//               <h2 className="text-3xl font-black text-zinc-900">
//                 Available Buddies
//                 <span className="ml-3 text-lg font-medium text-blue-600">(24)</span>
//               </h2>
              
//               <div className="flex gap-2">
//                 <button className="p-3 rounded-xl bg-white border-2 border-blue-100 hover:border-blue-300 transition-all">
//                   <svg className="w-5 h-5 text-zinc-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                   </svg>
//                 </button>
//                 <button className="p-3 rounded-xl bg-white border-2 border-blue-100 hover:border-blue-300 transition-all">
//                   <svg className="w-5 h-5 text-zinc-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
//                   </svg>
//                 </button>
//               </div>
//             </div>

//             {/* Buddy Cards */}
//             <div className="grid gap-6">
//               {[1, 2, 3, 4, 5, 6].map((buddy, idx) => (
//                 <div
//                   key={buddy}
//                   className="bg-white rounded-3xl p-6 shadow-lg border-2 border-blue-100 hover:border-blue-300 hover:shadow-2xl transition-all transform hover:-translate-y-1 group animate-fade-in-up"
//                   style={{ animationDelay: `${0.1 * idx}s` }}
//                 >
//                   <div className="flex flex-col md:flex-row gap-6">
//                     {/* Avatar */}
//                     <div className="flex-shrink-0">
//                       <div className="relative">
//                         <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 flex items-center justify-center text-white text-3xl font-bold shadow-xl group-hover:scale-110 transition-transform">
//                           {String.fromCharCode(65 + idx)}
//                         </div>
//                         <div className="absolute -bottom-2 -right-2 px-3 py-1 bg-green-400 text-white text-xs font-bold rounded-full shadow-lg">
//                           Online
//                         </div>
//                       </div>
//                     </div>

//                     {/* Info */}
//                     <div className="flex-1">
//                       <div className="flex items-start justify-between mb-3">
//                         <div>
//                           <h3 className="text-xl font-black text-zinc-900 group-hover:text-blue-600 transition-colors">
//                             Study Buddy {buddy}
//                           </h3>
//                           <p className="text-sm text-zinc-500 font-medium">3rd Year • CSE</p>
//                         </div>
//                         <div className="flex items-center gap-1 bg-yellow-100 px-3 py-1 rounded-full">
//                           <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
//                             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                           </svg>
//                           <span className="text-xs font-bold text-yellow-700">4.8</span>
//                         </div>
//                       </div>

//                       <p className="text-zinc-600 mb-4 line-clamp-2">
//                         Looking for someone to prepare for upcoming exams. Interested in Data Structures and Web Development.
//                       </p>

//                       {/* Tags */}
//                       <div className="flex flex-wrap gap-2 mb-4">
//                         <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
//                           Data Structures
//                         </span>
//                         <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">
//                           Algorithms
//                         </span>
//                         <span className="px-3 py-1 bg-pink-100 text-pink-700 text-xs font-semibold rounded-full">
//                           Web Dev
//                         </span>
//                       </div>

//                       {/* Stats */}
//                       <div className="flex items-center gap-6 text-sm text-zinc-500 mb-4">
//                         <div className="flex items-center gap-2">
//                           <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//                           </svg>
//                           <span>2 hrs/day</span>
//                         </div>
//                         <div className="flex items-center gap-2">
//                           <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//                           </svg>
//                           <span>12 buddies</span>
//                         </div>
//                       </div>

//                       {/* Actions */}
//                       <div className="flex gap-3">
//                         <button className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
//                           Connect
//                         </button>
//                         <button className="px-6 py-3 bg-gray-100 text-zinc-700 font-bold rounded-xl hover:bg-gray-200 transition-all">
//                           View Profile
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Load More */}
//             <button className="w-full mt-8 py-4 bg-white border-2 border-blue-200 text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all">
//               Load More Buddies
//             </button>
//           </div>
//         </div>

//         {/* Bottom CTA Section */}
//         <div className="bg-gradient-to-r from-zinc-900 via-blue-900 to-purple-900 rounded-[50px] p-8 md:p-12 text-center relative overflow-hidden animate-fade-in-up">
//           <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
          
//           <div className="relative z-10">
//             <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
//               Can't Find a Match?
//             </h2>
//             <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">
//               Create a request and let others find you! Get notified when someone matches your criteria.
//             </p>
//             <button className="px-8 py-4 bg-white text-zinc-900 font-bold rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all">
//               Create Study Request
//             </button>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-20px); }
//         }
//         @keyframes fade-in-up {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         @keyframes shimmer {
//           0% { transform: translateX(-100%); }
//           100% { transform: translateX(100%); }
//         }
//         .animate-float {
//           animation: float 4s ease-in-out infinite;
//         }
//         .animate-fade-in-up {
//           animation: fade-in-up 0.6s ease-out forwards;
//         }
//         .animate-shimmer {
//           animation: shimmer 2s infinite;
//         }
//       `}</style>
//     </div>
//   );
// }
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function StudyBuddyPage() {
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("");
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [scrollY, setScrollY] = useState(0);

  const years = ["1st Year", "2nd Year", "3rd Year", "4th Year"];
  const branches = ["CSE", "ECE", "EEE", "Mechanical", "Civil", "IT", "AIDS"];
  const interests = [
    "Web Development",
    "Machine Learning",
    "Data Science",
    "Mobile Apps",
    "Competitive Programming",
    "AI/ML",
    "Blockchain",
    "Cloud Computing"
  ];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleInterest = (interest: string) => {
    setSelectedInterests(prev =>
      prev.includes(interest)
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      
      {/* Subtle Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute top-20 left-10 w-72 h-72 bg-gray-100 rounded-full blur-3xl opacity-50"
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        />
        <div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-gray-50 rounded-full blur-3xl opacity-50"
          style={{ animationDelay: '2s', transform: `translateY(${scrollY * 0.08}px)` }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        
        {/* Header Section */}
        <div className="mb-8 animate-fade-in-up">
          <Link 
            href="/buddy-matching" 
            className="inline-flex items-center gap-2 text-zinc-600 hover:text-black transition-colors mb-6 group"
          >
            <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-medium">Back to Matching</span>
          </Link>

          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-black mb-2">
                Find Your Study Buddy
              </h1>
              <p className="text-zinc-600 text-lg">
                Connect with students who share your courses and goals
              </p>
            </div>
            <div className="hidden md:flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm font-semibold">500+ Active</span>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          
          {/* Left Column - Filters */}
          <div className="md:col-span-1 space-y-4">
            
            {/* Filters Card */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200 animate-fade-in-up sticky top-4">
              <h2 className="text-xl font-bold text-black mb-5 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                Filters
              </h2>

              {/* Year Selection */}
              <div className="mb-5">
                <label className="block text-sm font-semibold text-zinc-900 mb-2">Year</label>
                <div className="grid grid-cols-2 gap-2">
                  {years.map((year) => (
                    <button
                      key={year}
                      onClick={() => setSelectedYear(year)}
                      className={`px-3 py-2 rounded-lg font-medium text-sm transition-all ${
                        selectedYear === year
                          ? 'bg-black text-white'
                          : 'bg-gray-100 text-zinc-700 hover:bg-gray-200'
                      }`}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>

              {/* Branch Selection */}
              <div className="mb-5">
                <label className="block text-sm font-semibold text-zinc-900 mb-2">Branch</label>
                <div className="relative">
                  <select
                    value={selectedBranch}
                    onChange={(e) => setSelectedBranch(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-black focus:ring-1 focus:ring-black outline-none font-medium text-zinc-700 appearance-none bg-white cursor-pointer transition-all text-sm"
                  >
                    <option value="">Select Branch</option>
                    {branches.map((branch) => (
                      <option key={branch} value={branch}>{branch}</option>
                    ))}
                  </select>
                  <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Interests */}
              <div className="mb-5">
                <label className="block text-sm font-semibold text-zinc-900 mb-2">Interests</label>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest) => (
                    <button
                      key={interest}
                      onClick={() => toggleInterest(interest)}
                      className={`px-2.5 py-1.5 rounded-md text-xs font-medium transition-all ${
                        selectedInterests.includes(interest)
                          ? 'bg-black text-white'
                          : 'bg-gray-100 text-zinc-700 hover:bg-gray-200'
                      }`}
                    >
                      {interest}
                    </button>
                  ))}
                </div>
              </div>

              <button className="w-full bg-black text-white font-semibold py-3 rounded-lg hover:bg-zinc-800 transition-all">
                Apply Filters
              </button>

              <button className="w-full mt-2 text-zinc-600 font-medium py-2 rounded-lg hover:bg-gray-50 transition-all text-sm">
                Clear All
              </button>
            </div>
          </div>

          {/* Right Column - Matches */}
          <div className="md:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-black">
                Available Buddies
                <span className="ml-2 text-base font-normal text-zinc-500">(24 matches)</span>
              </h2>
              
              <div className="flex gap-2">
                <button className="p-2 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 transition-all">
                  <svg className="w-5 h-5 text-zinc-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
                <button className="p-2 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 transition-all">
                  <svg className="w-5 h-5 text-zinc-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Buddy Cards */}
            <div className="grid gap-5">
              {[1, 2, 3, 4, 5, 6].map((buddy, idx) => (
                <div
                  key={buddy}
                  className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all group animate-fade-in-up"
                  style={{ animationDelay: `${0.05 * idx}s` }}
                >
                  <div className="flex gap-5">
                    {/* Avatar Section */}
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-700 overflow-hidden">
                          <Image
                            src="/card11.png"
                            alt={`Buddy ${buddy}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-4 border-white flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full" />
                        </div>
                      </div>
                    </div>

                    {/* Info Section */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-black group-hover:underline">
                            Study Partner {buddy}
                          </h3>
                          <p className="text-sm text-zinc-500 font-medium">CSE • 3rd Year</p>
                        </div>
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-all">
                          <svg className="w-5 h-5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                          </svg>
                        </button>
                      </div>

                      {/* Stats Row */}
                      <div className="flex items-center gap-4 mb-3">
                        <div className="flex items-center gap-1">
                          <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span className="text-sm font-semibold text-zinc-900">4.8</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-zinc-500">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                          <span>50+ Clients</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-zinc-500">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>$65/hr</span>
                        </div>
                      </div>

                      <p className="text-sm text-zinc-600 mb-4 line-clamp-2">
                        Passionate about Data Structures and Algorithms. Looking for study partners to prepare for placements and competitive programming contests.
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-gray-100 text-zinc-700 text-xs font-medium rounded-lg border border-gray-200">
                          App Design
                        </span>
                        <span className="px-3 py-1 bg-gray-100 text-zinc-700 text-xs font-medium rounded-lg border border-gray-200">
                          Web Design
                        </span>
                        <span className="px-3 py-1 bg-gray-100 text-zinc-700 text-xs font-medium rounded-lg border border-gray-200">
                          Figma
                        </span>
                        <span className="text-xs text-zinc-500 flex items-center px-2">+6</span>
                      </div>

                      {/* Action Button */}
                      <button className="w-full bg-black text-white font-semibold py-3 rounded-xl hover:bg-zinc-800 transition-all">
                        Get In Touch
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <button className="w-full mt-6 py-3 bg-white border border-gray-200 text-zinc-700 font-semibold rounded-lg hover:bg-gray-50 transition-all">
              Load More Buddies
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}