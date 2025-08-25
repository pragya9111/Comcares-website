import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import DOMPurify from 'dompurify';
import { projects } from "../../utils/portfolioData";
import { containerVariants, itemVariants } from "../../utils/animation";
import Button from "../ui/Button";

const ProjectDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => String(p.id) === String(id));

  if (!project) {
    return (
      <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-slate-950 dark:via-gray-800 dark:to-blue-900">
        <div className="max-w-4xl mx-auto p-6 text-center">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Project Not Found
          </h1>
          <Button onClick={() => navigate("/portfolio")} customvariant="primary">
            Back to Portfolio
          </Button>
        </div>
      </div>
    );
  }

  // HTML (sanitized) support
  const safeHtml = project.descriptionHtml
    ? DOMPurify.sanitize(project.descriptionHtml)
    : null;

  return (
    <div className="relative min-h-screen pt-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-slate-950 dark:via-gray-800 dark:to-blue-900 overflow-hidden">
      <motion.div
        className="max-w-5xl mx-auto px-4 md:px-8 py-8 relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Back Button */}
        <motion.div variants={itemVariants}>
          <Button
            onClick={() => navigate("/portfolio")}
            customvariant="primary"
            className="mb-6"
          >
            Back to Portfolio
          </Button>
        </motion.div>

        {/* Hero Section */}
        <motion.div variants={itemVariants} className="mb-12 mt-5 relative">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden relative">
            {/* Project Main Image */}
            <img
              src={project.images}
              alt={project.title}
              className="w-full h-64 md:h-130 object-cover"
            />

            {/* Project Info */}
            <div className="p-6 md:p-8 relative z-10">
              <div className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 mb-4 gap-2">
                <span className="px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 rounded-full text-xs font-medium">
                  {project.industry}
                </span>
                <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 rounded-full text-xs font-medium">
                  Client: {project.client}
                </span>
              </div>
              <div className="flex items-center gap-4 mb-4">
                {project.logo && (
                  <img
                    src={project.logo}
                    alt={project.title}
                    className="w-20 h-20  object-contain rounded-full"
                  />
                )}
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                  {project.title}
                </h1>
              </div>

            </div>
          </div>
          <motion.img
            src="/3d-character.png"
            alt="3D Illustration"
            className="absolute bottom-10 -right-20 w-20 md:w-70 rotate-5 drop-shadow-2xl z-20"
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8">
            {/* Markdown or sanitized HTML */}
            {safeHtml ? (
              <div
                className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-slate-900 dark:prose-headings:text-white"
                dangerouslySetInnerHTML={{ __html: safeHtml }}
              />
            ) : (
              <div className=" prose prose-lg max-w-none
                      dark:prose-invert
                      [&_p]:text-slate-700
                      [&_li]:text-slate-700
                      [&_h2]:text-slate-700
                      dark:[&_p]:text-slate-300
                      dark:[&_li]:text-slate-300
                      dark:[&_h2]:text-white
                      [&_strong]:text-slate-900
                      dark:[&_strong]:text-white">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw]}
                  components={{
                    h2: (props) => <h2 className="mt-6 text-2xl font-bold" {...props} />,
                    h3: (props) => <h3 className="mt-5 text-xl font-semibold" {...props} />,
                    ul: (props) => <ul className="list-disc pl-6 space-y-2" {...props} />,
                    strong: (props) => <strong className="text-slate-900 dark:text-white" {...props} />,
                  }}
                >
                  {project.description}
                </ReactMarkdown>
              </div>
            )}

            {/* Tech chips */}
            <div className="mt-10">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 rounded-full bg-gradient-to-tr from-sky-500 to-slate-700 text-white text-sm font-medium shadow-md"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default ProjectDetail;