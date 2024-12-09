import DarkButton from "../DarkButton/DarkButton";

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
    <DarkButton
      onClick={handleCopy}
      label={"copy"}
    />
  );
};

export default Copy;
