import CoreConcept from "./CoreConcept.jsx"
import Section from "./Section.jsx"
import { CORE_CONCEPTS } from "../data.js"

export default function CoreConcepts() {
    return (
        <Section id='core-concepts' title="Core Concepts">
            <ul>
                {CORE_CONCEPTS.map((conceptItem) => (<CoreConcept key={conceptItem.title} {...conceptItem} />))}
            </ul>
        </Section>)
}