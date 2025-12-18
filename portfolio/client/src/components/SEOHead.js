import { useEffect } from 'react';

function SEOHead({ title, description, image, url, type = 'website' }) {
  useEffect(() => {
    document.title = title;
    
    // Update meta tags
    const updateMeta = (name, content) => {
      let element = document.querySelector(`meta[${name.includes('og:') ? 'property' : 'name'}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(name.includes('og:') ? 'property' : 'name', name);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    updateMeta('description', description);
    updateMeta('og:title', title);
    updateMeta('og:description', description);
    updateMeta('og:type', type);
    if (url) updateMeta('og:url', url);
    if (image) updateMeta('og:image', image);
    updateMeta('twitter:title', title);
    updateMeta('twitter:description', description);
    if (image) updateMeta('twitter:image', image);
    updateMeta('twitter:card', 'summary_large_image');
  }, [title, description, image, url, type]);

  return null;
}

export default SEOHead;
