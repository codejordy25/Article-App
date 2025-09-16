import { useEffect, useState } from "react";
import Article from "./Article";

function App() {
  const [isArticleDisplayed, setIsArticleDisplayed] = useState(true);
  const [openArticleCount, setOpenArticleCount] = useState(0);
  const [article, setArticle] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((data) => setArticle(data))
      .catch(console.error);
  }, []);

  useEffect(() => {
    //S'excécute au montage du composant
    if (isArticleDisplayed) {
      setOpenArticleCount((prevC) => prevC + 1);
    }
  }, [isArticleDisplayed]);
  //S'exécute à la MAJ du isArticleDisplayed

  function handleToggleArticle() {
    setIsArticleDisplayed(!isArticleDisplayed);
    // setIsVisible((pre) => !pre); //Button pour faire varié la valeur de la propriété
  }

  return (
    <div>
      <h1>Tout commence ici</h1>
      <button onClick={handleToggleArticle}>
        {isArticleDisplayed ? "Hide Article" : "Show Article"}
      </button>
      <p>You opened Article {openArticleCount}: times</p>
      {isArticleDisplayed && article && (
        <Article title={article.title}>
          <p>{article.body}</p>
        </Article>
      )}
    </div>
  );
}

export default App;
