'use client';

import { motion } from 'framer-motion';
import { SiDatabricks } from 'react-icons/si';

const Certifications = () => {
  const certs = [
    {
      title: 'Databricks Fundamentals Accreditation',
      issuer: 'Databricks Academy',
      year: '2024',
    },
    {
      title: 'Developing Applications with Apache Spark',
      issuer: 'Databricks Academy',
      year: '2024',
    },
    {
      title: 'Introduction to Apache Spark',
      issuer: 'Databricks Academy',
      year: '2024',
    },
    {
      title: 'AWS Databricks Cloud Integrations',
      issuer: 'Databricks Academy',
      year: '2024',
    },
  ];

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Certifications
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">Databricks Academy Certifications</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {certs.map((c, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <SiDatabricks className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white">{c.title}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{c.issuer} • {c.year}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a
            href="https://drive.google.com/drive/folders/1kspe9ZGhZ91S5rAboBY_D4SkU8pjeEkc?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            <SiDatabricks className="w-5 h-5" />
            <span>View Certificates</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
