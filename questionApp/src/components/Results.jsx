import React from 'react'

function Results({correct , wrong ,userAnswer}) {
  return (
    <div className='results'>
      <div>
        <h2>Quiz Tamamlandı</h2>
        <p>Doğru Cevaplar : {correct}</p>
        <p>Yanlış Cevaplar : {wrong}</p>
        <h3>Verdiğiniz Cevaplar</h3>
        <ul>
          {userAnswer.map((answer,i)=>(
            <li key={i}>
              {answer.questionId} : Cevabınız :{answer.answer}(
                {answer.isCorrect ? "Doğru" : "Yanlış"}
              )
            </li>
          ))}
        </ul>
      
      </div>
    </div>
  )
}

export default Results