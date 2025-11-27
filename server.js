const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Myself and I</title>
        <style>
          body {
            background-color: #f4ecd8;
            font-family: "Georgia", serif;
            color: #3b2f2f;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            overflow: hidden;
          }

          /* Initial pop + bounce animation */
          @keyframes popBounce {
            0% {
              opacity: 0;
              transform: scale(0.4) translateY(60px);
            }
            60% {
              opacity: 1;
              transform: scale(1.05) translateY(-10px);
            }
            100% {
              transform: scale(1) translateY(0);
            }
          }

          /* Continuous gentle bouncing */
          @keyframes continuousBounce {
            0% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-8px);
            }
            100% {
              transform: translateY(0);
            }
          }

          .container {
            background-color: #fff8e7;
            padding: 40px;
            border: 2px solid #c8b89b;
            border-radius: 8px;
            box-shadow: 0px 0px 15px rgba(120, 95, 50, 0.3);
            text-align: center;
            width: 450px;

            /* First animation runs once, second animation loops */
            animation: 
              popBounce 0.8s ease-out, 
              continuousBounce 2s ease-in-out 0.8s infinite;
          }

          h1 {
            margin-top: 0;
            font-size: 32px;
            letter-spacing: 1px;
            text-transform: uppercase;
            border-bottom: 1px solid #c1a475;
            padding-bottom: 10px;
          }

          p {
            font-size: 20px;
            margin: 12px 0;
          }

          em {
            font-size: 18px;
            color: #5a4533;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Mark Aeron M. Vierneza</h1>
          <p><strong>BSIT NT-4101</strong></p>
          <p><em>"Acceptance of what has happened is the first step to overcoming the repercussions of any misfortune."</em></p>
        </div>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log("Server running at http://localhost:" + port);
});
