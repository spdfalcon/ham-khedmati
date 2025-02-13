'use client'
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-secondary-800 to-secondary-900">
      <div className="text-center px-4">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-9xl font-extrabold text-primary-400 drop-shadow-lg"
        >
          404
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-4 text-2xl text-secondary-200"
        >
          صفحه‌ای که دنبال آن بودید پیدا نشد.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-8"
        >
          <Link
            href="/"
            className="inline-block bg-primary-500 text-secondary-800 px-6 py-3 rounded-full font-semibold hover:bg-primary-600 transition-colors duration-300"
          >
            بازگشت به خانه
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFoundPage;
