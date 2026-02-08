import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { useState } from 'react';
import ecSiteImage from '../img/ec-site.png';
import ecpf from '../img/pf.png';
import root from '../img/root.png';

export function Projects() {
  const [modalImage, setModalImage] = useState<string | null>(null);

  const projects = [
    {
      title: 'ECサイト 管理画面',
      year: '2020',
      role: 'UI/UI設計 / フロントエンド実装',
      description:
        '既存ECサイトの管理画面において、ステータス管理機能のUI設計およびフロントエンド実装を担当。',
      description2:
        'デザインガイドラインを整理し、再利用可能なコンポーネントとして実装しました。',
      skiles:'HTML / CSS / JavaScript / Figma / Adobe XD',
      image: ecSiteImage,
    },
    {
      title: 'IOTデザインシステム',
      year: '2023',
      role: 'UI設計 / デザインシステム構築',
      description:
      'IoT関連プロダクトにおけるUIのデザインシステム構築を担当しました。',
      description2:
      'UIコンポーネントを整理し、開発者・デザイナー間で共通利用できるデザインルールを策定。実装フェーズを考慮したUI設計を行いました。',
      skiles:'Figma / Adobe XD',
      image: ecpf,
    },
    {
      title: '配送システム（地図UI）',
      year: '2025',
      role: 'UI/UI設計',
      description:
        '配送管理システムにおける/配送管理システムにおける地図表示画面のUI設計。',
      description2:
      '複数拠点・配送状況を把握できるよう、情報の優先度を整理したUI設計を実施',
      skiles:'Figma',
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
                <p className="text-gray-600 leading-relaxed max-w-2xl">
                  {project.description}
                </p>
                <p className="text-gray-600 leading-relaxed mb-6 max-w-2xl">
                  {project.description2}
                </p>
                <p className="text-gray-600 leading-relaxed mb-6 max-w-2xl">
                  {project.skiles}
                </p>

                {project.image && (
                  /* 画像サイズを300pxに制限*/
                  <div style={{ width: '300px', maxWidth: '100%' }}>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setModalImage(project.image)}
                      className="block w-full overflow-hidden rounded-lg border border-gray-200"
                      style={{ cursor: 'pointer', background: 'none', padding: 0 }}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto block hover:opacity-90 transition-opacity"
                      />
                    </motion.button>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- モーダル部分 --- */}
      <AnimatePresence>
        {modalImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalImage(null)}
            /* fixedで画面固定、inset-0で全画面、zIndex: 9999で最前面 */
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.9)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 9999,
              cursor: 'zoom-out'
            }}
          >
            {/* 閉じるボタンを確実に右上に配置 */}
            <button
              onClick={() => setModalImage(null)}
              className="absolute top-10 right-10 text-white hover:text-gray-400 transition-colors"
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            >
              <X size={48} />
            </button>

          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            src={modalImage}
            alt="拡大画像"
            onClick={(e) => e.stopPropagation()} 
            style={{
              /* --- ここでサイズを制限 --- */
              maxWidth: '80%',      // 画面横幅の80%までに制限
              maxHeight: '80vh',    // 画面高さの80%までに制限
              width: 'auto',        // アスペクト比を維持
              height: 'auto',       // アスペクト比を維持
              objectFit: 'contain', // 枠内に収める
              borderRadius: '12px', // 角を少し丸くすると綺麗です
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
            }}
          />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}