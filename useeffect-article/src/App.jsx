import Article from "./Article";

function App({ title }) {
  title = "Comprendre UseEffect";
  return (
    <div>
      <h2>{title}</h2>
      <button>Hide Article</button>
      <Article>
        <h3>Hello World Article</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim,
          tempore nisi! <br /> Possimus natus numquam provident nostrum dolores,{" "}
          <br />
          eius quod consectetur obcaecati dicta voluptatem earum voluptas id{" "}
          <br />
          assumenda voluptatibus sit nemo.
        </p>
      </Article>
    </div>
  );
}

export default App;
