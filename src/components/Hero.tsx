import { motion } from 'motion/react';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-white pt-16"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl mb-8 text-gray-900">
            山田 太郎
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl">
            東京を拠点に活動するフロントエンドエンジニア兼UI/UXデザイナー。
            機能的で、アクセシブルで、美しいデジタル体験を創造します。
          </p>

          <div className="flex space-x-6">
            <a
              href="mailto:your.email@example.com"
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
            >
              メール
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}