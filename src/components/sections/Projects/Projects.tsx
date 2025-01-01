import { AppleCarousel, Card } from "@/components/aceternity-ui/apple-cards-carousel.tsx/Apple-cards-carousel";
import Veezu from "./veezu-mockup-2.png"
import Camino from "./camino-mockup.png"
import Alpro from "./alpro-mockup.png"
import AlproHealthcare from "./alpro-healthcare-mockup.png"
import AlproFoundation from "./alpro-foundation-mockup.png"
import Seawatch from "./seawatch-mockup.png"

export function Projects() {
  return (
    <div className="container">
      <h2 className="ml-5 text-4xl font-semibold">Projects which I have worked on</h2>
      
      <AppleCarousel
        items={[
          <Card 
            key='first'
            card={{ 
              category: "British Taxi Service",
              title: "Veezu",
              src: Veezu.src,
              content: <></>
            }}
            index={0}
          />,
          <Card 
            key='first'
            card={{ 
              category: "Loan agency",
              title: "Camino",
              src: Camino.src,
              content: <></>
            }}
            index={0}
          />,
          <Card 
            key='first'
            card={{ 
              category: "Products",
              title: "Alpro",
              src: Alpro.src,
              content: <></>
            }}
            index={0}
          />,
          <Card 
            key='first'
            card={{ 
              category: "Informational Blog",
              title: "Alpro Healthcare Professionals",
              src: AlproHealthcare.src,
              content: <></>
            }}
            index={0}
          />,
          <Card 
            key='first'
            card={{ 
              category: "Informational Blog",
              title: "Alpro Foundation",
              src: AlproFoundation.src,
              content: <></>
            }}
            index={0}
          />,
          <Card 
            key='first'
            card={{ 
              category: "NGO",
              title: "Seawatch",
              src: Seawatch.src,
              content: <></>
            }}
            index={0}
          />,
        ]}
      />
    </div>
  )
}