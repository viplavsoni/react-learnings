import { useState } from 'react'

import TabButton from "./TabButton.jsx"
import { TAB_CONTENTS } from "../data/tab-content.js";

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState();

    function selecthandler(selectedButton) {
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

    return (<section id="examples">
        <h2>Examples</h2>
        <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => selecthandler('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => selecthandler('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => selecthandler('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => selecthandler('state')}>State</TabButton>
        </menu>
        {tabContent}
    </section>)
}