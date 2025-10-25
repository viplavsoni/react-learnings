import { useState } from 'react'

import TabButton from "./TabButton.jsx"
import Tabs from './Tabs.jsx';
import Section from './Section.jsx';
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

    return (
        <Section id="examples" title="Examples">
            <Tabs buttons={
                <>
                    <TabButton isSelected={selectedTopic === 'components'} onClick={() => selecthandler('components')}>Components</TabButton>
                    <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => selecthandler('jsx')}>JSX</TabButton>
                    <TabButton isSelected={selectedTopic === 'props'} onClick={() => selecthandler('props')}>Props</TabButton>
                    <TabButton isSelected={selectedTopic === 'state'} onClick={() => selecthandler('state')}>State</TabButton>
                </>}>
                {tabContent}
            </Tabs>
        </Section>)
}