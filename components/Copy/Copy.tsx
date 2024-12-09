interface CopyProps {
  component: string;
}

const Copy: React.FC<CopyProps> = ({ component }) => {
  const handleCopy = async () => {
    const fileUrl = `https://raw.githubusercontent.com/gitnaseem745/solaris-ui/main/components/${component}/${component}.tsx`;

    try {
      const response = await fetch(fileUrl);
      if (!response.ok) {
        throw new Error('Failed to fetch the file content');
      }
      const text = await response.text();
      await navigator.clipboard.writeText(text);
      alert('Component code copied to clipboard!');
    } catch (error) {
      console.error('Error copying file content:', error);
      alert('Failed to copy code. Please try again later.');
    }
  };

  return (
    <button
      onClick={handleCopy}
      style={{
        padding: '10px 20px',
        cursor: 'pointer',
        backgroundColor: '#007BFF',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
      }}
    >
      Copy
    </button>
  );
};

export default Copy;
