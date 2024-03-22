'use client'
import React, { useEffect, useState } from 'react'
import Loader from '@/app/components/Loader';
import { useRouter } from 'next/navigation';
import Blank from '@/app/components/quizComponent/Blank';
import { useSession } from 'next-auth/react';

type Props = {
  params: {
    quizId: string
  }
}

function BlankQuestionPage({ params: { quizId } }: Props) {
  const { data } = useSession()
  const [quiz, setQuiz] = useState({})
  const [questions, setQuestions] = useState([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  // if (!mongoose.Types.ObjectId.isValid(quizId)) {
  //   return router.push('/dashboard/quiz')
  // }
  useEffect(() => {
    fetch(`/api/questions/${quizId}`)
      .then((res) => res.json())
      .then((data) => {
       
        setQuiz(data['quiz'])
        setQuestions(data['questions'])
    
        setLoading(false)
      })
  }, [])

  return <>

     { loading && <Loader /> }
     { !loading && <><Blank quiz={quiz} questions={questions} userId={data?.user.id} /></> }
  </>
}

export default BlankQuestionPage //65b3d80f4da04f8acf41eece
