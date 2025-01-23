import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Kaal Gyan with Vishnu Prakash</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Get your slot information" />
        <p className="description">
          Enter your phone number: <input type="text" id="question" placeholder="Type your question here">
          <button onclick="fetchResponse()">Submit</button>

          Response - <div id="response"></div>
        </p>

        <script>
                async function fetchResponse() {
                  const questionInput = document.getElementById('question');
                  const responseDiv = document.getElementById('response');
                  const question = questionInput.value.trim();
            
                  if (!question) {
                    responseDiv.textContent = 'Please enter a question.';
                    return;
                  }
            
                  responseDiv.textContent = 'Fetching response...';
            
                  try {
                    // Replace YOUR_GOOGLE_APPS_SCRIPT_URL with your deployed Apps Script URL
                    const apiUrl = `https://script.google.com/macros/s/AKfycbwmnFM366ICRjriXu2jB6ngYCmAVbpGubTE9q6fRtLVMxe4XmYApMSQsULE8FO8oNUU/exec?q=${encodeURIComponent(question)}`;
                    const response = await fetch(apiUrl);
                    const text = await response.text();
                    responseDiv.textContent = text;
                  } catch (error) {
                    responseDiv.textContent = 'Error fetching the response. Please try again.';
                    console.error('Error:', error);
                  }
                }
      </script>
      </main>

      <Footer />
    </div>
  )
}
