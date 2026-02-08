import { motion } from 'motion/react';
import { X } from 'lucide-react';
import { useState } from 'react';
import ecSiteImage from '../img/ec-site.png';
import ecpf from '../img/pf.png';
import root from '../img/root.png';

export function Projects() {
  const [modalImage, setModalImage] = useState<string | null>(null);

  const projects = [
    {
      title: 'ECサイト',
      year: '2020',
      role: 'UI/UXデザイン及びフロントエンジニア',
      description:
        '大規模ECプラットフォームの再設計。デザインシステムを構築、レスポンシブなフロントエンドを実装。',
      image: ecSiteImage,
    },
    {
      title: 'IOTデザインシステム',
      year: '2023',
      role: 'デザインシステムリード',
      description:
        '50以上のコンポーネント、ドキュメント、ガイドラインを含む包括的なデザインシステムを構築。5つ以上のプロダクトチームで採用。',
      image: ecpf,
    },
    {
      title: '配送システム',
      year: '2025',
      role: 'UI/UXデザイナー',
      description:
        'モバイルバンキングアプリケーションのUX/UIデザイン。ユーザーリサーチを実施し、ワイヤーフレームと高精度プロトタイプを作成。',
      image: root,
    },
  ];

return (
    <>
      <section id="projects" className="py-32 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl text-gray-900">実績</h2>
          </motion.div>

          <div className="space-y-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border-b border-gray-100 pb-16 last:border-b-0"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl text-gray-900">{project.title}</h3>
                  <span className="text-sm text-gray-500">{project.year}</span>
                </div>
                <p className="text-sm text-gray-500 mb-4">{project.role}</p>
                <p className="text-gray-600 leading-relaxed mb-6 max-w-2xl">
                  {project.description}
                </p>
                {project.image && (
                  <button
                    onClick={() => setModalImage(project.image)}
                    className="block overflow-hidden rounded border border-gray-200 hover:border-gray-300 transition-colors"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full max-w-sm h-auto hover:opacity-90 transition-opacity"
                    />
                  </button>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setModalImage(null)}
        >
          <button
            onClick={() => setModalImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          >
            <X size={32} />
          </button>
          <img
            src={modalImage}
            alt="プロジェクト詳細"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}