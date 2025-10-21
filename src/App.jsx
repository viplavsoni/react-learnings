import { CORE_CONCEPTS } from './data';
import Header from './components/Header/Header.jsx'
import CoreConcepts from './components/CoreConcepts.jsx';
import TabButton from './components/TabButton.jsx';

function App() {
  let tabContent = 'Please select the tab';

  function selecthandler(selectedButton) {
    console.log('Inside select handler', selectedButton)
  }

  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts {...CORE_CONCEPTS[0]} />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => selecthandler('components')}>Components</TabButton>
            <TabButton onSelect={() => selecthandler('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => selecthandler('props')}>Props</TabButton>
            <TabButton onSelect={() => selecthandler('state')}>State</TabButton>
          </menu>
          Dynamic Content
        </section>
      </main>
    </div>
  );
}

export default App;
