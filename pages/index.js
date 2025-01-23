import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    // Add the input field and button dynamically
    const mainElement = document.querySelector('main .description');
    const inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.id = 'question';
    inputField.placeholder = 'Type your question here';
    inputField.style = 'margin-top: 10px; padding: 10px; width: 60%; font-size: 16px;';
    
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    submitButton.style = 'margin-left: 10px; padding: 10px 20px; font-size: 16px; background-color: #0070f3; color: white; border: none; border-radius: 5px; cursor: pointer;';
    submitButton.onclick = fetchResponse;

    mainElement.appendChild(inputField);
    mainElement.appendChild(submitButton);
  }, []);

  const fetchResponse = async () => {
    const questionInput = document.getElementById('question');
    const responseDiv = document.getElementById('response');
    const question = questionInput.value.trim();

    if (!question) {
      responseDiv.textContent = 'Please enter a question.';
      return;
    }

    responseDiv.textContent = 'Fetching response...';

    try {
      let myMap = new Map();
      myMap.set("9849805889", "10:00 AM");
      myMap.set("9010289724", "11:00 AM");
      responseDiv.textContent = myMap.get(question);
    } catch (error) {
      responseDiv.textContent = 'Error fetching the response. Please try again.';
      console.error('Error:', error);
    }
  };

  return (
    <div className="container">
      <Head>
        <title>Kaal Gyan with Vishnu Prakash</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Get your slot information" />
        <p className="description">
          Response - <div id="response"></div>
        </p>
      </main>

      <Footer />
    </div>
  )
}
