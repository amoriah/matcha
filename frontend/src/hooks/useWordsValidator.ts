import { useCallback, useEffect, useState } from 'react';

export const useWordsValidator = () => {
  const [wordsList, setWordsList] = useState<string[]>([]);
  const [isLoadingWords, setIsLoadingWords] = useState(false);

  useEffect(() => {
    const fetchWords = async () => {
      try {
        setIsLoadingWords(true);
        const response = await fetch('/words_list.txt');
        const data = await response.text();
        const words = data.split('\n');
        setWordsList(words);
      } catch (error) {
        console.error('Error to get words list: ', error);
      } finally {
        setIsLoadingWords(false);
      }
    };

    fetchWords();
  }, []);

  const isSimpleEnglishWord = useCallback(
    (password: string) => {
      const hasInvalidValue = wordsList.some(word => word === password);
      if (hasInvalidValue)
        return "Password must'n include common english words";
      return '';
    },
    [wordsList]
  );

  return { isLoadingWords, isSimpleEnglishWord };
};
