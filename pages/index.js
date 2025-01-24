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
      responseDiv.textContent = 'Please enter your phone number (without spaces and without +91) :';
      return;
    }

    responseDiv.textContent = 'Fetching response...';

    try {
      let myMap = new Map();
      myMap.set("9864233644","09 - 00");
      myMap.set("8305988618","09 - 05");
      myMap.set("9945676667","09 - 10");
      myMap.set("9989719790","09 - 20");
      myMap.set("9663366003","09 - 25");
      myMap.set("9999330895","09 - 30");
      myMap.set("7767819401","09 - 35");
      myMap.set("9553876247","09 - 40");
      myMap.set("7381145048","09 - 45");
      myMap.set("9550833742","09 - 50");
      myMap.set("9885735945","09 - 55");
      myMap.set("8501920003","10 - 00");
      myMap.set("9951970339","10 - 05");
      myMap.set("8826669350","10 - 10");
      myMap.set("8309455014","10 - 15");
      myMap.set("9550010675","10 - 20");
      myMap.set("9963547558","10 - 25");
      myMap.set("9866770423","10 - 30");
      myMap.set("9100267839","10 - 35");
      myMap.set("9059081885","10 - 40");
      myMap.set("8919163583","10 - 45");
      myMap.set("8885247961","10 - 50");
      myMap.set("9246276094","10 - 55");
      myMap.set("7571937176","11 - 00");
      myMap.set("8790879006","11 - 05");
      myMap.set("9640883482","11 - 10");
      myMap.set("9676956623","11 - 15");
      myMap.set("9933717809","11 - 20");
      myMap.set("9010654209","11 - 25");
      myMap.set("9008277580","11 - 30");
      myMap.set("9008409048","11 - 35");
      myMap.set("8885247961","11 - 40");
      myMap.set("7000881908","11 - 45");
      myMap.set("7702188570","11 - 50");
      myMap.set("7893677731","11 - 55");
      myMap.set("9000128383","12 - 00");
      myMap.set("8257073880","12 - 05");
      myMap.set("9966129444","12 - 10");
      myMap.set("9866774920","12 - 15");
      myMap.set("8985901006","12 - 25");
      myMap.set("9010093344","12 - 30");
      myMap.set("9985052694","12 - 35");
      myMap.set("9701110322","12 - 40");
      myMap.set("9908366647","12 - 45");
      myMap.set("7893548837","12 - 50");
      myMap.set("9908366647","12 - 55");
      myMap.set("7406494928","13 - 00");
      myMap.set("8125684689","13 - 05");
      myMap.set("9866372119","13 - 10");
      myMap.set("9666140285","13 - 15");
      myMap.set("7981338569","13 - 20");
      myMap.set("7993838738","13 - 25");
      myMap.set("8860138341","13 - 30");
      myMap.set("9652638509","13 - 35");
      myMap.set("7093946630","13 - 40");
      myMap.set("8790759908","13 - 45");
      myMap.set("420703631095","13 - 55");
      responseDiv.textContent = "Your slot is at: " + myMap.get(question);
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
          <div id="response"></div>
        </p>
      </main>

      <Footer />
    </div>
  )
}
