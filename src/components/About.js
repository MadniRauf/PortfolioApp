import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            About Me
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Profile Content */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="space-y-6"
              >
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  👋 Hi! I'm <strong className="text-blue-600 dark:text-blue-400">Abdul Rauf</strong>, 
                  a Full Stack Developer with 3+ years of experience building modern web applications. 
                  I specialize in creating efficient, scalable solutions using cutting-edge technologies.
                </p>

               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: "-100px" }}
                 className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl dark:shadow-none border border-gray-100 dark:border-gray-700"
               >
                 <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 text-center">
                   Technical Arsenal
                 </h3>
                 
                 <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                   {[
                     { name: 'React/Next.js', icon: '💠', level: 'Expert', color: 'text-blue-500' },
                     { name: 'Node.js', icon: '🟢', level: 'Advanced', color: 'text-green-500' },
                     { name: 'TypeScript', icon: '🔷', level: 'Expert', color: 'text-blue-400' },
                     { name: 'AWS/Docker', icon: '☁️', level: 'Intermediate', color: 'text-orange-500' },
                     { name: 'MongoDB', icon: '🍃', level: 'Advanced', color: 'text-green-400' },
                     { name: 'Tailwind', icon: '🎨', level: 'Expert', color: 'text-cyan-400' },
                   ].map((skill, index) => (
                     <motion.div
                       key={index}
                       whileHover={{ y: -5 }}
                       className="p-6 rounded-xl bg-gradient-to-br from-white dark:from-gray-700 to-gray-50 dark:to-gray-800 border border-gray-100 dark:border-gray-600 hover:shadow-lg transition-all duration-300"
                     >
                       <div className={`text-4xl mb-4 ${skill.color}`}>
                         {skill.icon}
                       </div>
                       <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                         {skill.name}
                       </h4>
                       <div className="flex items-center space-x-2">
                         <div className="h-2 w-full bg-gray-200 dark:bg-gray-600 rounded-full">
                           <div 
                             className={`h-full rounded-full ${skill.color} bg-opacity-80`}
                             style={{ width: 
                               skill.level === 'Expert' ? '90%' : 
                               skill.level === 'Advanced' ? '75%' : '60%' 
                             }}
                           />
                         </div>
                       </div>
                     </motion.div>
                   ))}
                 </div>
               </motion.div>
              </motion.div>

              <motion.div
                initial={{ x: -20 }}
                whileInView={{ x: 0 }}
                className="bg-blue-50 dark:bg-blue-900 p-6 rounded-xl"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Professional Journey
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">
                        Abdul Rauf · Full Stack Developer
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 mt-1">
                        Leading development of enterprise-scale applications, optimizing backend 
                        services, and implementing CI/CD pipelines.
                      </p>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Profile Image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <img
                  src="/images/profile.jpg"
                  alt="Abdul Rauf"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-800 px-6 py-2 rounded-full shadow-md border border-gray-200 dark:border-gray-700">
                <span className="text-gray-900 dark:text-white font-medium">
                  Open for Opportunities
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;