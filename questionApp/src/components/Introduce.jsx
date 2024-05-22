import React from 'react'


function Introduce({startTest , style}) {

    const info = [
        {
        id:1,
        description: "Test 10 sorudan oluşmaktadır.",
        },
        {
          id:2,
        description: "Start'a bastığınızda süreniz başlayacaktır.",  
        },
        {
          id:3,
          description: "Her soru için 30 sn hakkınız bulunmaktadır.",  
        },
        {
          id:4,
          description: "Cevaplar 10 sn sonra ekranda belirecektir.",  
        },
        {
          id:5,
          description: "Seçeneklerden birine tıkladıktan veya 30 saniyeyi tamamladıktan sonra yeni soruya geçeceksiniz.",  
        },
        {
          id:6,
          description: "Geçmiş sorulara dönüş olmayacaktır.",
        }

        
    ]

 
  return (
    <div className='introduce' style={style}>
        <h1>Quiz App'e Hoşgeldiniz</h1>
        <hr/>
        <ul className='info'>
              {info.map((item) => (
            <li key={item.id}>{item.description}</li>
          ))}
        </ul>
        <button id='start' onClick={startTest}>START</button>
       
    
    </div>
    
  )
}

export default Introduce