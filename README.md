<a name="readme-top"></a>

<div align="center">
  <h3 align="center">Dynamic Tooltip</h3>
</div>

### Flowchart of how things are working:
<p align="center">
  <img src="https://github.com/sanz17/dynamic-tooltip/blob/main/Target%20Element.png">
</p>


## About the App

In-app nudges serve as non-intrusive aides for various mobile app features. So the application Sets up tooltips that will help draw attention to a specific screen element. A frontend application that renders a tooltip with dynamic positioning, design, and text, as well as a live preview of the tooltip while it is being rendered, without the use of predefined libraries. 

#### Demo: https://drive.google.com/file/d/1flMgEeK_VPDqM6EyGsy8P2UjPgVn8iFX/view?pli=1

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Key Features

- Customise your own tooltip
- Live modile emulator rendering
- Responsive in any device
- Toast to clarify the constraints

## Tech Stack

- NodeJS
- Netlify
- Docker
- Figma

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

### Prerequisites
Install [Node.js and npm](https://nodejs.org/en/download/)

### Setup

Clone the repo
```sh
git clone https://github.com/sanz17/dynamic-tooltip.git
```

Change into the directory, and install the required dependencies
```shell
cd dynamic-tooltip
npm i
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

### Local Run

Start the server instance
```sh
npm start
OR
npm run dev (for development environment)
```

### Docker Run

Start the server instance
```sh
cd backend
docker build -t chat-backend .
docker run -it chat-backend
```

You may spin up multiple client instances
```sh
cd frontend
docker build -t chat-backend .
docker run -it chat-backend
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Folder Structure
```
.

├── README.md
├── Target Element.png
├── package.json
├── package-lock.json
├── .gitignore
├── src
│   ├── components
|   |   ├──Footer.js
|   |   ├──Home.js
|   |   ├──Left.js
|   |   ├──Right.js
|   |   └──Right.css
│   ├── App.js
│   ├── App.css
|   ├──App.test.js
|   ├──index.css
|   ├──index.js
|   ├──logo.svg
|   ├──reportWebVitals.js
│   └── setupTests.js
└── public
    ├── favicon.ico
    └── index.html
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Limitations

Since the frontend is dynamic and user-customizable, the px level values must be within range so that the document's formatting is not compromised.

The ranges are mentioned in a toast of the app:
- Text size 25px range
- Padding 20px range
- Tooltip width 150-300px
- Arrowtip height < 10px

We are using ReactJS for more dynamic and lightweight code because although NextJS is superior for applications with multiple routes, but our application doesnot need a redirection feature.


## Possible Solution

Contrary to initial impressions, the lack of browser compatibility with HyperDHT doesn't prevent us from crafting the frontend of our application in React. To overcome this, we need a connection handling mechanism that mirrors HyperDHT’s functionalities, yet is inherently designed for browser-based environments.

By creating a solution that emulates HyperDHT's capabilities but is tailored for browser compatibility, we're able to build a robust P2P chat application. This application combines the sophisticated UI potential of React for frontend development with a browser-friendly implementation for secure, P2P connections, analogous to the service offered by HyperDHT.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Contact

Sanhita Kundu - kundusanhita13@gmail.com

GitHub Link: [https://github.com/sanz17](https://github.com/sanz17)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<p align="center">Made with ❤ by Sanhita Kundu</p>