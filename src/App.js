//import product from "./product";
import Card from "react-bootstrap/Card";
import Description from "./components/Description";
import ImageComponent from "./components/Image";
import Name from "./components/Name";
import Price from "./components/Price";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import "./App.css";
function App() {
  const name = "John Doe";
  return (
    <div>
      <div className="alignCard">
        <Card style={{ width: "18rem" }}>
          <ImageComponent />
          <Card.Body>
            <Card.Title>
              <Name />
            </Card.Title>
            <Card.Text>
              <Description />
            </Card.Text>
            <Price className="stylePriceDiv"></Price>
            <div className="buttonDiv">
              <Button variant="primary">Buy Now</Button>
            </div>
          </Card.Body>
        </Card>
      </div>
      <div className="alignCard">
        <p style={{ marginTop: "40px" }}>
          {name ? `Hello ${name}` : `Hello there!`}
          <Image
            src="/user-avatar.png"
            roundedCircle
            style={{ width: "100px", height: "100px" }}
            attributes={{
              alt: (
                <a
                  href="https://www.flaticon.com/free-icons/users-alt"
                  title="users-alt icons"
                >
                  Users-alt icons created by Rahul Kaklotar - Flaticon
                </a>
              ),
            }}
          />
        </p>
      </div>
    </div>
  );
}

export default App;
