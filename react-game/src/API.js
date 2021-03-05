import {shuffleArray} from "./utils";
const hotkeys = ['a', 'b', 'c', 'd']


export const fetchQuizQuestions = async (amount, difficulty, category) => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`
    const data = await (await fetch((endpoint))).json();
    return data.results.map((question) => {
        const a = [...question.incorrect_answers, question.correct_answer]
        const arr = []
        for(let i=0; i<4; i++) {
            arr.push({question: a[i], hotkey: hotkeys[i]})
        }
        return {
            ...question,
            answers: arr
        }
    })
};
