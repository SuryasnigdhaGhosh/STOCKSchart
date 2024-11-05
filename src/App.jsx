
import './App.css'
import StockChart from './StockChart'


function App() {

  return (
    <>
      <h1 className='heading'>
        STOCKSchart
      </h1>
      <div className="parent">
        <StockChart name="Apple Inc." ticker="AAPL" desc="Apple Inc. (AAPL) stands as one of the world's most influential technology companies. It is renowned for its innovative and iconic products, such as the iPhone, iPad, Mac computers, and Apple Watch. Apple's ecosystem also includes software and services like iOS, macOS, the App Store, and Apple Music. With a history of pushing the boundaries of technology and design, Apple is a global leader in the consumer electronics and tech industry. Its commitment to user-friendly experiences and its dedication to sustainability continue to shape the future of technology."/>
        <StockChart name="Microsoft Corporation" ticker="MSFT" desc="Microsoft Corporation (MSFT) is a multinational technology giant with a wide-ranging portfolio of products and services. It is most notably recognized for the Windows operating system, Office productivity suite, and Azure cloud platform. Microsoft caters to both consumers and businesses, offering software, hardware, and cloud solutions. With a strong commitment to innovation and a focus on empowering individuals and organizations through technology, Microsoft remains a key player in the global tech landscape."/>
        <StockChart name="Tesla, Inc." ticker="TSLA" desc="Tesla, Inc. (TSLA) is an industry pioneer in electric vehicle (EV) manufacturing and sustainable energy solutions. Founded by entrepreneur Elon Musk, Tesla is renowned for its electric cars, including the Model S, Model 3, Model X, and Model Y. Beyond EVs, the company ventures into renewable energy and energy storage with products like the Powerwall and solar technologies. Tesla's mission is to accelerate the world's transition to sustainable transportation and energy production, making it a trailblazer in the quest for a greener future."/>
        <StockChart name="Amazon.com, Inc." ticker="AMZN" desc="Amazon.com, Inc. (AMZN) is the world's largest e-commerce and cloud computing company, with a vast and diverse range of offerings. Its e-commerce platform connects consumers with a broad array of products, from books to electronics and everything in between. In addition to retail, Amazon offers Prime Video for streaming content, Amazon Web Services (AWS) for cloud computing, and devices like the Kindle e-reader and Echo smart speakers. Amazon's innovative approach to retail and its influence in the digital space have cemented its position as a global powerhouse in the modern economy."/>
        <StockChart name="Meta Platforms, Inc." ticker="META" desc="Formerly known as Facebook, Meta Platforms, Inc. (META) is a conglomerate that encompasses several influential social media and technology platforms. Its key assets include Facebook, Instagram, WhatsApp, and Oculus. These platforms connect billions of people globally, facilitating communication, content sharing, and social interaction. Meta is also actively involved in the development of virtual reality and augmented reality technologies, envisioning a future where the digital and physical worlds seamlessly merge. As a leader in the social media and metaverse space, Meta plays a pivotal role in shaping the way people connect and experience the internet."/>
        </div>
    </>
  )
}

export default App
