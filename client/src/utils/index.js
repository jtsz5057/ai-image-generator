import { surpriseMePrompts } from '../constants';

export function getRandomPrompt(prompt) {
    // Generate a random index within the range of surpriseMePrompts array
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);

    // Retrieve the prompt at the randomly generated index
    const randomPrompt = surpriseMePrompts[randomIndex];

    // If a specific prompt is provided and it matches the randomly selected prompt,
    // recursively call getRandomPrompt to get a new prompt until a different one is selected.
    if(randomPrompt === prompt) return getRandomPrompt(prompt);

    // Return the randomly selected prompt
    return randomPrompt;
}
