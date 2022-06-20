import React, { useContext, useState } from 'react';
import { QuizContext } from '../../Context';
import Button from '../Button';
import Widget from '../Widget';

export default function QuestionWidget() {
  const { questions, questionIndex } = useContext(QuizContext);
  const [chosenAlternative, setChosenAlternative] = useState(-1);
  const currentQuestion = questions[questionIndex];
  const { alternatives, answer } = currentQuestion;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setChosenAlternative(Number(value));
  };

  return (
    <Widget>
      <Widget.Header>
        {`Pergunta ${questionIndex + 1} de ${questions.length}`}
      </Widget.Header>
      <Widget.Content>
        <h2>{currentQuestion.title}</h2>
        <Widget.Form>
          {alternatives.map((alternative, i) => (
            <label
              htmlFor={`alternative-${i}`}
              key={i}
              className={`${chosenAlternative === i ? 'active' : ''}`}
            >
              <input
                type="radio"
                name="alternative"
                id={`alternative-${i}`}
                checked={chosenAlternative === i}
                value={i}
                onChange={handleChange}
              />
              {alternative}
            </label>
          ))}

          <Button>Confirmar</Button>
        </Widget.Form>
      </Widget.Content>
    </Widget>
  );
}