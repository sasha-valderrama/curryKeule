import Footer from './components/footer/Footer'
import Header from './components/header'
import Main from './components/main/Main'
import Section from './components/ui/sections/Section'

function App() {
  return (
    <>
      <Header />
      <Main
        subtitle="Pass ma uff!"
        title="Dein bester Keule im juten alten Wedding"
      />
      <Section section="Speisen und Getränke">
        <p>dfdfsfdsdfdfdsfdsfdsf</p>
      </Section>
      <Section section="Unsere Bestseller!">
        <p>dfdsfdsfdsfdf</p>
      </Section>
      <Section section="Tageskarte">
        <p>dfsdf</p>
      </Section>
      <Footer />
    </>
  )
}

export default App
