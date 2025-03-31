import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

interface FilePreviewProps {
  file: File | null; // 接收文件作为属性
  onClose: () => void; // 关闭预览的回调
}

const FilePreview: React.FC<FilePreviewProps> = ({ file, onClose }) => {
  const [fileContent, setFileContent] = useState<string | null>(null);

  useEffect(() => {
    if (file) {
      const fileExtension = file.name.split('.').pop()?.toLowerCase() || null;
      if (fileExtension === 'pdf') {
        const reader = new FileReader();
        reader.onload = (e) => {
          const result = e.target?.result;
          if (typeof result === 'string') {
            setFileContent(result);
          }
        };
        reader.readAsDataURL(file); // 读取为 Data URL
      } else {
        setFileContent(null); // 不支持的文件类型
      }
    }
  }, [file]);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/60 flex items-center justify-center z-50 font-PingFangSC">
      <div className="mx-auto p-10 flex flex-col items-center justify-between w-1/3 min-h-11/12 bg-white rounded-[8px] text-font-primary">
        <div className="w-full flex justify-between">
          <h3 className="w-full text-left opacity-100 text-xl">简历详情</h3>
          <X
            color="#0030ae"
            size={24}
            className="cursor-pointer"
            onClick={onClose}
          />
        </div>
        {/* 文件预览 */}
        {fileContent && (
          <iframe
            className="my-5 w-full h-full grow"
            src={fileContent}
            title="File Preview"
          />
        )}
        {/* 按钮 */}
        <div className="w-2xs flex justify-between text-sm">
          <button
            className="bg-font-primary text-white w-20 h-10 rounded-[8px]"
            aria-label="重传文件预览"
            onClick={() => {
              // 触发文件重新上传
              const fileInput = document.getElementById(
                'resume',
              ) as HTMLInputElement;
              if (fileInput) {
                fileInput.click();
              }
            }}>
            重新上传
          </button>
          <button
            className="bg-font-primary text-white w-20 h-10 rounded-[8px]"
            aria-label="确认文件无误">
            确认无误
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilePreview;
