import React from 'react';

interface MediaPreviewProps {
  mediaUrl?: string;
  mediaType?: 'image' | 'video' | 'gif';
  title: string;
  width?: string;
  aspectRatio?: string;
}

export const MediaPreview: React.FC<MediaPreviewProps> = ({
  mediaUrl,
  mediaType = 'image',
  title,
  width = '220px',
  aspectRatio = '4 / 3'
}) => {
  if (!mediaUrl) {
    return (
      <div
        style={{
          width: '100%',
          maxWidth: width,
          aspectRatio: aspectRatio,
          backgroundColor: '#F1F5F9',
          borderRadius: '12px',
          border: '1px solid var(--border-light)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--text-muted)',
          fontSize: '0.75rem',
          fontWeight: 600
        }}
      >
        <span>4:3 Preview</span>
      </div>
    );
  }

  return (
    <div
      style={{
        width: '100%',
        maxWidth: width,
        aspectRatio: aspectRatio,
        borderRadius: '12px',
        overflow: 'hidden',
        border: '1px solid var(--border-light)',
        backgroundColor: '#F8FAFC',
        flexShrink: 0
      }}
    >
      {mediaType === 'video' ? (
        <video
          src={mediaUrl}
          autoPlay
          loop
          muted
          playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      ) : (
        <img
          src={mediaUrl}
          alt={title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      )}
    </div>
  );
};
