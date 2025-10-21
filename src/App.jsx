import { useState } from 'react'
import { CORE_CONCEPTS } from './data';
import Header from './components/Header/Header.jsx'
import CoreConcepts from './components/CoreConcepts.jsx';
import TabButton from './components/TabButton.jsx';
import { TAB_CONTENTS } from './data/tab-content.js';

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function selecthandler(selectedButton) {
    console.log('Inside select handler', selectedButton);
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please select the tab for more details</p>;
  if (selectedTopic) {
    tabContent = (<div id='tab-content'>
      <h3>{TAB_CONTENTS[selectedTopic].title}</h3>
      <p>{TAB_CONTENTS[selectedTopic].description}</p>
      <pre>
        <code>{TAB_CONTENTS[selectedTopic].code}</code>
      </pre>
    </div>)
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
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => selecthandler('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => selecthandler('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => selecthandler('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => selecthandler('state')}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
