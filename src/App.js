import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  dark,
  atomDark,
  dracula,
  twilight,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { useEffect, useState } from "react";
import axios from "axios";
const Component = ({ data }) => {
  const codeString = data;
  return (
    <SyntaxHighlighter
      language="javascript"
      style={twilight}
      customStyle={{
        minWidth: "60vw",
        minHeight: "30vh",
        maxHeight: "60vh",
        padding: "25px",
        overflowY: "scroll",
      }}
    >
      {codeString}
    </SyntaxHighlighter>
  );
};

function App() {
  const [data, setData] = useState(false);
  const copyCode = (data) => {
    navigator.clipboard.writeText(data);
  };

  const [isScaled, setIsScaled] = useState(false);

  const toggleScale = () => {
    setData(`[
    {
      title: 'Decent product',
      body: 'Very nice product.',
      rating: '3',
      reviewer: 'Pulkashi raju Pulkashi raju.'
    },
    {
      title: 'Value-for-money',
      body: 'Awesome product in this price...',
      rating: '4',
      reviewer: 'Flipkart Customer'
    },
    {
      title: 'Delightful',
      body: 'Good 😊',
      rating: '4',
      reviewer: 'Flipkart Customer'
    },
    {
      title: 'Really Nice',
      body: 'So good',
      rating: '4',
      reviewer: 'Vinit Karmkar'
    },
    {
      title: 'Delightful',
      body: 'Value of money',
      rating: '4',
      reviewer: 'Kuldeep Adi'
    },
    {
      title: 'Nice',
      body: 'Ok ok .. solve the purpose.. Quality was ok',
      rating: '3',
      reviewer: 'Prasadkumar Joshi'
    },
    {
      title: 'Terrific purchase',
      body: 'Ek number product',
      rating: '5',
      reviewer: 'Abhishek Sahana'
    },
    {
      title: 'Wonderful',
      body: 'Nice product',
      rating: '5',
      reviewer: 'Flipkart Customer'
    },
    {
      title: 'Good',
      body: 'Ok',
      rating: '3',
      reviewer: 'PRASHANT SARWADE'
    },
    {
      title: 'Nice product',
      body: 'Value',
      rating: '4',
      reviewer: 'Shivam Kumar'
    },
    {
      title: 'Pretty good',
      body: 'Good 👍',
      rating: '4',
      reviewer: 'Amit Kubade'
    },
    {
      title: 'Just okay',
      body: 'Very nice product',
      rating: '3',
      reviewer: 'Ram odedra'
    },
    {
      title: 'Great product',
      body: 'Value for money set.',
      rating: '5',
      reviewer: 'Ravindrajairaaz Austin Thandhara'
    },
    {
      title: 'Excellent',
      body: 'Nice one Paisa vasol',
      rating: '5',
      reviewer: 'Flipkart Customer'
    },
    {
      title: 'Best in the market!',
      body: 'God',
      rating: '5',
      reviewer: 'Vikash Kumar'
    },
    {
      title: 'Great product',
      body: 'Podece good',
      rating: '5',
      reviewer: 'Samir kumar'
    },
    {
      title: 'Worthless',
      body: 'Bad product',
      rating: '1',
      reviewer: 'Sreenath Sreekuttan'
    },
    {
      title: 'Super!',
      body: 'Good',
      rating: '5',
      reviewer: 'Alk Alok Kumar Vehera'
    },
    {
      title: 'Decent product',
      body: 'Very nice product.',
      rating: '3',
      reviewer: 'Pulkashi raju Pulkashi raju.'
    },
    {
      title: 'Value-for-money',
      body: 'Awesome product in this price...',
      rating: '4',
      reviewer: 'Flipkart Customer'
    },
    {
      title: 'Delightful',
      body: 'Good 😊',
      rating: '4',
      reviewer: 'Flipkart Customer'
    },
    {
      title: 'Really Nice',
      body: 'So good',
      rating: '4',
      reviewer: 'Vinit Karmkar'
    },
    {
      title: 'Delightful',
      body: 'Value of money',
      rating: '4',
      reviewer: 'Kuldeep Adi'
    },
    {
      title: 'Nice',
      body: 'Ok ok .. solve the purpose.. Quality was ok',
      rating: '3',
      reviewer: 'Prasadkumar Joshi'
    },
    {
      title: 'Terrific purchase',
      body: 'Ek number product',
      rating: '5',
      reviewer: 'Abhishek Sahana'
    },
    {
      title: 'Wonderful',
      body: 'Nice product',
      rating: '5',
      reviewer: 'Flipkart Customer'
    },
    {
      title: 'Good',
      body: 'Ok',
      rating: '3',
      reviewer: 'PRASHANT SARWADE'
    },
    {
      title: 'Nice product',
      body: 'Value',
      rating: '4',
      reviewer: 'Shivam Kumar'
    },
    {
      title: 'Pretty good',
      body: 'Good 👍',
      rating: '4',
      reviewer: 'Amit Kubade'
    },
    {
      title: 'Just okay',
      body: 'Very nice product',
      rating: '3',
      reviewer: 'Ram odedra'
    },
    {
      title: 'Great product',
      body: 'Value for money set.',
      rating: '5',
      reviewer: 'Ravindrajairaaz Austin Thandhara'
    },
    {
      title: 'Excellent',
      body: 'Nice one Paisa vasol',
      rating: '5',
      reviewer: 'Flipkart Customer'
    },
    {
      title: 'Best in the market!',
      body: 'God',
      rating: '5',
      reviewer: 'Vikash Kumar'
    },
    {
      title: 'Great product',
      body: 'Podece good',
      rating: '5',
      reviewer: 'Samir kumar'
    },
    {
      title: 'Worthless',
      body: 'Bad product',
      rating: '1',
      reviewer: 'Sreenath Sreekuttan'
    },
    {
      title: 'Super!',
      body: 'Good',
      rating: '5',
      reviewer: 'Alk Alok Kumar Vehera'
    },
    {
      title: 'Decent product',
      body: 'Very nice product.',
      rating: '3',
      reviewer: 'Pulkashi raju Pulkashi raju.'
    },
    {
      title: 'Value-for-money',
      body: 'Awesome product in this price...',
      rating: '4',
      reviewer: 'Flipkart Customer'
    },
    {
      title: 'Delightful',
      body: 'Good 😊',
      rating: '4',
      reviewer: 'Flipkart Customer'
    },
    {
      title: 'Really Nice',
      body: 'So good',
      rating: '4',
      reviewer: 'Vinit Karmkar'
    },
    {
      title: 'Delightful',
      body: 'Value of money',
      rating: '4',
      reviewer: 'Kuldeep Adi'
    },
    {
      title: 'Nice',
      body: 'Ok ok .. solve the purpose.. Quality was ok',
      rating: '3',
      reviewer: 'Prasadkumar Joshi'
    },
    {
      title: 'Terrific purchase',
      body: 'Ek number product',
      rating: '5',
      reviewer: 'Abhishek Sahana'
    },
    {
      title: 'Wonderful',
      body: 'Nice product',
      rating: '5',
      reviewer: 'Flipkart Customer'
    },
    {
      title: 'Good',
      body: 'Ok',
      rating: '3',
      reviewer: 'PRASHANT SARWADE'
    },
    {
      title: 'Nice product',
      body: 'Value',
      rating: '4',
      reviewer: 'Shivam Kumar'
    },
    {
      title: 'Decent product',
      body: 'Very nice product.',
      rating: '3',
      reviewer: 'Pulkashi raju Pulkashi raju.'
    },
    {
      title: 'Value-for-money',
      body: 'Awesome product in this price...',
      rating: '4',
      reviewer: 'Flipkart Customer'
    },
    {
      title: 'Delightful',
      body: 'Good 😊',
      rating: '4',
      reviewer: 'Flipkart Customer'
    },
    {
      title: 'Really Nice',
      body: 'So good',
      rating: '4',
      reviewer: 'Vinit Karmkar'
    },
    {
      title: 'Delightful',
      body: 'Value of money',
      rating: '4',
      reviewer: 'Kuldeep Adi'
    },
    {
      title: 'Nice',
      body: 'Ok ok .. solve the purpose.. Quality was ok',
      rating: '3',
      reviewer: 'Prasadkumar Joshi'
    },
    {
      title: 'Terrific purchase',
      body: 'Ek number product',
      rating: '5',
      reviewer: 'Abhishek Sahana'
    },
    {
      title: 'Wonderful',
      body: 'Nice product',
      rating: '5',
      reviewer: 'Flipkart Customer'
    },
    {
      body: 'Ok',
      rating: '3',
      reviewer: 'PRASHANT SARWADE'
    },
    {
      title: 'Nice product',
      body: 'Value',
      rating: '4',
      reviewer: 'Shivam Kumar'
    }
  ]`);
  };

  useEffect(() => {
    if (data) {
      setIsScaled(true);
    } else {
      setIsScaled(false);
    }
  }, [data]);

  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      setData(false);
      let backendLink = `http://localhost:9000/api/reviews`;
      if (!inputValue) {
        throw "Required URL ";
      } else {
        backendLink = backendLink + `?page=${inputValue}`;
      }

      const response = await axios.get(backendLink);
      if (response.data) {
        console.log(response.data);
        setData(JSON.stringify(response.data, null, 2));
      }
    } catch (error) {
      console.log(error)
      alert(error.response.data.message||error.message || error);
    }
  };

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkWidth = () => {
      const width = window.innerWidth;
      setIsMobile(width < 528); // Change 768 to your desired width
    };

    checkWidth(); // Check on component mount
  }, []);

  if (isMobile) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h3>Only supported desktop version</h3>
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundColor: "#00272B",
        color: "black",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <Navbar />
      {/* <button onClick={toggleScale}>toggleScale</button> */}
      <div
        style={{
          border: "2px dashed #14DCD2",
          borderRadius: "1rem",
          width: "60vw",
          minHeight: "4rem",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          gap: "1rem",
          padding: "1rem",
        }}
      >
        <input
          className="input-field"
          placeholder="Paste product review page link"
          onChange={handleInputChange}
          value={inputValue}
        />
        <button className="submit-button" onClick={handleSubmit}>
          Scrape
        </button>
      </div>
      <div
        id="outputBox"
        className={`outputBox ${isScaled ? "open" : ""}`}
        style={{
          position: "relative",
          maxWidth: "65vw",
          minWidth: "60vw",
          display: `${data ? "block" : "none"}`,
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            position: "absolute",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <p
            id="copyCode"
            style={{
              background: "none",
              color: "GrayText",
              cursor: "pointer",
              fontWeight: "600",
              marginRight: "50px",
              border: "0.1rem solid",
              paddingBlock: "3px",
              paddingInline: "6px",
            }}
            onClick={() => copyCode(data)}
          >
            copy
          </p>
        </div>
        <Component data={data} />
      </div>
    </div>
  );
}

export default App;
