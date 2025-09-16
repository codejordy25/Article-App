import { useEffect, useState } from "react";
import Article from "./Article";

function App() {
  const [isArticleDisplayed, setIsArticleDisplayed] = useState(true);
  const [openArticleCount, setOpenArticleCount] = useState(0);

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
      {isArticleDisplayed && (
        <Article title={"What's new Article 😄"}>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim,
            tempore nisi! <br /> Possimus natus numquam provident nostrum
            dolores, <br />
            eius quod consectetur obcaecati dicta voluptatem earum voluptas id{" "}
            <br />
            assumenda voluptatibus sit nemo.
          </p>
        </Article>
      )}
    </div>
  );
}

export default App;
