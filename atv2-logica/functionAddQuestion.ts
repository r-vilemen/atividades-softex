function addQuestion() {
  let numeroQuestao = 0;

  return () => {
    console.log("");
    console.log(`Questão: ${(numeroQuestao += 1)}`);
  };
}

export const addQ = addQuestion();
