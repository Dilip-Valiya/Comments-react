import Comments from "./comments/Comments";
import "./index.css";

const App = () => {
  return (
    <div>
      <h1>Hello from Dilip Valiya!</h1>
      <Comments
        commentsUrl="http://localhost:3004/comments"
        currentUserId="1"
      />
    </div>
  );
};

export default App;
