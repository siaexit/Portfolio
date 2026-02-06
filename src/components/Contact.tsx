import { motion } from 'motion/react';

export function Contact() {
  return (
    <section id="contact" className="py-32 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-8">お問い合わせ</h2>
          <p className="text-gray-600 leading-relaxed mb-8 max-w-2xl">
            現在、新しい機会やコラボレーションを募集しています。
            一緒に仕事をしたい方は、お気軽にご連絡ください。
          </p>
          <a
            href="mailto:your.email@example.com"
            className="inline-block text-gray-900 hover:text-gray-600 transition-colors border-b border-gray-900 hover:border-gray-600 pb-0.5"
          >
            your.email@example.com
          </a>
        </motion.div>
      </div>
    </section>
  );
}