import { useEffect } from 'react';
import clarity from '@microsoft/clarity';

interface ClarityProps {
  projectId: string;
}

const Clarity: React.FC<ClarityProps> = ({ projectId }) => {
  useEffect(() => {
    // Initialize Microsoft Clarity
    clarity.init(projectId);
    
    // Optional: Set user properties
    clarity.setTag('page', window.location.pathname);
    
    console.log('Microsoft Clarity initialized with project ID:', projectId);
  }, [projectId]);

  return null; // This component doesn't render anything
};

export default Clarity;

// Alternative method using script injection (if the npm package doesn't work)
export const initClarityScript = (projectId: string) => {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.innerHTML = `
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "${projectId}");
  `;
  document.head.appendChild(script);
};